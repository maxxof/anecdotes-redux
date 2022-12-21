import { createSlice } from "@reduxjs/toolkit"

const initialState = ''
let timeoutID

const notificationSlice = createSlice({
    name: 'notificatoin',
    initialState,
    reducers: {
        setNotif(state, action) {
            const content = action.payload
            return content
        }
    }
})

export const { setNotif } = notificationSlice.actions

export const setNotification = (notification, duration) => {
    return dispatch => {
        clearTimeout(timeoutID)
        dispatch(setNotif(notification))
        timeoutID = setTimeout(() => {
            dispatch(setNotif(''))
        }, duration*1000)
    }
}

export default notificationSlice.reducer