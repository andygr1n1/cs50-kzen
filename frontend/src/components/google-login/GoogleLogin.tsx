import { XButton } from '../../components-x/x-button/XButton'
import { IconGoogle } from '@/assets/icons/IconGoogle'

import { useGoogleKzenLogin } from './hooks/useGoogleKzenLogin'

export const GoogleLogin = () => {
    const { googleLogin } = useGoogleKzenLogin()

    return (
        <XButton variant='outlined' onClick={() => googleLogin()} startIcon={<IconGoogle className='text-rose-500' />}>
            Sign in with Google
        </XButton>
    )
}
