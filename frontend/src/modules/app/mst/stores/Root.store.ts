import { flow, types } from 'mobx-state-tree'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'
import { removeSessionJWTFromCookie, setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'
import { parseJwt } from '@/helpers/parseJwt'
import { QueryClient } from '@tanstack/react-query'
import { generateTSClient, generateURQLClient } from '@/graphql/client'

export const Root$ = types
    .model('Root$', {
        isDarkTheme: true,
        userId: '',
        role: types.maybe(types.enumeration(['hero', 'guest', 'super_hero', 'admin'])),
        initLoading: true,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
    .views((self) => ({
        get isSuperHero() {
            return self.role === 'super_hero'
        },
    }))
    .actions((self) => ({
        onChangeTheme() {
            self.isDarkTheme = !self.isDarkTheme
            const key = 'dark'
            localStorage.setItem(key, self.isDarkTheme.toString())
            document.querySelector('html')!.setAttribute(key, self.isDarkTheme.toString())
        },
        selectUser: flow(function* selectUser({ user }: { user: { id?: string; role?: string } }) {
            self.userId = user.id || ''
            self.role = user.role
            window.urqlClient = yield generateURQLClient({ new: true })
            window.genqlClient = yield generateTSClient({ new: true })
            self.initLoading = false
        }),

        logout(queryClient: QueryClient): void {
            queryClient.resetQueries()
            queryClient.clear()
            window.urqlClient = null
            window.genqlClient = null
            self.userId = ''
            self.role = undefined
            removeSessionJWTFromCookie()
        },
        autoLogin: flow(function* _autoLogin() {
            const res = yield server_getSessionCredentials()
            const credentials = res?.serverCredentials
            if (!credentials) return
            setAccessIdInCookie(credentials.accessJWT)
            setSessionJWTInCookie(credentials.sessionJWT)
            const data = parseJwt(credentials.accessJWT)
            self.userId = data?.id || ''
            self.role = data?.role
            self.initLoading = false
        }),
    }))
