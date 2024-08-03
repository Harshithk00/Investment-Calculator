import { formatter } from "../util/investment"

export default function Card2({final}){
    console.log
    return(
        <div id="tablecontent">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                    {final.map((item) =>(
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.investmentValue)}</td>
                            <td>{formatter.format(item.interestEarnedInYear)}</td>
                            <td>{formatter.format(item.totalInterest)}</td>
                            <td>{formatter.format(item.investedcapital)}</td>
                        </tr>
                    ))} 
                    
                </tbody>
            </table>
        </div>
    )
}