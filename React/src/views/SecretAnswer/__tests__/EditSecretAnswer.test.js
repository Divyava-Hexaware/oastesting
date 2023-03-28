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
import EditSecretAnswer from '../EditSecretAnswer'
import { SecretAnswerAdded } from '../store/SecretAnswerSlice'
beforeAll(() => {
    store.dispatch(
        SecretAnswerAdded({
            id: 1,
            QuestionId: 92,
            Answer: 'Answer',
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
                                        to="SecretAnswer/edit/1"
                                        replace
                                    />
                                }
                            />
                            <Route
                                path="SecretAnswer/edit/:id"
                                element={<EditSecretAnswer />}
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

describe('testing view of SecretAnswerEdit Component', () => {
    test('should render EditSecretAnswer and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveSecretAnswerButtonElement = screen.getByRole('button', {
            name: /save/i,
        })
        const QuestionIdElement = screen.getByLabelText(/QuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        expect(saveSecretAnswerButtonElement).toBeInTheDocument()

        expect(QuestionIdElement).toBeInTheDocument()
        expect(AnswerElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of SecretAnswer edit form', async () => {
        const QuestionIdElement = screen.getByLabelText(/QuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        fireEvent.change(QuestionIdElement, { target: { value: 52 } })
        fireEvent.change(AnswerElement, { target: { value: 'Answer' } })

        expect(QuestionIdElement.value).toBe(52)
        expect(AnswerElement.value).toBe('Answer')
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const QuestionIdElement = screen.getByLabelText(/QuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        fireEvent.change(QuestionIdElement, { target: { value: '' } })
        fireEvent.change(AnswerElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveSecretAnswerButtonElement = screen.getByRole('button', {
            name: /save/i,
        })

        await clickAndWait(saveSecretAnswerButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(2)
    })
})
