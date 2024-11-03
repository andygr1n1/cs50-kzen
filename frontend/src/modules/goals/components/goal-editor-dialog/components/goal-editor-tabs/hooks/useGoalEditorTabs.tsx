import { type IGoalSchema } from '@/modules/goals/shared-service'
import { type TabsProps } from 'antd'
import { GoalInfo } from '../components/goal-info/GoalInfo'
import { GoalRitual } from '../components/goal-ritual/GoalRitual'
import { useGoalEditor$ } from '../../../stores/goal-editor-store/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { calculateIsRitualWithPower } from '@/modules/goals/helpers/optimizeActiveGoalsData'

export const useGoalEditorTabs = () => {
    const { viewMode, editMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()
    const isRitual = calculateIsRitualWithPower(formikContext.values) && viewMode

    const goalEditorTabs: TabsProps['items'] = [{ key: '1', label: 'Info', children: <GoalInfo /> }]

    if (editMode || isRitual) {
        goalEditorTabs.push({ key: '4', label: 'Ritual', children: <GoalRitual />, active: isRitual })
    }

    return { goalEditorTabs }
}
