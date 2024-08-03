export function investmentcal(
initialInvestment,
annualInvestment,
expectedReturn,
duration
)
{
    
    const allInvest = [];
    let investmentValue = parseFloat(initialInvestment); 
    let investedcapital = parseFloat(initialInvestment);
    let totalInterest = 0;  
    let interestEarnedInYear = 0;

    for(let i=0;i<duration;i++){
        interestEarnedInYear = (investmentValue*(expectedReturn/100));
        investmentValue += parseFloat(interestEarnedInYear) + parseFloat(annualInvestment);
        investedcapital += parseFloat(annualInvestment);
        totalInterest += interestEarnedInYear;
        
    
        allInvest.push({
            year:i+1,
            investmentValue: investmentValue,
            interestEarnedInYear:interestEarnedInYear,
            totalInterest: totalInterest,
            investedcapital:investedcapital
        
        })
    }
    return allInvest
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });