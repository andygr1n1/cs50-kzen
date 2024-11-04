import { IconEditPassword } from '@/assets/icons/IconEditPassword'
import { XButton } from '@/components-x/x-button/XButton'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'
import { Suspense, lazy } from 'react'
const ProfileNewPasswordDialog = lazy(() => import('../../profile-new-password/ProfileNewPasswordDialog'))

export const EditPassword = () => {
    const { openEditPassword } = useProfile$()

    return (
        <div className='opacity-70 absolute left-10 top-1'>
            <XButton
                size='small'
                startIcon={<IconEditPassword width={24} height={24} />}
                onClick={openEditPassword}
                variant='text'
            />
            <Suspense fallback={null}>
                <ProfileNewPasswordDialog />
            </Suspense>
        </div>
    )
}
