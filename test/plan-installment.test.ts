import planInstallment from '../src/plan-installment';

const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
});

const money = (amount: number) => formatter.format(amount);

const result = planInstallment(1354.125, 24, 0.10, 0)

console.log(result);
console.log()

console.log('一件可以全款购买的商品可以分期免息，如果我用分期的钱去理财，在不考虑收益率浮动的情况下，购买这件商品**大概**可以节省多少？')
console.log()

const amountPerInstallment = money(result.amountPerInstallment);

console.log('首付', money(result.startAmount))
console.log('每期金额', amountPerInstallment)
console.log('总期数', result.installments + '期')
console.log('总支付', money(result.totalPayment))
const annualizedRatedOfReturn = result.annualizedRateOfReturn * 100 + "%";
console.log('理财年化收益率', annualizedRatedOfReturn)
console.log('分期款在理财中可得总额', money(result.totalEarningFromInstallment))
console.log('预计实际花费', money(result.estimatedActualSpending))
console.log()
console.log('>> 每期金额 * 年化收益率 / 12 个月 * 可用于投资的月数')
console.log()
for (let i = 0; i < result.earningsOfEachInstallment.length; i++) {
    console.log(`第${i + 1}期 ${amountPerInstallment} 年化${annualizedRatedOfReturn} 投资${i + 1}个月 赚`, money(result.earningsOfEachInstallment[i]));
}


