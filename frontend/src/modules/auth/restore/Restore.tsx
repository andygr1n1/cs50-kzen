import { AlreadyHaveAccount } from '../shared-components/AlreadyHaveAccount'
import { Formik, Form } from 'formik'
import { type IUserRestoreSchema } from './services/types'
import { AuthEmailInput } from '../shared-components/AuthEmailInput'
import { XButton } from '@/components-x/x-button/XButton'
import { useRestoreOnSubmit } from './hooks/useRestoreOnSubmit'
import { useRestoreOnValidate } from './hooks/useRestoreOnValidate'
import { useRestoreInitialValues } from './hooks/useRestoreInitialValues'
import { IconInfiniteLoading } from '@/assets/icons/IconInfiniteLoading'

const Register: React.FC = () => {
    const { onSubmit } = useRestoreOnSubmit()
    const { validate } = useRestoreOnValidate()
    const { initialValues } = useRestoreInitialValues()

    return (
        <div className='flex flex-col gap-10 mt-10 items-center'>
            <Formik<IUserRestoreSchema> initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-5'>
                        <AuthEmailInput />
                        <XButton
                            className='w-full'
                            type='submit'
                            disabled={isSubmitting}
                            startIcon={isSubmitting && <IconInfiniteLoading className='text-slate-500 w-5 h-5' />}
                        >
                            Restore
                        </XButton>
                        <AlreadyHaveAccount />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register
