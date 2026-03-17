function formatMoney(number: string | number | null | undefined) {
    if (number === null || number === undefined || `${number}`.trim() === '') {
        return ''
    }

    const numberFloat = Number.parseFloat(`${number}`)

    if (Number.isNaN(numberFloat)) {
        return ''
    }

    return numberFloat.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export { formatMoney }

