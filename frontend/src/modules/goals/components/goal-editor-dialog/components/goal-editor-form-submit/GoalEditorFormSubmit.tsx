import { XButton } from '@/components-x/x-button/XButton'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { useGoalEditorFormSubmit } from './useGoalEditorFormSubmit'
import { IconInfiniteLoading } from '@/assets/icons/IconInfiniteLoading'

export const GoalEditorFormSubmit: React.FC = () => {
    const { disabled, OkText, tooltipText, isSubmitting } = useGoalEditorFormSubmit()

    return (
        <div className='relative'>
            <XButton
                data-testid='submit-goal-editor-form'
                variant='outlined'
                type='submit'
                disabled={disabled || isSubmitting}
                size='small'
                className='z-10'
            >
                {!isSubmitting ? OkText : <IconInfiniteLoading className='w-6 h-6' />}
            </XButton>
            {disabled && tooltipText && (
                <div
                    id='disabledTooltip'
                    className='pointer-events-auto absolute left-0 top-0
                    z-20 h-full w-full rounded-lg bg-transparent'
                />
            )}
            {disabled && tooltipText && <XTooltip anchorSelect='#disabledTooltip'>{tooltipText}</XTooltip>}
        </div>
    )
}
