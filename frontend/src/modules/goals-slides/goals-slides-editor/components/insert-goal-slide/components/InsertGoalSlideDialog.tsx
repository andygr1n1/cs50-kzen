import { XModal } from '@/components-x/x-modal/XModal'
import { type IGoalSlide } from '@/modules/goals-slides/service/types'
import { useFormikContext } from 'formik'
import { ImageCropper } from '@/components/image-cropper/ImageCropper'
import { GoalSlideTitleFormItem } from './GoalSlideTittleFormItem'
import { XButton } from '@/components-x/x-button/XButton'

export const InsertGoalSlideDialog = () => {
    const formikContext = useFormikContext<IGoalSlide>()
    const { img_path } = formikContext.values

    return (
        <XModal title={'New Slide'} open={!!img_path} onCancel={formikContext.resetForm}>
            {img_path && (
                <div className='text-cText m-auto flex  flex-col bg-transparent'>
                    <ImageCropper imgPath={img_path} />
                    <GoalSlideTitleFormItem />
                    <XButton
                        disabled={formikContext.isSubmitting}
                        className='w-full'
                        onClick={() => formikContext.handleSubmit()}
                    >
                        Save
                    </XButton>
                </div>
            )}
        </XModal>
    )
}
