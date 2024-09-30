import { useEffect, useState } from 'react'
import { tenure } from './utils/constants'

function App() {
  const [costOfAsset,setCostOfAsset] = useState(0)
  const [interest,setInterest] = useState(0)
  const [fee,setFee] = useState(0)
  const [downPayment,setDownPayment] = useState(0)
  const [emi,setEmi] = useState(0)
  const [tenuree,setTenure] = useState(12)

  const UpdateEmi=(e)=>{

    if(!costOfAsset)return;
    const dp = Number(e.target.value)
    setDownPayment(dp.toFixed(0))
    const FinalEMi = calculateEmi(dp)
    setEmi(FinalEMi);
  }
  const UpdateDownPayment=(e)=>{
    if(!costOfAsset)return;
    const emi=Number(e.target.value)
    setEmi(emi.toFixed(0))
    const dp = calculateDP(emi)
    setDownPayment(dp)

  }
  const calculateEmi=(dp)=>{
    const loanAmount = costOfAsset-dp;
    const RateOfinterest = interest/100;
    const numOfYears = tenuree/12;
    const FinalEMi = (loanAmount*RateOfinterest*(1+RateOfinterest)**numOfYears)/((1+RateOfinterest)**numOfYears-1)
    return Number(FinalEMi/12).toFixed(0)
  }

  const calculateDP = (emi)=>{
    const DownPayment = 100-(emi/calculateEmi(0))*100
    return Number((DownPayment/100)*costOfAsset).toFixed(0)
  }

  useEffect(()=>{
    if(!(costOfAsset>0)){
      setDownPayment(0)
      setEmi(0)
    }
    const emi = calculateEmi(downPayment)
    setEmi(emi)
  },[tenuree])

  return <div>
    <div className='p-2 text-xl'>
      EMI Calculator
    </div>
    <div className='p-1'>
      <div className='p-2'>
        Total Cost Of Asset
      </div>
      <div className='p-1 '>
        <input className='w-full p-2 border border-black rounded-[18px]' type="number" placeholder='Total Cost Of Asset' onChange={(e)=>{setCostOfAsset(e.target.value)}}/>
      </div>
    </div>
    <div className='p-1'>
      <div className='p-2'>
        Interest Rate (in %)
      </div>
      <div className='p-1 '>
        <input className='w-full p-2 border border-black rounded-[18px] ' type="number" placeholder='Interest Rate on Loan' onChange={(e)=>{setInterest(e.target.value)}}/>
      </div>
    </div>
    <div className='p-1'>
      <div className='p-2'>
        Processing Fee (in %)
      </div>
      <div className='p-1'>
        <input className='p-2 w-full border border-black rounded-[18px]' type="number" placeholder='Processing Fee' onChange={(e)=>{setFee(e.target.value)}}/>
      </div>
    </div>
    <div className='p-2 mt-2 text-xl'>
      Down Payment
    </div>
    <div className='p-2 font-semibold'>
      Total DownPayment - {Number(downPayment)+(costOfAsset-downPayment)*(fee/100)}

      <div className='p-2'>
        <input type="range" min={0} max={costOfAsset} value={downPayment} onChange={UpdateEmi} className='w-full mt-2'/>
        <div className='flex justify-between'>
          <div>0%</div>
          <div>{downPayment}</div>
          <div>100%</div>
        </div>
      </div>
      <div className='p-2'>
        <input type="range" min={calculateEmi(costOfAsset)} max={calculateEmi(0)} value={emi} onChange={UpdateDownPayment} className='w-full  mt-2'/>
        <div className='flex justify-between'>
          <div>{calculateEmi(costOfAsset)}</div>
          <div>{emi}</div>
          <div>{calculateEmi(0)}</div>
        </div>
      </div>
      <div className='p-2 mt-2 text-xl'>
        Tenure
      </div>
      <div className='p-2 flex justify-between'>
        
        {tenure.map((item)=>{
          return <button onClick={()=>{setTenure(item)}} className={`${item===tenuree?'px-16 py-2 rounded-[20px] bg-blue-600 text-white': "px-16 py-2 rounded-[20px] bg-gray-300 text-black"}`}>
            {item}
          </button>
        })}
      </div>
      
    </div>
    
  </div>

  
}

export default App
