const {
    render,
    screen,
    fireEvent,
    within,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import EditAgencyRegisterRequest from '../EditAgencyRegisterRequest'
import { AgencyRegisterRequestAdded } from '../store/AgencyRegisterRequestSlice'
beforeAll(() => {
    store.dispatch(
        AgencyRegisterRequestAdded({
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
        })
    )
})

beforeEach(() => {
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Navigate
                                        to="AgencyRegisterRequest/edit/1"
                                        replace
                                    />
                                }
                            />
                            <Route
                                path="AgencyRegisterRequest/edit/:id"
                                element={<EditAgencyRegisterRequest />}
                            />
                        </Routes>
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

describe('testing view of AgencyRegisterRequestEdit Component', () => {
    test('should render EditAgencyRegisterRequest and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveAgencyRegisterRequestButtonElement = screen.getByRole(
            'button',
            { name: /save/i }
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

        expect(saveAgencyRegisterRequestButtonElement).toBeInTheDocument()

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

    test('should be able to give inputs to all fields of AgencyRegisterRequest edit form', async () => {
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

        expect(AgencyNameElement.value).toBe('AgencyName')

        expect(FirstNameElement.value).toBe('FirstName')

        expect(LastNameElement.value).toBe('LastName')

        expect(TaxIdElement.value).toBe('TaxId')

        expect(NPNElement.value).toBe('NPN')

        expect(WritingCodeElement.value).toBe('WritingCode')

        expect(UserNameElement.value).toBe('UserName')

        expect(PasswordElement.value).toBe('Password')

        expect(SecretImageElement.value).toBe('SecretImage')

        expect(EmailElement.value).toBe('Email')

        expect(PhoneElement.value).toBe('Phone')

        fireEvent.mouseDown(HasAcceptedEulaElement)
        const HasAcceptedEulalistbox = within(screen.getByRole('listbox'))
        fireEvent.click(HasAcceptedEulalistbox.getByText(/True/))
        expect(HasAcceptedEulaElement).toHaveTextContent(/True/i)
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
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

        fireEvent.change(AgencyNameElement, { target: { value: '' } })
        fireEvent.change(FirstNameElement, { target: { value: '' } })
        fireEvent.change(LastNameElement, { target: { value: '' } })
        fireEvent.change(TaxIdElement, { target: { value: '' } })
        fireEvent.change(NPNElement, { target: { value: '' } })
        fireEvent.change(WritingCodeElement, { target: { value: '' } })
        fireEvent.change(UserNameElement, { target: { value: '' } })
        fireEvent.change(PasswordElement, { target: { value: '' } })
        fireEvent.change(SecretImageElement, { target: { value: '' } })
        fireEvent.change(EmailElement, { target: { value: '' } })
        fireEvent.change(PhoneElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveAgencyRegisterRequestButtonElement = screen.getByRole(
            'button',
            { name: /save/i }
        )

        await clickAndWait(saveAgencyRegisterRequestButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(11)
    })
})
