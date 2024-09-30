import { useState } from 'react'
import '../App.css'
import { useRecoilState } from 'recoil'
import { lengthAtom } from '../atoms/atom'
export const InputBox = ({ label }) => {
    const [length,setLength] = useRecoilState(lengthAtom)
    return <div>
        <div className="flex text-white text-xl font-bold justify-between">
            <div>
                {label}
            </div>
            <div>
                {length}
            </div>
        </div>
        <div className="">
            <input className="w-full mt-6 custom-range" type="range" min={4} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        </div>
    </div>
}