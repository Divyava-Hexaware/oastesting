const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import AgencyRegisterRequestList from '../AgencyRegisterRequestList'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render AgencyRegisterRequest rows when api response has data', async () => {
    const endPoint = 'agencyRegisterRequest'
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
            HasAcceptedEula: true,
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getAgencyRegisterRequestListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AgencyRegisterRequestList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const agencyRegisterRequestAgencyNameCell = await screen.findByText(
        /AgencyName/i
    )

    expect(agencyRegisterRequestAgencyNameCell).toHaveTextContent(/AgencyName/i)
    mock.reset()
})
