import { createSlice } from '@reduxjs/toolkit'
import { fetchSecretAnswer } from './SecretAnswer.action'
import { addSecretAnswer } from './SecretAnswer.action'
import { editSecretAnswer } from './SecretAnswer.action'
import { deleteSecretAnswer } from './SecretAnswer.action'

const fetchSecretAnswerExtraReducer = {
    [fetchSecretAnswer.pending]: (state, action) => {
        state.loading = true
    },
    [fetchSecretAnswer.fulfilled]: (state, action) => {
        state.entities = [...action.payload]
        state.loading = false
    },
    [fetchSecretAnswer.rejected]: (state, action) => {
        state.loading = false
    },
}

const addSecretAnswerExtraReducer = {
    [addSecretAnswer.pending]: (state, action) => {
        state.loading = true
    },
    [addSecretAnswer.fulfilled]: (state, action) => {
        state.entities.push(action.payload)
        state.loading = false
    },
    [addSecretAnswer.rejected]: (state, action) => {
        state.loading = false
    },
}

const editSecretAnswerExtraReducer = {
    [editSecretAnswer.pending]: (state, action) => {
        state.loading = true
    },
    [editSecretAnswer.fulfilled]: (state, action) => {
        const { id, questionId, answer } = action.payload
        const existingSecretAnswer = state.entities.find(
            (SecretAnswer) => SecretAnswer.id.toString() === id.toString()
        )
        if (existingSecretAnswer) {
            existingSecretAnswer.questionId = questionId
            existingSecretAnswer.answer = answer
        }
        state.loading = false
    },
    [editSecretAnswer.rejected]: (state, action) => {
        state.loading = false
    },
}

const deleteSecretAnswerExtraReducer = {
    [deleteSecretAnswer.pending]: (state, action) => {
        state.loading = true
    },
    [deleteSecretAnswer.fulfilled]: (state, action) => {
        const id = action.payload
        const existingSecretAnswer = state.entities.find(
            (SecretAnswer) => SecretAnswer.id.toString() === id.toString()
        )
        if (existingSecretAnswer) {
            state.entities = state.entities.filter(
                (SecretAnswer) => SecretAnswer.id !== id
            )
        }
        state.loading = false
    },
    [deleteSecretAnswer.rejected]: (state, action) => {
        state.loading = false
    },
}
const SecretAnswerSlice = createSlice({
    name: 'SecretAnswer',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        SecretAnswerAdded(state, action) {
            state.entities.push(action.payload)
        },
        SecretAnswerUpdated(state, action) {
            const { id, questionId, answer } = action.payload
            const existingSecretAnswer = state.entities.find(
                (SecretAnswer) => SecretAnswer.id.toString() === id.toString()
            )
            if (existingSecretAnswer) {
                existingSecretAnswer.questionId = questionId
                existingSecretAnswer.answer = answer
            }
        },
        SecretAnswerDeleted(state, action) {
            const { id } = action.payload
            const existingSecretAnswer = state.entities.find(
                (SecretAnswer) => SecretAnswer.id.toString() === id.toString()
            )
            if (existingSecretAnswer) {
                state.entities = state.entities.filter(
                    (SecretAnswer) => SecretAnswer.id !== id
                )
            }
        },
    },
    extraReducers: {
        ...fetchSecretAnswerExtraReducer,
        ...addSecretAnswerExtraReducer,
        ...editSecretAnswerExtraReducer,
        ...deleteSecretAnswerExtraReducer,
    },
})

export const { SecretAnswerAdded, SecretAnswerUpdated, SecretAnswerDeleted } =
    SecretAnswerSlice.actions

export default SecretAnswerSlice.reducer
