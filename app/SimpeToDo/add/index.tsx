import schema from '../schema'
import FormFields from '../FormFields'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SubmitButton from '../../../components/Buttons/Submit'

const SimpleTodoAdd = () => {
    const formFns = useForm({ resolver: yupResolver(schema) })
    const [loading, setLoading] = useState(false)

    const onSubmit = (data: any) => {
        setLoading(true)

        try {
            setTimeout(() => {
                console.log(data)
                setLoading(false)
            }, 2000)
        } catch (e: any) {
            setLoading(false)
        }
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
                <SubmitButton btnText="Sign In" loading={loading} />
            </form>
        </div>
    )
}

export { SimpleTodoAdd }
