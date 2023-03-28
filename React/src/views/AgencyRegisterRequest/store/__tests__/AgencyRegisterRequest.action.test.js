import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import store from 'store/store'
import {
    fetchAgencyRegisterRequest,
    addAgencyRegisterRequest,
    editAgencyRegisterRequest,
    deleteAgencyRegisterRequest,
} from '../agencyRegisterRequest.action'

const getAgencyRegisterRequestListResponse = [
    {
        id: 1,
        AgencyName: 'AgencyName',
        FirstName: 'FirstName',
        LastName: 'LastName',
        TaxId: 'TaxId',
        NPN: 'NPN',
        WritingCode: 'WritingCode',
        UserName: 'UserName',
        Password: 'Password',
        SecretImage: 'SecretImage',
        Email: 'Email',
        Phone: 'Phone',
        HasAcceptedEula: false,
    },
]

const addAgencyRegisterRequestListResponse = (data) => {
    return { id: 2, ...data }
}
const editAgencyRegisterRequestListResponse = (data) => {
    return data
}

describe('should test AgencyRegisterRequest redux tooklit asyncThunk api action and redux store updation', () => {
    const mock = new MockAdapter(axios)
    const endPoint = 'agencyRegisterRequest'
    test('Should be able to fetch the agencyRegisterRequest list and update agencyRegisterRequest redux store', async () => {
        mock.onGet(`/${endPoint}`).reply(
            200,
            getAgencyRegisterRequestListResponse
        )
        const result = await store.dispatch(fetchAgencyRegisterRequest())
        const agencyRegisterRequestList = result.payload
        expect(result.type).toBe(
            'agencyRegisterRequest/fetchAgencyRegisterRequest/fulfilled'
        )
        expect(agencyRegisterRequestList).toEqual(
            getAgencyRegisterRequestListResponse
        )

        const state = store.getState().agencyRegisterRequest
        expect(state.entities).toEqual(agencyRegisterRequestList)
    })

    test('Should be able to add new agencyRegisterRequest to list and make post api and update agencyRegisterRequest redux store', async () => {
        const body = {
            AgencyName: 'AgencyName',
            FirstName: 'FirstName',
            LastName: 'LastName',
            TaxId: 'TaxId',
            NPN: 'NPN',
            WritingCode: 'WritingCode',
            UserName: 'UserName',
            Password: 'Password',
            SecretImage: 'SecretImage',
            Email: 'Email',
            Phone: 'Phone',
            HasAcceptedEula: true,
        }
        mock.onPost(`/${endPoint}`, body).reply(
            201,
            addAgencyRegisterRequestListResponse(body)
        )
        const result = await store.dispatch(addAgencyRegisterRequest(body))
        const agencyRegisterRequestItem = result.payload
        expect(result.type).toBe(
            'agencyRegisterRequest/addAgencyRegisterRequest/fulfilled'
        )
        expect(agencyRegisterRequestItem).toEqual(
            addAgencyRegisterRequestListResponse(body)
        )

        const state = store.getState().agencyRegisterRequest
        expect(state.entities).toContainEqual(
            addAgencyRegisterRequestListResponse(body)
        )
    })

    test('Should be able to edit agencyRegisterRequest in list and make put api call and update agencyRegisterRequest redux store', async () => {
        const body = {
            id: 1,
            AgencyName: 'AgencyName',
            FirstName: 'FirstName',
            LastName: 'LastName',
            TaxId: 'TaxId',
            NPN: 'NPN',
            WritingCode: 'WritingCode',
            UserName: 'UserName',
            Password: 'Password',
            SecretImage: 'SecretImage',
            Email: 'Email',
            Phone: 'Phone',
            HasAcceptedEula: true,
        }
        mock.onPut(`/${endPoint}/${body.id}`, body).reply(
            201,
            editAgencyRegisterRequestListResponse(body)
        )
        const result = await store.dispatch(editAgencyRegisterRequest(body))
        const agencyRegisterRequestItem = result.payload
        expect(result.type).toBe(
            'agencyRegisterRequest/editAgencyRegisterRequest/fulfilled'
        )
        expect(agencyRegisterRequestItem).toEqual(
            editAgencyRegisterRequestListResponse(body)
        )

        const state = store.getState().agencyRegisterRequest
        let changedAgencyRegisterRequest = state.entities.find(
            (p) => p.id === body.id
        )
        expect(changedAgencyRegisterRequest.name).toEqual(body.name)
    })

    test('Should be able to delete agencyRegisterRequest in list and update agencyRegisterRequest redux store', async () => {
        const input = {
            id: 2,
        }
        mock.onDelete(`/${endPoint}/${input.id}`, input).reply(200)
        let state = store.getState().agencyRegisterRequest
        const initialLength = state.entities.length
        const result = await store.dispatch(deleteAgencyRegisterRequest(input))
        const deletId = result.payload
        expect(result.type).toBe(
            'agencyRegisterRequest/deleteAgencyRegisterRequest/fulfilled'
        )
        expect(deletId).toEqual(input.id)

        state = store.getState().agencyRegisterRequest
        const updateLength = initialLength - 1
        expect(state.entities.length).toEqual(updateLength)
    })
})
