const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import SecretAnswerList from '../SecretAnswerList'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render SecretAnswer rows when api response has data', async () => {
    const endPoint = 'secretAnswer'
    const getSecretAnswerListResponse = [
        {
            id: 1,
            QuestionId: 1,
            Answer: 'Answer',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getSecretAnswerListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <SecretAnswerList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const secretAnswerQuestionIdCell = await screen.findByText(/1/i)

    expect(secretAnswerQuestionIdCell).toHaveTextContent(/1/i)
    mock.reset()
})
