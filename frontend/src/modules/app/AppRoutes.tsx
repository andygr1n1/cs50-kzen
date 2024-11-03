import { Suspense, lazy } from 'react'
import { useJwtAuth } from './hooks/useJwtAuth.hook'
import { observer } from 'mobx-react-lite'
const AnonymousRoutes = lazy(() => import('./components/anonymous-routes/AnonymousRoutes'))
const ProtectedRoutes = lazy(() => import('./components/protected-routes/ProtectedRoutes'))

export const AppRoutes: React.FC = observer(() => {
    const { userId } = useJwtAuth()

    return userId ? (
        <Suspense>
            <ProtectedRoutes />
        </Suspense>
    ) : (
        <Suspense>
            <AnonymousRoutes />
        </Suspense>
    )
})
