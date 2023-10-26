import React from 'react'
import {GiNotebook} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
        <div>
            <GiNotebook/>
            
        </div>

        <div>My Notes</div>

        <div>
            <AiOutlineSearch/>
        </div>

        
    </div>
  )
}

export default Navbar