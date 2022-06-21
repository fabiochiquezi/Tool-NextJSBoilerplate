export const resFirebaseFn = (
    ok: boolean,
    status: number,
    message: string,
    data: any
) => {
    return {
        ok,
        status,
        message,
        data
    }
}
