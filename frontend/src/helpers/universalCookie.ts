import { addMinutes, getUnixTime } from 'date-fns'
import Cookies from 'universal-cookie'
import { jwtDecode } from 'jwt-decode'
const cookies = new Cookies()

export const setAccessIdInCookie = (id?: string | null) => {
    if (!id) return

    // Decode the JWT token to get the expiration time
    const decodedToken = jwtDecode(id)
    if (!decodedToken.exp) return

    const exp = decodedToken.exp * 1000
    const expires = new Date(exp)

    cookies.set('accessJWT', id, { path: '/', expires, sameSite: 'lax' })
}

export const getAccessIdFromCookie = (): string | null => {
    return cookies.get('accessJWT')
}

export const jwtVerify = (id?: string | null): boolean => {
    if (!id) return false

    const decodedToken = jwtDecode(id)
    if (!decodedToken?.exp) return false
    const currentTime = getUnixTime(new Date())
    const bufferTime = addMinutes(new Date(currentTime * 1000), 2)
    const expirationTime = decodedToken.exp
    if (getUnixTime(bufferTime) >= expirationTime) {
        return false
    }

    return true
}

export const setSessionJWTInCookie = (id?: string | null) => {
    if (!id) return

    // Decode the JWT token to get the expiration time
    const decodedToken = jwtDecode(id)
    if (!decodedToken.exp) return

    const exp = decodedToken.exp * 1000
    const expires = new Date(exp)
    cookies.set('sessionJWT', id, { path: '/', expires, sameSite: 'lax' })
}
export const getSessionJWTFromCookie = (): string | null => {
    return cookies.get('sessionJWT')
}

export const removeSessionJWTFromCookie = () => {
    cookies.remove('sessionJWT')
    cookies.remove('accessJWT')
}
