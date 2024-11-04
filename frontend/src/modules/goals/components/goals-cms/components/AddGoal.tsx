import { XButton } from '@/components-x/x-button/XButton'
import { useGoalEditor$ } from '../../goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../../goal-editor-dialog/stores/goal-editor-store/types'
import { IconNew } from '@/assets/icons/IconNew'

export const AddGoal = () => {
    const { setStore: setState } = useGoalEditor$()

    const addGoal = () => {
        setState({ goalEditorMode: goalEditorMode.new, goalId: null, open: true })
    }

    return (
        <div className='opacity-70'>
            <XButton startIcon={<IconNew width={24} height={24} />} onClick={addGoal} className='' variant='text'>
                Add goal
            </XButton>
        </div>
    )
}
