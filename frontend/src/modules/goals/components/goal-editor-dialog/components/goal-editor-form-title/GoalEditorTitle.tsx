import { IconEye } from '@/assets/icons/IconEye'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { IconNew } from '@/assets/icons/IconNew'
import { IconEdit } from '@/assets/icons/IconEdit'

export const GoalEditorTitle = () => {
    const { newMode, editMode } = useGoalEditor$()
    let stateText: React.ReactNode = (
        <>
            <IconEye className='flex items-center justify-center' width={24} height={24} />
            View Goal
        </>
    )
    if (newMode)
        stateText = (
            <>
                <IconNew width={28} height={28} />
                New Goal
            </>
        )
    if (editMode)
        stateText = (
            <>
                <IconEdit width={24} height={24} />
                Edit Goal
            </>
        )

    return (
        <span className='flex items-center justify-start gap-5 focus-visible:outline-none min-w-[200px]' tabIndex={0}>
            {stateText}
        </span>
    )
}
