import { createSlice } from '@reduxjs/toolkit'
import { fetchAgencyRegisterRequest } from './AgencyRegisterRequest.action'
import { addAgencyRegisterRequest } from './AgencyRegisterRequest.action'
import { editAgencyRegisterRequest } from './AgencyRegisterRequest.action'
import { deleteAgencyRegisterRequest } from './AgencyRegisterRequest.action'

const fetchAgencyRegisterRequestExtraReducer = {
    [fetchAgencyRegisterRequest.pending]: (state, action) => {
        state.loading = true
    },
    [fetchAgencyRegisterRequest.fulfilled]: (state, action) => {
        state.entities = [...action.payload]
        state.loading = false
    },
    [fetchAgencyRegisterRequest.rejected]: (state, action) => {
        state.loading = false
    },
}

const addAgencyRegisterRequestExtraReducer = {
    [addAgencyRegisterRequest.pending]: (state, action) => {
        state.loading = true
    },
    [addAgencyRegisterRequest.fulfilled]: (state, action) => {
        state.entities.push(action.payload)
        state.loading = false
    },
    [addAgencyRegisterRequest.rejected]: (state, action) => {
        state.loading = false
    },
}

const editAgencyRegisterRequestExtraReducer = {
    [editAgencyRegisterRequest.pending]: (state, action) => {
        state.loading = true
    },
    [editAgencyRegisterRequest.fulfilled]: (state, action) => {
        const {
            id,
            agencyName,
            firstName,
            lastName,
            taxId,
            nPN,
            writingCode,
            userName,
            password,
            secretImage,
            email,
            phone,
            hasAcceptedEula,
        } = action.payload
        const existingAgencyRegisterRequest = state.entities.find(
            (AgencyRegisterRequest) =>
                AgencyRegisterRequest.id.toString() === id.toString()
        )
        if (existingAgencyRegisterRequest) {
            existingAgencyRegisterRequest.agencyName = agencyName
            existingAgencyRegisterRequest.firstName = firstName
            existingAgencyRegisterRequest.lastName = lastName
            existingAgencyRegisterRequest.taxId = taxId
            existingAgencyRegisterRequest.nPN = nPN
            existingAgencyRegisterRequest.writingCode = writingCode
            existingAgencyRegisterRequest.userName = userName
            existingAgencyRegisterRequest.password = password
            existingAgencyRegisterRequest.secretImage = secretImage
            existingAgencyRegisterRequest.email = email
            existingAgencyRegisterRequest.phone = phone
            existingAgencyRegisterRequest.hasAcceptedEula = hasAcceptedEula
        }
        state.loading = false
    },
    [editAgencyRegisterRequest.rejected]: (state, action) => {
        state.loading = false
    },
}

const deleteAgencyRegisterRequestExtraReducer = {
    [deleteAgencyRegisterRequest.pending]: (state, action) => {
        state.loading = true
    },
    [deleteAgencyRegisterRequest.fulfilled]: (state, action) => {
        const id = action.payload
        const existingAgencyRegisterRequest = state.entities.find(
            (AgencyRegisterRequest) =>
                AgencyRegisterRequest.id.toString() === id.toString()
        )
        if (existingAgencyRegisterRequest) {
            state.entities = state.entities.filter(
                (AgencyRegisterRequest) => AgencyRegisterRequest.id !== id
            )
        }
        state.loading = false
    },
    [deleteAgencyRegisterRequest.rejected]: (state, action) => {
        state.loading = false
    },
}
const AgencyRegisterRequestSlice = createSlice({
    name: 'AgencyRegisterRequest',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        AgencyRegisterRequestAdded(state, action) {
            state.entities.push(action.payload)
        },
        AgencyRegisterRequestUpdated(state, action) {
            const {
                id,
                agencyName,
                firstName,
                lastName,
                taxId,
                nPN,
                writingCode,
                userName,
                password,
                secretImage,
                email,
                phone,
                hasAcceptedEula,
            } = action.payload
            const existingAgencyRegisterRequest = state.entities.find(
                (AgencyRegisterRequest) =>
                    AgencyRegisterRequest.id.toString() === id.toString()
            )
            if (existingAgencyRegisterRequest) {
                existingAgencyRegisterRequest.agencyName = agencyName
                existingAgencyRegisterRequest.firstName = firstName
                existingAgencyRegisterRequest.lastName = lastName
                existingAgencyRegisterRequest.taxId = taxId
                existingAgencyRegisterRequest.nPN = nPN
                existingAgencyRegisterRequest.writingCode = writingCode
                existingAgencyRegisterRequest.userName = userName
                existingAgencyRegisterRequest.password = password
                existingAgencyRegisterRequest.secretImage = secretImage
                existingAgencyRegisterRequest.email = email
                existingAgencyRegisterRequest.phone = phone
                existingAgencyRegisterRequest.hasAcceptedEula = hasAcceptedEula
            }
        },
        AgencyRegisterRequestDeleted(state, action) {
            const { id } = action.payload
            const existingAgencyRegisterRequest = state.entities.find(
                (AgencyRegisterRequest) =>
                    AgencyRegisterRequest.id.toString() === id.toString()
            )
            if (existingAgencyRegisterRequest) {
                state.entities = state.entities.filter(
                    (AgencyRegisterRequest) => AgencyRegisterRequest.id !== id
                )
            }
        },
    },
    extraReducers: {
        ...fetchAgencyRegisterRequestExtraReducer,
        ...addAgencyRegisterRequestExtraReducer,
        ...editAgencyRegisterRequestExtraReducer,
        ...deleteAgencyRegisterRequestExtraReducer,
    },
})

export const {
    AgencyRegisterRequestAdded,
    AgencyRegisterRequestUpdated,
    AgencyRegisterRequestDeleted,
} = AgencyRegisterRequestSlice.actions

export default AgencyRegisterRequestSlice.reducer
