import { genCpf, genName } from './index'

describe('teta gen (utils) se:', () => {
    it('existe', () => {
        expect(typeof genCpf).toBe('function')
        expect(typeof genName).toBe('function')
    })

    it('genCpf', () => {
        const cpf = genCpf()
        expect(cpf.length).toBe(11)
    })

    it('genName', () => {
        const name = genName()
        expect(name.length > 0).toBeTruthy()
    })
})
