import AddModal from './AddModal'
import EditModal from './EditModal'
import List from './List'
import Topbar from './Topbar'

const Todo = () => {
  return (
    <>
      <div className='todo'>
        <div className='wrapper'>
          <Topbar />
          <List />
        </div>
      </div>
      <AddModal />
      <EditModal />
    </>
  )
}

export default Todo
