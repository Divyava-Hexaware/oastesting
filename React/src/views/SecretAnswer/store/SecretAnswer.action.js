import { createAsyncThunk } from '@reduxjs/toolkit'
import { showSuccess } from 'middleware/notification/store/notification.actions'
import axios from '../../../axios'

const endPoint = 'SecretAnswer'

export const fetchSecretAnswer = createAsyncThunk(
    'SecretAnswer/fetchSecretAnswer',
    async () => {
        const response = await axios.get(`/${endPoint}`)
        const SecretAnswer = await response.data
        return SecretAnswer
    }
)

export const addSecretAnswer = createAsyncThunk(
    'SecretAnswer/addSecretAnswer',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}`, data)
        const SecretAnswer = await response.data
        thunkAPI.dispatch(showSuccess('SecretAnswer added successfully'))
        return SecretAnswer
    }
)

export const editSecretAnswer = createAsyncThunk(
    'SecretAnswer/editSecretAnswer',
    async (data, thunkAPI) => {
        const response = await axios.put(`/${endPoint}/${data.id}`, data)
        const SecretAnswer = await response.data
        thunkAPI.dispatch(showSuccess('SecretAnswer updated successfully'))
        return SecretAnswer
    }
)

export const deleteSecretAnswer = createAsyncThunk(
    'SecretAnswer/deleteSecretAnswer',
    async (data, thunkAPI) => {
        const response = await axios.delete(`/${endPoint}/${data.id}`)
        const status = await response.status
        if (status === 200) {
            thunkAPI.dispatch(
                showSuccess('Selected SecretAnswer deleted successfully.')
            )
            return data.id
        }
    }
)
