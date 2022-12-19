import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
    name: 'notificatoin',
    initialState,
    reducers: {
        setNotification(state, action) {
            const content = action.payload
            return content
        }
    }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer