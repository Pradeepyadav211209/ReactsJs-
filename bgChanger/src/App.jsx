import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div></div>
      <div className="w-full h-screen  flex flex-col flex-1 justify-center items-center gap-4" style={{ backgroundColor: color }}> 

      <button className='bg-amber-800 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('red')}>Red</button>
      <button className='bg-blue-500 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('blue')}>Blue</button>
      <button className='bg-green-500 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('green')}>Green</button>  

      <button className='bg-amber-800 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('olive')}>Olive</button>

      <button className='bg-purple-500 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('purple')}>Purple</button>

      <button className='bg-pink-500 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('pink')}>Pink</button>

      <button className='bg-gray-500 outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('gray')}>Gray</button>
      </div>
    </>
  )
}

export default App
