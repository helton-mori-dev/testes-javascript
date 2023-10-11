const {
    sum
} = require('./calculator')

it('Deve somar 2+2 com resultado 4', () => {
    expect(sum(2, 2)).toBe(4)
})

it('Deve somar 2+2 com resultado 4, mesmo que um dos números seja string', () => {
    expect(sum('2', '2')).toBe(4)
})