export type responseT = (
    message: string,
    status: number
) => {
    ok: boolean
    status?: number
    message: string
    data: Record<string, any> | null
}

export const resErrorStd: responseT = (message: string, status: number) => {
    return {
        ok: false,
        status,
        message,
        data: null
    }
}
