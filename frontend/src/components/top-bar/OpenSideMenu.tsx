import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { observer } from 'mobx-react-lite'
import { XButton } from '../../components-x/x-button/XButton'
import { IconMenu } from '@/assets/icons/IconMenu'

export const OpenSideMenu: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return !isDesktop ? (
        <XButton
            className='text-cText opacity-70 hover:opacity-100'
            variant='text'
            onClick={useSideMenu.onChange}
            startIcon={<IconMenu width={28} height={28} />}
        />
    ) : null
})
