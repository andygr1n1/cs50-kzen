import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { XButton } from '@/components-x/x-button/XButton'
import { useGoalEditor$ } from '../components/goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../components/goal-editor-dialog/stores/goal-editor-store/types'
import { IconNew } from '@/assets/icons/IconNew'

export const CreateChildGoal: React.FC<{ label?: React.ReactNode; parentGoalId: string | null }> = ({
    label,
    parentGoalId,
}) => {
    const { setStore: setState, store: state } = useGoalEditor$()

    const metadataParentGoalId = state.metadata?.parentGoalId
    const metadataParentGoalEditorMode = state.metadata?.parentGoalEditorMode

    return (
        <>
            <XButton
                id='createChildGoal'
                size={'custom'}
                variant={metadataParentGoalId ? 'contained' : 'text'}
                onClick={() => {
                    metadataParentGoalId
                        ? setState({
                              goalEditorMode: metadataParentGoalEditorMode || goalEditorMode.view,
                              open: true,
                              goalId: metadataParentGoalId,
                          })
                        : setState({
                              goalEditorMode: goalEditorMode.new,
                              open: true,
                              goalId: null,
                              metadata: { parentGoalId, parentGoalEditorMode: state.goalEditorMode },
                          })
                }}
                startIcon={<IconNew className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </XButton>
            {!label && <XTooltip anchorSelect='#createChildGoal'>{'Create child goal'}</XTooltip>}
        </>
    )
}
