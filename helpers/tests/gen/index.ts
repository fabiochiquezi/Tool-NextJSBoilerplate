export function genCpf(): string {
    let cpf = ''
    for (let i = 0; i < 11; i++) {
        const random = Math.floor(Math.random() * 8) + 1
        cpf += random
    }
    return cpf
}

export function genName(): string {
    let result = ''
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}
