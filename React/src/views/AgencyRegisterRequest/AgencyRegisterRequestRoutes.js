import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const AgencyRegisterRequestList = Loadable(
    lazy(() => import('./AgencyRegisterRequestList'))
)
const EditAgencyRegisterRequest = Loadable(
    lazy(() => import('./EditAgencyRegisterRequest'))
)
const AddAgencyRegisterRequest = Loadable(
    lazy(() => import('./AddAgencyRegisterRequest'))
)

const AgencyRegisterRequestRoutes = [
    {
        path: '/AgencyRegisterRequest',
        element: <AgencyRegisterRequestList />,
    },
    {
        path: '/AgencyRegisterRequest/edit/:id',
        element: <EditAgencyRegisterRequest />,
    },
    {
        path: '/AgencyRegisterRequest/add',
        element: <AddAgencyRegisterRequest />,
    },
]

export default AgencyRegisterRequestRoutes
