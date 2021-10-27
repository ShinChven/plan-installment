const planInstallment = (amountPerInstallment: number, installments: number, annualizedRateOfReturn: number) => {

    /**
     * 收集每期金额用于投资的回报
     */
    const earningsOfEachInstallment = new Array<number>();

    // 累加每期可通过理财获得的回报
    for (let i = 0; i < installments; i++) {
        /**
         * 每期可通过理财获得的回报
         */
        const earningOfInstallment =
            Number((
                // 每期金额 * 年化利率 / 12 * 每期金额可参与理财的月份
                amountPerInstallment * annualizedRateOfReturn / 12 * i
            ).toFixed(2)) // 小数点2位

        earningsOfEachInstallment.push(earningOfInstallment);
    }

    /**
     * 总支付
     */
    const totalPayment = amountPerInstallment * installments;

    /**
     * 通过理财可获得的总回报
     */
    let totalEarningFromInstallment = earningsOfEachInstallment.reduce((a, b) => a + b, 0);

    /**
     * 预计理财获得回报后的支出
     */
    const estimatedActualSpending = totalPayment - totalEarningFromInstallment

    return {
        amountPerInstallment,
        installments,
        totalPayment,
        annualizedRateOfReturn,
        totalEarningFromInstallment,
        estimatedActualSpending,
        earningsOfEachInstallment
    }
}

export default planInstallment;
