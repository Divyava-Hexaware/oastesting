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
import AddSecretAnswer from '../AddSecretAnswer'

beforeEach(() => {
    const endPoint = 'SecretAnswer'
    const getStudentListResponse = [
        {
            id: 1,
            QuestionId: 15,
            Answer: 'Answer',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getStudentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AddSecretAnswer />
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

describe('testing view SecretAnswerAdd Component', () => {
    test('should render AddSecretAnswer and to display Add Form title', async () => {
        const headingNote = screen.getByText(/Add Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the add form', async () => {
        const addSecretAnswerButtonElement = screen.getByRole('button', {
            name: /Add/i,
        })

        const QuestionIdElement = screen.getByLabelText(/QuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        expect(addSecretAnswerButtonElement).toBeInTheDocument()

        expect(QuestionIdElement).toBeInTheDocument()
        expect(AnswerElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of SecretAnswer add form', async () => {
        const QuestionIdElement = screen.getByLabelText(/QuestionId/i)
        const AnswerElement = screen.getByLabelText(/Answer/i)

        fireEvent.change(QuestionIdElement, { target: { value: 51 } })
        fireEvent.change(AnswerElement, { target: { value: 'Answer' } })
    })

    test('should return error message when add SecretAnswer button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const addSecretAnswerButtonElement = screen.getByRole('button', {
            name: /Add/i,
        })

        await clickAndWait(addSecretAnswerButtonElement)

        let errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(2)
    })
})
