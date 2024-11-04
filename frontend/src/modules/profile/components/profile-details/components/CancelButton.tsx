import { XButton } from '@/components-x/x-button/XButton'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'

export const CancelButton = () => {
    const { onCancel } = useProfile$()
    return (
        <XButton onClick={onCancel} size='small' error variant={'outlined'}>
            Cancel
        </XButton>
    )
}
