const CurrencyTransformer = (locale: string, currency: string, compact: boolean) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2,
        notation: compact ? 'compact' : undefined
    });
};

export const ContractCurrencyTransformer = (locale: string, currency: string) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2,
    });
};

export default CurrencyTransformer;

