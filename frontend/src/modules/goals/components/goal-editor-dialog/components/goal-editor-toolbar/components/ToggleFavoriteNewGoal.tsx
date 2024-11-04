import { XButton } from '@/components-x/x-button/XButton'
import { IconHeart } from '@/assets/icons/IconHeart'
import { useFormikContext } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'

export const ToggleFavoriteNewGoal = () => {
    const formikContext = useFormikContext<IGoalSchema>()
    const isFavorite = formikContext.values.is_favorite
    return (
        <>
            <XButton
                id='toggleFavoriteGoal'
                error={!!isFavorite}
                variant={isFavorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => {
                    formikContext.setFieldValue('is_favorite', !isFavorite)
                }}
                startIcon={<IconHeart className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            />
        </>
    )
}
