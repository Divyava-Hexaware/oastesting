import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { editAgencyRegisterRequest } from './store/AgencyRegisterRequest.action'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

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

const EditAgencyRegisterRequest = () => {
    const { id: AgencyRegisterRequestId } = useParams()

    const AgencyRegisterRequest = useSelector((state) =>
        state.AgencyRegisterRequest.entities.find(
            (AgencyRegisterRequest) =>
                AgencyRegisterRequest.id.toString() ===
                AgencyRegisterRequestId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [agencyName, setAgencyName] = useState(
        AgencyRegisterRequest.agencyName
    )
    const [firstName, setFirstName] = useState(AgencyRegisterRequest.firstName)
    const [lastName, setLastName] = useState(AgencyRegisterRequest.lastName)
    const [taxId, setTaxId] = useState(AgencyRegisterRequest.taxId)
    const [nPN, setNPN] = useState(AgencyRegisterRequest.nPN)
    const [writingCode, setWritingCode] = useState(
        AgencyRegisterRequest.writingCode
    )
    const [userName, setUserName] = useState(AgencyRegisterRequest.userName)
    const [password, setPassword] = useState(AgencyRegisterRequest.password)
    const [secretImage, setSecretImage] = useState(
        AgencyRegisterRequest.secretImage
    )
    const [email, setEmail] = useState(AgencyRegisterRequest.email)
    const [phone, setPhone] = useState(AgencyRegisterRequest.phone)
    const [hasAcceptedEula, setHasAcceptedEula] = useState(
        AgencyRegisterRequest.hasAcceptedEula
    )

    const handleAgencyName = (e) => setAgencyName(e.target.value)
    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handleTaxId = (e) => setTaxId(e.target.value)
    const handleNPN = (e) => setNPN(e.target.value)
    const handleWritingCode = (e) => setWritingCode(e.target.value)
    const handleUserName = (e) => setUserName(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleSecretImage = (e) => setSecretImage(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePhone = (e) => setPhone(e.target.value)
    const handleHasAcceptedEula = (e) => setHasAcceptedEula(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            editAgencyRegisterRequest({
                id: AgencyRegisterRequestId,
                agencyName,
                firstName,
                lastName,
                taxId,
                nPN,
                writingCode,
                userName,
                password,
                secretImage,
                email,
                phone,
                hasAcceptedEula,
            })
        )
        navigate('/AgencyRegisterRequest')
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'EditAgencyRegisterRequest',
                            path: '/AgencyRegisterRequest',
                        },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="text"
                                name="AgencyName"
                                id="agencyNameInput"
                                onChange={handleAgencyName}
                                value={agencyName}
                                validators={['required']}
                                label="AgencyName"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="FirstName"
                                id="firstNameInput"
                                onChange={handleFirstName}
                                value={firstName}
                                validators={['required']}
                                label="FirstName"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="LastName"
                                id="lastNameInput"
                                onChange={handleLastName}
                                value={lastName}
                                validators={['required']}
                                label="LastName"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="TaxId"
                                id="taxIdInput"
                                onChange={handleTaxId}
                                value={taxId}
                                validators={['required']}
                                label="TaxId"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="NPN"
                                id="nPNInput"
                                onChange={handleNPN}
                                value={nPN}
                                validators={['required']}
                                label="NPN"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="WritingCode"
                                id="writingCodeInput"
                                onChange={handleWritingCode}
                                value={writingCode}
                                validators={['required']}
                                label="WritingCode"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="UserName"
                                id="userNameInput"
                                onChange={handleUserName}
                                value={userName}
                                validators={['required']}
                                label="UserName"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Password"
                                id="passwordInput"
                                onChange={handlePassword}
                                value={password}
                                validators={['required']}
                                label="Password"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="SecretImage"
                                id="secretImageInput"
                                onChange={handleSecretImage}
                                value={secretImage}
                                validators={['required']}
                                label="SecretImage"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Email"
                                id="emailInput"
                                onChange={handleEmail}
                                value={email}
                                validators={['required']}
                                label="Email"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Phone"
                                id="phoneInput"
                                onChange={handlePhone}
                                value={phone}
                                validators={['required']}
                                label="Phone"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                value={hasAcceptedEula}
                                onChange={handleHasAcceptedEula}
                                select
                                id="hasAcceptedEulaInput"
                                label="HasAcceptedEula"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>send</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Save
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default EditAgencyRegisterRequest
