import store from 'store/store'
import {
    agencyRegisterRequestAdded,
    agencyRegisterRequestDeleted,
    agencyRegisterRequestUpdated,
} from '../agencyRegisterRequestSlice'

describe('testing agencyRegisterRequest redux store reducers', () => {
    test('add agencyRegisterRequest to store test', () => {
        let state = store.getState().agencyRegisterRequest
        expect(state.entities).toHaveLength(0)
        const initialInput = {
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
        }
        store.dispatch(agencyRegisterRequestAdded(initialInput))
        state = store.getState().agencyRegisterRequest
        expect(state.entities).toHaveLength(1)
    })

    test('update agencyRegisterRequest from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
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
        store.dispatch(agencyRegisterRequestAdded(initialInput))
        let state = store.getState().agencyRegisterRequest
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
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
        }
        store.dispatch(agencyRegisterRequestUpdated(updatedInput))
        state = store.getState().agencyRegisterRequest
        let changedAgencyRegisterRequest = state.entities.find(
            (p) => p.id === 2
        )
        expect(changedAgencyRegisterRequest).toStrictEqual(updatedInput)
    })

    test('delete agencyRegisterRequest from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
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
        }
        store.dispatch(agencyRegisterRequestAdded(initialInput))
        let state = store.getState().agencyRegisterRequest
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            agencyRegisterRequestDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().agencyRegisterRequest
        expect(state.entities).toHaveLength(2)
    })
})
