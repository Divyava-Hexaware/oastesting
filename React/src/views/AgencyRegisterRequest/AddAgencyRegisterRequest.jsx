import { Breadcrumb, SimpleCard } from 'components'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAgencyRegisterRequest } from './store/AgencyRegisterRequest.action'

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

const AddAgencyRegisterRequest = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [agencyName, setAgencyName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [taxId, setTaxId] = useState('')
    const [nPN, setNPN] = useState('')
    const [writingCode, setWritingCode] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [secretImage, setSecretImage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [hasAcceptedEula, setHasAcceptedEula] = useState('')

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
            addAgencyRegisterRequest({
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

    useEffect(() => {
        return () => {
            setAgencyName('')
            setFirstName('')
            setLastName('')
            setTaxId('')
            setNPN('')
            setWritingCode('')
            setUserName('')
            setPassword('')
            setSecretImage('')
            setEmail('')
            setPhone('')
            setHasAcceptedEula('')
        }
    }, [])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'AddAgencyRegisterRequest',
                            path: '/AgencyRegisterRequest',
                        },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Form">
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
                        <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Add
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default AddAgencyRegisterRequest
