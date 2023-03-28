import React, { useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    deleteAgencyRegisterRequest,
    fetchAgencyRegisterRequest,
} from './store/AgencyRegisterRequest.action'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import { CircularProgress, IconButton } from '@mui/material'
import { Button, Icon } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AgencyRegisterRequestList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { entities } = useSelector((state) => state.AgencyRegisterRequest)
    const loading = useSelector((state) => state.AgencyRegisterRequest.loading)

    const handleDelete = (id) => {
        dispatch(deleteAgencyRegisterRequest({ id }))
    }

    const handleEdit = (id) => {
        navigate(`/AgencyRegisterRequest/edit/${id}`)
    }

    const handleAdd = () => {
        navigate(`/AgencyRegisterRequest/add`)
    }

    useEffect(() => {
        dispatch(fetchAgencyRegisterRequest())
    }, [dispatch])

    const rows = entities.map((entity, idCounter) => {
        idCounter += 1
        return { id: idCounter, ...entity }
    })

    const columns = [
        { field: 'agencyName', headerName: 'AgencyName', width: 200 },
        { field: 'firstName', headerName: 'FirstName', width: 200 },
        { field: 'lastName', headerName: 'LastName', width: 200 },
        { field: 'taxId', headerName: 'TaxId', width: 200 },
        { field: 'nPN', headerName: 'NPN', width: 200 },
        { field: 'writingCode', headerName: 'WritingCode', width: 200 },
        { field: 'userName', headerName: 'UserName', width: 200 },
        { field: 'password', headerName: 'Password', width: 200 },
        { field: 'secretImage', headerName: 'SecretImage', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 200 },
        { field: 'hasAcceptedEula', headerName: 'HasAcceptedEula', width: 200 },
        {
            field: 'Actions',
            width: 200,
            renderCell: (cellValues) => {
                return (
                    <>
                        <IconButton
                            onClick={() => {
                                handleEdit(cellValues.row.id)
                            }}
                            aria-label="Example"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                handleDelete(cellValues.row.id)
                            }}
                            aria-label="Example"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </>
                )
            },
        },
    ]
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Entities', path: '/AgencyRegisterRequest' },
                        { name: 'AgencyRegisterRequest' },
                    ]}
                />
            </div>

            <Button
                onClick={() => {
                    handleAdd()
                }}
                color="primary"
                variant="contained"
            >
                <Icon>add</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                    Add AgencyRegisterRequest
                </Span>
            </Button>

            <SimpleCard title="AgencyRegisterRequest">
                {loading ? (
                    <div
                        title="loading"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <CircularProgress className="progress" />
                    </div>
                ) : (
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                )}
            </SimpleCard>
        </Container>
    )
}

export default AgencyRegisterRequestList
