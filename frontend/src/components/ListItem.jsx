import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import PropTypes from 'prop-types'
import axios from 'axios'
import { deleteData } from '../stores/data'
import { useDispatch } from 'react-redux'
import { openEditModal } from '../stores/modal'

const ListItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className='listItem'>
      <section type='text' placeholder='Your List Item..'>
        {item.text}
      </section>
      <div className='buttons'>
        <button
          className='editButton'
          onClick={() => {
            dispatch(openEditModal(item))
          }}
        >
          <FiEdit />
        </button>
        <button
          className='deleteButton'
          onClick={async () => {
            let formtData = { id: item._id }
            let response = await axios.post(
              'http://localhost:4000/delete',
              formtData
            )
            response = response.data
            if (response.type) {
              dispatch(deleteData(formtData))
            }
          }}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  )
}
ListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default ListItem
