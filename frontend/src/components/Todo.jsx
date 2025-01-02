import List from './List'
import Topbar from './Topbar'

const Todo = () => {
    return (
        <div className="todo">
            <div className="wrapper">
                <Topbar />
                <List />
            </div>
        </div>
    )
}

export default Todo