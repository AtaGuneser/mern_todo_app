import AddModal from './AddModal'
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
    </>
  )
}

export default Todo
