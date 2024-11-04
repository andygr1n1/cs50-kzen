import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { XButton } from '@/components-x/x-button/XButton'
import { IconEdit } from '@/assets/icons/IconEdit'
import { type ReactNode } from 'react'
import { useGoalEditor$ } from '../components/goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../components/goal-editor-dialog/stores/goal-editor-store/types'

export const ToggleEditGoal: React.FC<{ label?: ReactNode; goalId: string }> = ({ label, goalId }) => {
    const { setStore: setState, editMode, store: state } = useGoalEditor$()

    return (
        <>
            <XButton
                id='editGoal'
                variant={editMode ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    setState({
                        goalEditorMode: editMode ? goalEditorMode.view : goalEditorMode.edit,
                        open: true,
                        goalId,
                        metadata: {
                            viewModeRedirect:
                                state.goalEditorMode === goalEditorMode.view ? state.goalEditorMode : undefined,
                        },
                    })
                }}
            >
                {label}
            </XButton>
            {!label && <XTooltip anchorSelect='#editGoal'>{editMode ? 'Cancel' : 'Edit'}</XTooltip>}
        </>
    )
}
