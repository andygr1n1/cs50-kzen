import { observer } from 'mobx-react-lite'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { type ReactNode } from 'react'
import { XButton } from '@/components-x/x-button/XButton'
import { useGoalEditor$ } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/types'
import { IconNew } from '@/assets/icons/IconNew'

export const GoalsCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottom'
            overlayClassName='!z-[55]'
        >
            <div>{button}</div>
        </XDropdown>
    )
})

const DropdownRender = () => {
    const { setStore } = useGoalEditor$()
    const addGoal = () => {
        setStore({ goalEditorMode: goalEditorMode.new, goalId: null, open: true })
    }

    return (
        <XMenuDropdown>
            <XMenuItem onClick={addGoal}>
                <XButton variant='text' size='small' startIcon={<IconNew width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Add goal</span>
                </XButton>
            </XMenuItem>
        </XMenuDropdown>
    )
}
