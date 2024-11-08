import { IconBellUrgent } from '@/assets/icons/IconBellUrgent'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconRitual } from '@/assets/icons/IconRitual'
import { isCompletedGoalStatus } from '@/modules/goals/helpers/goalsGuards'
import {
    calculateIsExpired,
    calculateGoalDeadline,
    calculateTotalRemainingDays,
    calculateIsRitual,
} from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { type IGoalSchema } from '@/modules/goals/shared-service'

export const TopGoalRemainingDays: React.FC<{ goal: IGoalSchema }> = ({ goal }) => {
    const isExpired = calculateIsExpired(goal)
    const isDeadline = calculateGoalDeadline(goal)
    const isCompleted = isCompletedGoalStatus(goal.status)
    const totalRemainingDays = calculateTotalRemainingDays(goal)

    return (
        <span data-testid='topGoal__remainingDays' className='flex w-12 items-center justify-center px-1'>
            {isExpired || isCompleted ? (
                <div className='opacity-40'>
                    {calculateIsRitual(goal) ? (
                        <IconRitual width={24} height={24} />
                    ) : (
                        <IconFocus width={24} height={24} />
                    )}
                </div>
            ) : isDeadline ? (
                <IconBellUrgent width={30} height={30} className='text-white' />
            ) : (
                <span className='text-xl text-white opacity-70'>
                    {totalRemainingDays < 9999 ? totalRemainingDays : '9999+'}
                </span>
            )}
        </span>
    )
}
