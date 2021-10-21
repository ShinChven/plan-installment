import planInstallment from '../src/plan-installment';

const result = planInstallment(1354, 24, 0.10)
console.log('每期金额', result.amountPerInstallment);
console.log('期数', result.installments);
console.log('总支付', result.total)
console.log('理财年化利率', result.annualizedRateOfReturn)
console.log('理财预计回报', result.estimatedReturnAmount)
console.log('理财后预计支出', result.estimatedTotalAfterReturned)
