import { FC } from 'react'

export type signUpT = {
    onSubmit: (dataForm: any) => Promise<void>
    SubmitButton: FC
}
