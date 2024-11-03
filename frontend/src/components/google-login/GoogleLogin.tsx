import { StyledButton } from '../buttons/StyledButton'
import { IconGoogle } from '@/assets/icons/IconGoogle'

import { useGoogleKzenLogin } from './hooks/useGoogleKzenLogin'

export const GoogleLogin = () => {
    const { googleLogin } = useGoogleKzenLogin()

    return (
        <StyledButton
            variant='outlined'
            onClick={() => googleLogin()}
            startIcon={<IconGoogle className='text-rose-500' />}
        >
            Sign in with Google
        </StyledButton>
    )
}
