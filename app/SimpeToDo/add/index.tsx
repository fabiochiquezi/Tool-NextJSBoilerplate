import { FC } from 'react'
import FormFields from '../FormFields'
import { simpleToDoAddT } from './types'
import { useForm } from 'react-hook-form'
import { validation } from '../validation'

const SimpleTodoAdd: FC<simpleToDoAddT> = ({ SubmitButton }) => {
    const formFns = useForm(validation)

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="mt-12">
            <form
                onSubmit={formFns.handleSubmit(onSubmit)}
                className="flex flex-col items-center"
            >
                <FormFields
                    errors={formFns.formState.errors}
                    register={formFns.register}
                />
                <SubmitButton />
            </form>
        </div>
    )
}

export { SimpleTodoAdd }
