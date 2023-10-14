module.exports.sum = (num1, num2) => {
    const int1 = parseInt(num1, 10)
    const int2 = parseInt(num2, 10)

    if (Number.isNaN(int1) || Number.isNaN(int2)) {
        throw new Error('Erro no input')
    }
    return +num1 + +num2
}