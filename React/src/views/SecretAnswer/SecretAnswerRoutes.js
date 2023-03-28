import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const SecretAnswerList = Loadable(lazy(() => import('./SecretAnswerList')))
const EditSecretAnswer = Loadable(lazy(() => import('./EditSecretAnswer')))
const AddSecretAnswer = Loadable(lazy(() => import('./AddSecretAnswer')))

const SecretAnswerRoutes = [
    {
        path: '/SecretAnswer',
        element: <SecretAnswerList />,
    },
    {
        path: '/SecretAnswer/edit/:id',
        element: <EditSecretAnswer />,
    },
    {
        path: '/SecretAnswer/add',
        element: <AddSecretAnswer />,
    },
]

export default SecretAnswerRoutes
