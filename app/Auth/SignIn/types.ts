import { FC } from 'react'

export type signInT = {
    onSubmit: (dataForm: any) => Promise<void>
    SubmitButton: FC
}
