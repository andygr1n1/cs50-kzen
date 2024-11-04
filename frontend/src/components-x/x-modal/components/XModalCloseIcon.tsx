import { IconClose } from '@/assets/icons/IconClose'
import { XButton } from '@/components-x/x-button/XButton'

export const XModalCloseIcon: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
    return (
        <XButton
            onClick={onCancel}
            size='small'
            variant='text'
            className='group absolute right-2 top-[-35px] hover:scale-125 duration-300'
        >
            <IconClose
                className={`h-6 w-6 cursor-pointer text-white/70 duration-300 hover:h-8 hover:w-8 group-hover:text-blue-500`}
            />
        </XButton>
    )
}
