import { useState } from "react"
import { useRecoilState } from "recoil"
import { checkboxesAtom } from "../atoms/atom"

export const Checkboxes = () => {

    

    const [checkboxes,setCheckboxes] = useRecoilState(checkboxesAtom)

    const handleCheckboxClick =(i)=>{
        const updatedCheckbox = checkboxes.map((cb)=>{
            return {title:cb.title,state:cb.state}
        })
        updatedCheckbox[i].state = !updatedCheckbox[i].state
        setCheckboxes(updatedCheckbox)
    }
    return <div className="grid grid-cols-10">
        {checkboxes?.map((item,idx) => {
            return <div key={idx} className="col-span-5 m-2">
                <div className="flex gap-2">
                    <div>
                        <input type="checkbox" onChange={()=>handleCheckboxClick(idx)} checked={item.state} />
                    </div>
                    <div className="text-white ">
                        {item.title}
                    </div>
                </div>
            </div>

        })}
    </div>
}