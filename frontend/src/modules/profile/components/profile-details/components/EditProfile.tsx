import { IconEditProfile } from '@/assets/icons/IconEditProfile'
import { XButton } from '@/components-x/x-button/XButton'
import { cn } from '@/helpers/cn'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'

export const EditProfile = () => {
    const { openEditProfile, viewMode } = useProfile$()

    return (
        <div className={cn('opacity-70', !viewMode && 'opacity-100')}>
            <XButton
                size='small'
                startIcon={<IconEditProfile width={24} height={24} />}
                onClick={openEditProfile}
                variant={viewMode ? 'text' : 'contained'}
            ></XButton>
        </div>
    )
}
