const {
    render,
    screen,
    fireEvent,
    within,
    waitFor,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'
import AddAgencyRegisterRequest from '../AddAgencyRegisterRequest'

beforeEach(() => {
    const endPoint = 'AgencyRegisterRequest'
    const getStudentListResponse = [
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
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getStudentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AddAgencyRegisterRequest />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
})

const clickAndWait = async (element) => {
    await act(async () => {
        fireEvent.click(element)
    })

    await act(async () => {
        jest.runOnlyPendingTimers()
    })
}

afterEach(cleanup)

describe('testing view AgencyRegisterRequestAdd Component', () => {
    test('should render AddAgencyRegisterRequest and to display Add Form title', async () => {
        const headingNote = screen.getByText(/Add Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the add form', async () => {
        const addAgencyRegisterRequestButtonElement = screen.getByRole(
            'button',
            { name: /Add/i }
        )

        const AgencyNameElement = screen.getByLabelText(/AgencyName/i)
        const FirstNameElement = screen.getByLabelText(/FirstName/i)
        const LastNameElement = screen.getByLabelText(/LastName/i)
        const TaxIdElement = screen.getByLabelText(/TaxId/i)
        const NPNElement = screen.getByLabelText(/NPN/i)
        const WritingCodeElement = screen.getByLabelText(/WritingCode/i)
        const UserNameElement = screen.getByLabelText(/UserName/i)
        const PasswordElement = screen.getByLabelText(/Password/i)
        const SecretImageElement = screen.getByLabelText(/SecretImage/i)
        const EmailElement = screen.getByLabelText(/Email/i)
        const PhoneElement = screen.getByLabelText(/Phone/i)
        const HasAcceptedEulaElement = screen.getByLabelText(/HasAcceptedEula/i)

        expect(addAgencyRegisterRequestButtonElement).toBeInTheDocument()

        expect(AgencyNameElement).toBeInTheDocument()
        expect(FirstNameElement).toBeInTheDocument()
        expect(LastNameElement).toBeInTheDocument()
        expect(TaxIdElement).toBeInTheDocument()
        expect(NPNElement).toBeInTheDocument()
        expect(WritingCodeElement).toBeInTheDocument()
        expect(UserNameElement).toBeInTheDocument()
        expect(PasswordElement).toBeInTheDocument()
        expect(SecretImageElement).toBeInTheDocument()
        expect(EmailElement).toBeInTheDocument()
        expect(PhoneElement).toBeInTheDocument()
        expect(HasAcceptedEulaElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of AgencyRegisterRequest add form', async () => {
        const AgencyNameElement = screen.getByLabelText(/AgencyName/i)
        const FirstNameElement = screen.getByLabelText(/FirstName/i)
        const LastNameElement = screen.getByLabelText(/LastName/i)
        const TaxIdElement = screen.getByLabelText(/TaxId/i)
        const NPNElement = screen.getByLabelText(/NPN/i)
        const WritingCodeElement = screen.getByLabelText(/WritingCode/i)
        const UserNameElement = screen.getByLabelText(/UserName/i)
        const PasswordElement = screen.getByLabelText(/Password/i)
        const SecretImageElement = screen.getByLabelText(/SecretImage/i)
        const EmailElement = screen.getByLabelText(/Email/i)
        const PhoneElement = screen.getByLabelText(/Phone/i)
        const HasAcceptedEulaElement = screen.getByLabelText(/HasAcceptedEula/i)

        fireEvent.change(AgencyNameElement, { target: { value: 'AgencyName' } })
        fireEvent.change(FirstNameElement, { target: { value: 'FirstName' } })
        fireEvent.change(LastNameElement, { target: { value: 'LastName' } })
        fireEvent.change(TaxIdElement, { target: { value: 'TaxId' } })
        fireEvent.change(NPNElement, { target: { value: 'NPN' } })
        fireEvent.change(WritingCodeElement, {
            target: { value: 'WritingCode' },
        })
        fireEvent.change(UserNameElement, { target: { value: 'UserName' } })
        fireEvent.change(PasswordElement, { target: { value: 'Password' } })
        fireEvent.change(SecretImageElement, {
            target: { value: 'SecretImage' },
        })
        fireEvent.change(EmailElement, { target: { value: 'Email' } })
        fireEvent.change(PhoneElement, { target: { value: 'Phone' } })

        fireEvent.mouseDown(HasAcceptedEulaElement)
        const HasAcceptedEulalistbox = within(screen.getByRole('listbox'))
        fireEvent.click(HasAcceptedEulalistbox.getByText(/True/))
        expect(HasAcceptedEulaElement).toHaveTextContent(/True/i)
    })

    test('should return error message when add AgencyRegisterRequest button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const addAgencyRegisterRequestButtonElement = screen.getByRole(
            'button',
            { name: /Add/i }
        )

        await clickAndWait(addAgencyRegisterRequestButtonElement)

        let errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(12)
    })
})
