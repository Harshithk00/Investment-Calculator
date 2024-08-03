

export default function Card1({funInitialInvest,funAnnualInvest,funexpectedReturn,funduration}){
    function handleClick1(event){
        
    }

    return(

        
        <div id="Card1">
            <div id="inCard" className="c1">
                <div className="allin">
                    <p className="pc1">INITIAL INVESTMENT</p>
                    <input className="c1input c1num" required type="number" min={1} placeholder={0} onChange={(e)=>{funInitialInvest(e.target.value)}}></input>
                </div>
                <div className="allin">
                    <p className="pc1">ANNUAL INVESTMENT</p>
                    <input className="c1input c1num" required type="number" min={1} placeholder={0} onChange={(e)=>funAnnualInvest(e.target.value)}></input>
                </div>
            </div>
            <div id="inCard" className="c1">
                <div className="allin">
                    <p className="pc1">EXCEPTED RETURN</p>
                    <input className="c1input c1num" required type="number" min={1} placeholder={0} onChange={(e)=>funexpectedReturn(e.target.value)}></input>
                </div>
                <div className="allin">
                    <p className="pc1">DURATION</p>
                    <input className="c1input" required type="number" min={1} placeholder={0} onChange={(e)=>funduration(e.target.value)}></input>
                </div>
            </div>
        </div>
        
    )
}