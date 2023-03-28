import { createAsyncThunk } from '@reduxjs/toolkit'
import { showSuccess } from 'middleware/notification/store/notification.actions'
import axios from '../../../axios'

const endPoint = 'AgencyRegisterRequest'

export const fetchAgencyRegisterRequest = createAsyncThunk(
    'AgencyRegisterRequest/fetchAgencyRegisterRequest',
    async () => {
        const response = await axios.get(`/${endPoint}`)
        const AgencyRegisterRequest = await response.data
        return AgencyRegisterRequest
    }
)

export const addAgencyRegisterRequest = createAsyncThunk(
    'AgencyRegisterRequest/addAgencyRegisterRequest',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}`, data)
        const AgencyRegisterRequest = await response.data
        thunkAPI.dispatch(
            showSuccess('AgencyRegisterRequest added successfully')
        )
        return AgencyRegisterRequest
    }
)

export const editAgencyRegisterRequest = createAsyncThunk(
    'AgencyRegisterRequest/editAgencyRegisterRequest',
    async (data, thunkAPI) => {
        const response = await axios.put(`/${endPoint}/${data.id}`, data)
        const AgencyRegisterRequest = await response.data
        thunkAPI.dispatch(
            showSuccess('AgencyRegisterRequest updated successfully')
        )
        return AgencyRegisterRequest
    }
)

export const deleteAgencyRegisterRequest = createAsyncThunk(
    'AgencyRegisterRequest/deleteAgencyRegisterRequest',
    async (data, thunkAPI) => {
        const response = await axios.delete(`/${endPoint}/${data.id}`)
        const status = await response.status
        if (status === 200) {
            thunkAPI.dispatch(
                showSuccess(
                    'Selected AgencyRegisterRequest deleted successfully.'
                )
            )
            return data.id
        }
    }
)
