import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (notification !== null) {
      dispatch(setNotification(notification))
      setTimeout(() => {
        dispatch(setNotification(null))
      }, 5000)
    }
  })

  return notification === null ? 
    null :
    <div style={style}>
      {notification}
    </div>
    
}

export default Notification