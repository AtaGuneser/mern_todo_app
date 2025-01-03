import { useSelector, useDispatch } from 'react-redux'
import { closeAddModal } from '../stores/modal'

const AddModal = () => {
  const { addModal } = useSelector(state => state.modal)
  const dispatch = useDispatch()
  return (
    <div className={`${addModal ? 'modal active' : 'modal'}`}>
      <div className='wrapper'>
        <div className='topbar'>
          <h3 className='mark'>Todo App</h3>
          <button
            className='closeButton'
            onClick={() => dispatch(closeAddModal())}
          >
            x
          </button>
        </div>

        <form action=''>
          <div className='content'>
            <div className='area'>
              <textarea type='text' required='required'></textarea>
              <span>Add New List</span>
            </div>

            <div className='buttons'>
              <button type='button' onClick={() => dispatch(closeAddModal())}>
                Cancel
              </button>
              <button type='submit'>Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddModal
