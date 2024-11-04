import { XButton } from '@/components-x/x-button/XButton'
import { useGoalEditor$ } from '../../../goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../../../goal-editor-dialog/stores/goal-editor-store/types'
import { IconNew } from '@/assets/icons/IconNew'

export const Widget_AddGoal: React.FC = () => {
    const { setStore: setState } = useGoalEditor$()
    const addGoal = () => {
        setState({ goalEditorMode: goalEditorMode.new, goalId: null, open: true })
    }
    return (
        <div className='absolute-center flex  w-full flex-col items-center justify-center gap-2 self-center text-gray-500'>
            <XButton
                variant='text'
                className='!h-[64px]  opacity-70'
                onClick={addGoal}
                startIcon={<IconNew width={64} height={64} className=' group-hover:text-amber-500' />}
            />
            <span className='text-cText cursor-default opacity-70'>Create goal</span>
        </div>
    )
}
