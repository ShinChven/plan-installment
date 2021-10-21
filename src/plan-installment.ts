const planInstallment = (amountPerInstallment: number, installments: number, annualizedRateOfReturn: number) => {
    let estimatedReturnAmount = 0;

    for (let i = 0; i < installments; i++) {
        const returnPerInstallment = (amountPerInstallment * annualizedRateOfReturn / 12 * i).toFixed(2)
        estimatedReturnAmount += Number(returnPerInstallment);
    }

    const total = amountPerInstallment * installments;
    const estimatedTotalAfterReturned = total - estimatedReturnAmount

    return {
        estimatedReturnAmount,
        estimatedTotalAfterReturned,
        total,
        amountPerInstallment,
        installments,
        annualizedRateOfReturn,
    }
}

export default planInstallment;
