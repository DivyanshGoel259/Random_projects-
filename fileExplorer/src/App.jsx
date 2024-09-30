import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Folder } from './components/Folderd'
import { explorer } from './data/folderData'
import { useTraverseTree } from './hooks/TreeTraverse'

function App() {
  const [explorerData,setExplorerData]=useState(explorer)
  const {insertNode}=useTraverseTree()
  const handleInsertNode = (folderID,item,isFolder)=>{
    const FinalTree = insertNode(explorerData,folderID,item,isFolder)
    setExplorerData(FinalTree)
  }
  return <div>
    <Folder explorer={explorerData} HandleInsertNode={handleInsertNode}></Folder>
  </div>
}

export default App
