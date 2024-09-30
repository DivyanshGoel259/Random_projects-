import { useState } from "react"

export const Folder = ({ explorer ,HandleInsertNode}) => {

    const [expand, setExpand] = useState(false)
    const [showInput,setShowInput]= useState({visible:false,
        isFolder:null
    })
    const handleOnFolderClick = (e,isFolder) => {
        e.stopPropagation()
        setExpand(true)
        setShowInput({visible:true,isFolder})
    }
    const onAddFolder = (e)=>{
        if(e.keyCode===13 && e.target.value){
            HandleInsertNode(explorer.id , e.target.value , showInput.isFolder)
            setShowInput({...showInput,visible:false})

        }
    }
    if (explorer.isFolder) {
        return <div className="w-[40rem]">
            <div className="flex justify-between hover:cursor-pointer bg-gray-200 mt-2 mb-2 p-2 border border-slate-800 rounded-md" onClick={() => {
                setExpand(!expand)
            }}>
                <span>📁 {explorer.name}</span>
                <div className="flex justify-between gap-2">
                    <button onClick={(e) => handleOnFolderClick(e ,true)} className="border border-black">Folder +</button>
                    <button onClick={(e) => handleOnFolderClick(e,false)} className="border border-black">File +</button>
                </div>
            </div>

            <div className={`${expand ? "block ml-6 mb-2 mt-2 " : "hidden"}`}>

                {
                    showInput.visible &&(<div className="flex gap-2 mt-2 mb-2 p-2 rounded-md">
                        <div>
                        <span>{showInput.isFolder?"📁":"🗄"}</span>
                        </div>
                        <div>
                        <input onKeyDown={(e)=>{onAddFolder(e)}} type="text" autoFocus onBlur={()=>{setShowInput({...showInput,visible:false})}}/>
                        </div>
                    </div>)
                }
                {explorer.items.map((exp) => {
                    return <div>
                        <Folder HandleInsertNode={HandleInsertNode} explorer={exp} key={exp.id} />
                    </div>
                })}
            </div>
        </div>
    }
    else {
        return (
            <div className="hover:cursor-pointer mt-2 mb-2 " onClick={() => {
                setExpand(!expand)
            }}>
                <span>🗄 {explorer.name}</span>
            </div>
        )
    }
}