import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import { investmentcal} from "./util/investment.js";

function App() {
    const [initalInvest , setInitialInvest] = useState(0);
    const [annualInvest , setAnnualInvest] = useState(0);
    const [expectedReturn , setExpectedReturn] = useState(0);
    const [duration , setDuration] = useState(0);
    // const [isTrueFinal, setIsTrueFinal] = useState(false);
    // const [final ,setFinal] = useState([]);
    let final = [];
    // let initalInvest=0;
    // let annualInvest=0;
    // let expectedReturn=0;
    // let duration=0;


    function funInitialInvest(value){
      //  initalInvest = value;
      // console.log(value)
      setInitialInvest(value)
      // checkfinal()
    }
    function funAnnualInvest(value){
      // annualInvest = value;
      setAnnualInvest(value)
      // checkfinal()
    }
    function funexpectedReturn(value){
      // expectedReturn = value;
      setExpectedReturn(value)
      // checkfinal()
    }
    function funduration(value){
      // duration = value;
      setDuration(value)
      // checkfinal()
    }
    
    // function checkfinal(){
      if(initalInvest>0 && annualInvest>0 && expectedReturn>0 && duration>0){
        // console.log(initalInvest)
        // console.log(initalInvest)
      final = investmentcal(initalInvest,annualInvest,expectedReturn,duration);
      
      // console.log(final1[0].interestEarnedInYear)
      
      // setFinal(final1)
      // console.log(final[0])
    }
  // }
    


  return (
    <>
      <hr/>
     <div>
          <Card1 
          funInitialInvest={funInitialInvest} 
          funAnnualInvest={funAnnualInvest} 
          funexpectedReturn={funexpectedReturn} 
          funduration={funduration}
          />

          <hr/>

          {final && <Card2 final={final}/>}
          
     </div>
    </>
  )
}

export default App
