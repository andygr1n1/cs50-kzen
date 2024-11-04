import { XModal } from '@/components-x/x-modal/XModal'
import { useFormikContext } from 'formik'
import { type IUpdateAvatarFormSchema } from '../../services'
import { XButton } from '@/components-x/x-button/XButton'
import { ImageCropper } from '@/components/image-cropper/ImageCropper'

export const ProfileImageCropDialog = () => {
    const formikContext = useFormikContext<IUpdateAvatarFormSchema>()
    const { imgSrc } = formikContext.values

    return (
        <XModal title={'Avatar'} open={!!imgSrc} onCancel={formikContext.resetForm}>
            {imgSrc && (
                <div className='text-cText m-auto flex  flex-col bg-transparent'>
                    <ImageCropper imgPath={imgSrc} />
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
