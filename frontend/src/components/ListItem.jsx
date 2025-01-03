import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from "react-icons/ai";

const ListItem = () => {
    return (
        <div className="listItem">
            <input type="text" placeholder="Your List Item.." />
            <div className="buttons">
                <button className="editButton"><FiEdit/></button>
                <button className="deleteButton"><AiOutlineDelete />
                </button>
            </div>

        </div>)
}

export default ListItem