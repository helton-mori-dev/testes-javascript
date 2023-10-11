const {
    sum
} = require('./calculator')

it('Deve somar 2+2 com resultado 4', () => {
    expect(sum(2, 2)).toBe(4)
})

it('Deve somar 2+2 com resultado 4, mesmo que um dos números seja string', () => {
    expect(sum('2', '2')).toBe(4)
})

it('Deve indicar erro se o parâmetro não puder ser convertido em inteiro', () => {
    expect(() => {
        sum('', '2')
    }).toThrowError()

    expect(() => {
        sum([2, 2])
    }).toThrowError()

    expect(() => {
        sum({})
    }).toThrowError()

    expect(() => {
        sum()
    }).toThrowError()
})