// import { useState } from 'react'

import './App.css'
import { LeftMenuBar } from './component/LeftMenuBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='min-h-screen flex gap-5 bg-black p-8'>
        <div className=" w-[20%] ">
        <LeftMenuBar/>
        
        </div>
        <div className='bg-red-700  w-[80%] flex flex-col gap-5'>
         <div className='p-8 bg-white'>Navbar</div>
         <div className='flex flex-col gap-5'>
          <h1>Title</h1>
          <div className='flex gap-5'>
            <div className='flex-[80%] bg-gray-800'>left inside</div>
            <div className='flex-[20%] bg-orange-500'>right inside</div>
          </div>
         </div>
        </div>
      </div>

  )
}

export default App
