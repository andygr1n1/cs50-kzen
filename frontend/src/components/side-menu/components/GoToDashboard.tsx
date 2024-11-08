import { APP_ROUTES_ENUM } from '@/services/enums'
import { useLocation } from 'react-router-dom'
import { SideMenuLink } from './SideMenuLink'
import { Logout } from '@/components/logout/Logout'
import { ThemeSwitcher } from '@/components/side-menu/components/ThemeSwitcher'
import { XButton } from '@/components-x/x-button/XButton'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'

export const GoToDashboard = () => {
    const location = useLocation()
    const isDashboard = location.pathname === `/${APP_ROUTES_ENUM.DASHBOARD}`

    return (
        <div className='mx-6 flex flex-col gap-5'>
            <SideMenuLink to={APP_ROUTES_ENUM.DASHBOARD} className={isDashboard ? '!opacity-100' : ''}>
                <XButton rounded className='!w-full' size='extraLarge'>
                    Dashboard
                </XButton>
            </SideMenuLink>
            <XMenuDivider />
            <div className='flex h-[45px] w-full items-center justify-center gap-2'>
                <ThemeSwitcher />
                <Logout />
            </div>
        </div>
    )
}
