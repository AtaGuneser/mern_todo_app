import { useDispatch } from 'react-redux'
import { openAddModal } from '../stores/modal'
import { useState } from 'react'
const Topbar = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  return (
    <div className='topbar'>
      <h3 className='mark'>Todo App</h3>
      <div className='searchEngine'>
        <input
          type='text'
          placeholder='Search in your list'
          required='required'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
      <div className='addButton'>
        <button onClick={() => dispatch(openAddModal())}>+</button>
      </div>
    </div>
  )
}

export default Topbar
