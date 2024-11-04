import { XButton } from '@/components-x/x-button/XButton'
import { type IGoalSlide } from '@/modules/goals-slides/service/types'
import { useFormikContext } from 'formik'

export const GoalSlideFormFooter: React.FC = () => {
    const formikContext = useFormikContext<IGoalSlide>()
    return (
        <XButton disabled={formikContext.isSubmitting} className='w-full' onClick={() => formikContext.handleSubmit()}>
            Save
        </XButton>
    )
}
