import './App.css'
import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [addNum, setAddNum] = useState(false)
  const [addChar, setAddChar] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() =>{

    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(addNum) str += "0123456789"
    if(addChar) str += "!@#$%^&*()_+"

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random() * str.length) + 1
      pass += str[index]
    }
    setPassword(pass)
  },[length, addNum, addChar, setPassword])

  useEffect(() => {generatePassword()}, [length, addNum, addChar, generatePassword])
  const passwordRef = useRef(null)

  const CopyPassToClip =()=>{
    passwordRef.current.select()
    document.execCommand('copy')
  }

  return (
    <>

      <div></div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1  className="text-2xl font-bold text-center ">Password Generator</h1>
        <div className='flex flex-col gap-4 py-4'>
        <input type="text" value={password} placeholder="Generated Password" readOnly className='bg-gray-800 text-white rounded-md px-2 py-1' ref={passwordRef}/>

<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={CopyPassToClip}>
          Copy
        </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex flex-col gap-y-2'>
          <input type="range" min="8" max="21" value={length} onChange={(e) => setLength(e.target.value)} className='w-full'/>
          <label className='text-center'>Length: {length}</label>

          </div>

          <div className='flex flex-col gap-y-2'>
          <label className='flex gap-x-2 items-center'>
            <input type="checkbox" checked={addNum} onChange={(e) => setAddNum(e.target.checked)}/>
            Add Numbers
          </label>
          <label className='flex gap-x-2 items-center'>
            <input type="checkbox" checked={addChar} onChange={(e) => setAddChar(e.target.checked)}/>
            Add Special Characters
          </label>
          </div>
        </div>
        <div className='flex justify-center py-4'>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={generatePassword}>
          Generate Password
        </button>

        </div>
      </div>
    </>
  )
}

export default App
