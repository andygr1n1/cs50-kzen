import { Suspense, lazy } from 'react'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { TopActiveGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-active-goals-widget/TopActiveGoalsWidget'
import { TopExpiredGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-expired-goals-widget/TopExpiredGoalsWidget'
import { TopFavoriteGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-favorite-goals-widget/TopFavoriteGoalsWidget'
import { TopRitualGoalsWidget } from '@/modules/goals/components/goals-dashboard/top-ritual-goals-widget/TopRitualGoalsWidget'
import { ArtifactsCounter } from './artifacts-counter/ArtifactsCounter'
import { NotepadIndex } from '@/modules/notepad/NotepadIndex'
import { GoalsSlidesCarouselWidget } from '@/modules/goals-slides/GoalsSlidesCarouselWidget'
import { UserCoins } from '@/components/top-bar/UserCoins'

const GoalEditorDialog = lazy(() => import('@/modules/goals/components/goal-editor-dialog/GoalEditorDialog'))

export const Dashboard: React.FC = () => {
    return (
        <ModuleWrapper
            topBarNodes={
                <div className='w-full justify-center items-center flex'>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 '>
                        <UserCoins />
                    </div>
                    <ArtifactsCounter />
                </div>
            }
        >
            <NotepadIndex />
            <GoalsSlidesCarouselWidget />
            <TopActiveGoalsWidget />
            <TopExpiredGoalsWidget />
            <TopRitualGoalsWidget />
            <TopFavoriteGoalsWidget />
            {/* stabilized */}
            <div className='flex max-h-[1px] flex-[100%] 2lg:flex-[45%]' />
            {/* dialog */}
            <Suspense fallback={null}>
                <GoalEditorDialog />
            </Suspense>
        </ModuleWrapper>
    )
}