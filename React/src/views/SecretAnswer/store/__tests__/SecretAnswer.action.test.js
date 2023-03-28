import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import store from 'store/store'
import {
    fetchSecretAnswer,
    addSecretAnswer,
    editSecretAnswer,
    deleteSecretAnswer,
} from '../secretAnswer.action'

const getSecretAnswerListResponse = [
    {
        id: 1,
        QuestionId: 60,
        Answer: 'Answer',
    },
]

const addSecretAnswerListResponse = (data) => {
    return { id: 2, ...data }
}
const editSecretAnswerListResponse = (data) => {
    return data
}

describe('should test SecretAnswer redux tooklit asyncThunk api action and redux store updation', () => {
    const mock = new MockAdapter(axios)
    const endPoint = 'secretAnswer'
    test('Should be able to fetch the secretAnswer list and update secretAnswer redux store', async () => {
        mock.onGet(`/${endPoint}`).reply(200, getSecretAnswerListResponse)
        const result = await store.dispatch(fetchSecretAnswer())
        const secretAnswerList = result.payload
        expect(result.type).toBe('secretAnswer/fetchSecretAnswer/fulfilled')
        expect(secretAnswerList).toEqual(getSecretAnswerListResponse)

        const state = store.getState().secretAnswer
        expect(state.entities).toEqual(secretAnswerList)
    })

    test('Should be able to add new secretAnswer to list and make post api and update secretAnswer redux store', async () => {
        const body = {
            QuestionId: 31,
            Answer: 'Answer',
        }
        mock.onPost(`/${endPoint}`, body).reply(
            201,
            addSecretAnswerListResponse(body)
        )
        const result = await store.dispatch(addSecretAnswer(body))
        const secretAnswerItem = result.payload
        expect(result.type).toBe('secretAnswer/addSecretAnswer/fulfilled')
        expect(secretAnswerItem).toEqual(addSecretAnswerListResponse(body))

        const state = store.getState().secretAnswer
        expect(state.entities).toContainEqual(addSecretAnswerListResponse(body))
    })

    test('Should be able to edit secretAnswer in list and make put api call and update secretAnswer redux store', async () => {
        const body = {
            id: 1,
            QuestionId: 59,
            Answer: 'Answer',
        }
        mock.onPut(`/${endPoint}/${body.id}`, body).reply(
            201,
            editSecretAnswerListResponse(body)
        )
        const result = await store.dispatch(editSecretAnswer(body))
        const secretAnswerItem = result.payload
        expect(result.type).toBe('secretAnswer/editSecretAnswer/fulfilled')
        expect(secretAnswerItem).toEqual(editSecretAnswerListResponse(body))

        const state = store.getState().secretAnswer
        let changedSecretAnswer = state.entities.find((p) => p.id === body.id)
        expect(changedSecretAnswer.name).toEqual(body.name)
    })

    test('Should be able to delete secretAnswer in list and update secretAnswer redux store', async () => {
        const input = {
            id: 2,
        }
        mock.onDelete(`/${endPoint}/${input.id}`, input).reply(200)
        let state = store.getState().secretAnswer
        const initialLength = state.entities.length
        const result = await store.dispatch(deleteSecretAnswer(input))
        const deletId = result.payload
        expect(result.type).toBe('secretAnswer/deleteSecretAnswer/fulfilled')
        expect(deletId).toEqual(input.id)

        state = store.getState().secretAnswer
        const updateLength = initialLength - 1
        expect(state.entities.length).toEqual(updateLength)
    })
})
