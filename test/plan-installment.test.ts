import planInstallment from '../src/plan-installment';

const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const money = (amount: number) => formatter.format(amount);

const result = planInstallment(1354, 24, 0.04)

console.log(result);
console.log()

console.log('如果一件可以全款购买的商品可以分期免息，如果我用分期的钱去理财，在不考虑收益率浮动的情况下，购买这件商品**大概**可以节省多少？')

const amountPerInstallment = money(result.amountPerInstallment);
console.log('每期金额', amountPerInstallment)
console.log('总期数', result.installments + '期')
console.log('总支付', money(result.totalPayment))
const annualizedRatedOfReturn = result.annualizedRateOfReturn * 100 + "%";
console.log('理财年化收益率', annualizedRatedOfReturn)
console.log('分期款在理财中可得总额', money(result.totalEarningFromInstallment))
console.log('预计实际花费', money(result.estimatedActualSpending))
console.log()
console.log('>> 每期金额 * 年化收益率 / 12 个月 * 可用于投次的月数')
console.log()
for (let i = 0; i < result.earningsOfEachInstallment.length; i++) {
    console.log(`第${i + 1}期 ${amountPerInstallment} 年化${annualizedRatedOfReturn} 投资${i}个月 赚`, money(result.earningsOfEachInstallment[i]));
}


