import { type ReactNode } from 'react'
import { XButton } from '../../components-x/x-button/XButton'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'

export const FormFooter: React.FC<{
    disabled?: boolean
    disabledTooltip?: string
    okTitle?: ReactNode
    cancelTitle?: ReactNode
    onOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    onCancel: () => void
    hideOkButton?: boolean
}> = ({
    onCancel,
    onOk,
    okTitle = 'Ok',
    cancelTitle = '',
    disabled = false,
    disabledTooltip,
    hideOkButton = false,
}) => {
    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <XButton error rounded onClick={onCancel} variant='outlined' size='extraLarge' className='!w-28'>
                <div className='flex items-center justify-center gap-2'>
                    {cancelTitle ? (
                        cancelTitle
                    ) : (
                        <>
                            <div>Return</div>
                        </>
                    )}
                </div>
            </XButton>
            {hideOkButton ? null : (
                <div className='relative'>
                    <XButton
                        rounded
                        disabled={disabled}
                        size='extraLarge'
                        className='z-10 !min-w-[112px]'
                        onClick={onOk}
                    >
                        {okTitle}
                    </XButton>
                    {disabled && disabledTooltip && (
                        <div
                            id='disabledTooltip'
                            className='pointer-events-auto absolute left-0 top-0 z-20 h-full w-full rounded-lg bg-transparent
                        '
                        />
                    )}
                    {disabled && disabledTooltip && (
                        <XTooltip anchorSelect='#disabledTooltip'>{disabledTooltip}</XTooltip>
                    )}
                </div>
            )}
        </div>
    )
}
