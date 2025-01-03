import { useDispatch } from 'react-redux'
import { openAddModal } from '../stores/modal'

const Topbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='topbar'>
      <h3 className='mark'>Todo App</h3>
      <div className='searchEngine'>
        <input
          type='text'
          placeholder='Search in your list'
          required='required'
        />
      </div>
      <div className='addButton'>
        <button onClick={() => dispatch(openAddModal())}>+</button>
      </div>
    </div>
  )
}

export default Topbar
