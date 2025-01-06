import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const List = () => {
  const { data } = useSelector(state => state.allDataProcess)
  console.log(data)

  return (
    <div className='list'>
      {data.map(item => (
        <ListItem key={`${item._id}-${item.text}`} item={item} />
      ))}
    </div>
  )
}

export default List
