import { useSelector, useDispatch } from 'react-redux'
import { closeAddModal } from '../stores/modal'
import axios from 'axios'
import { useState } from 'react'
import { addData } from '../stores/data'

const AddModal = () => {
  const { addModal } = useSelector(state => state.modal)
  const [textareaValue, setTextareaValue] = useState('')

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

        <form
          onSubmit={async e => {
            e.preventDefault()
            const formData = { text: textareaValue }
            let response = await axios.post(
              'http://localhost:4000/add',
              formData
            )
            response = response.data
            if (response.type) {
              dispatch(addData(response.message))
              setTextareaValue('')
              dispatch(closeAddModal())
            }
          }}
        >
          <div className='content'>
            <div className='area'>
              <textarea
                type='text'
                required='required'
                value={textareaValue}
                onChange={e => setTextareaValue(e.target.value)}
              ></textarea>
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
