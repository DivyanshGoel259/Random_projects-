import { useRecoilValue } from "recoil"
import { checkboxesAtom, lengthAtom } from "../atoms/atom"

export const Button=({label,onclick})=>{
    
    return <div >

        <button onClick={onclick} className="font-semibold w-full font-md rounded-[10px] py-1 px-4 text-white bg-[#227474]">
            {label}
        </button>
    </div>
}