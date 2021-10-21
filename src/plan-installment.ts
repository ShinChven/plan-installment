const planInstallment = (amountPerInstallment: number, installments: number, annualizedRateOfReturn: number) => {
    /**
     * 通过理财可获得的总回报
     */
    let estimatedReturnAmount = 0;

    // 累加每期可通过理财获得的回报
    for (let i = 0; i < installments; i++) {
        /**
         * 每期可通过理财获得的回报
         */
        const returnPerInstallment =
            Number((
                // 每期金额 * 年化利率 / 12 * 每期金额可参与理财的月份
                amountPerInstallment * annualizedRateOfReturn / 12 * i
            ).toFixed(2)) // 小数点2位
        estimatedReturnAmount += returnPerInstallment;
    }

    /**
     * 总支付
     */
    const total = amountPerInstallment * installments;

    /**
     * 预计理财获得回报后的支出
     */
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
