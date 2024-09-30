import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Password } from './components/password'
import { Button } from './components/Button'
import { InputBox } from './components/InputBox'
import { Checkboxes } from './components/Checkboxes'
import { usePass } from './hooks/use-password-generator'
import { useRecoilValue } from 'recoil'
import { checkboxesAtom, lengthAtom } from './atoms/atom'

function App() {
  const {password,generatedPassword,errorMessage} = usePass()
  const checkbox = useRecoilValue(checkboxesAtom)
  const length = useRecoilValue(lengthAtom)
  const [copied,setCopied] = useState("")

  const handleCopy = ()=>{
    if(password){
      navigator.clipboard.writeText(password).then(()=>{
        setCopied("Copied !!")
        setTimeout(() => setCopied(''), 2000); // Clear message after 2 seconds
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
          setCopied('Failed to copy');
        });
    } else {
      setCopied('Nothing to copy!');
    }
  };
    
  
  

  return (
    <div className='h-screen w-full'>
    <div className='p-2 bg-[#24232a] w-[40rem]'>
    <div className='flex justify-between p-2'>
      <div>
      <Password Generatedpassword={password}/>
      </div>
      <div>
        <Button onclick={handleCopy} label={`${copied==""?"COPY":copied}`}/>
      </div>

    </div>
    <div className='p-2'>
      <InputBox label={"Character Length"}/>
    </div>
    <div className='p-2'>
      <Checkboxes />
    </div>
    <div className='p-2'>
      <Button onclick={()=>{
        generatedPassword(checkbox,length)
      }} label={"Generate Password"}/>
    </div>
    </div>
    </div>
  )
}

export default App
