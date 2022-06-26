import { simpleToDoDomainT } from 'app'

export type HomeT = {
    data: {
        ok: boolean
        message: string
        data: simpleToDoDomainT[]
    }
}
