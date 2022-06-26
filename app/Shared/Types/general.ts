import { FieldValues, UseFormRegister } from 'react-hook-form'

export type formFieldsT = {
    register: UseFormRegister<FieldValues>
    errors: { [x: string]: any }
}
