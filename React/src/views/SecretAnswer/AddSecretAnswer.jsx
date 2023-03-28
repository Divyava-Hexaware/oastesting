import { Breadcrumb, SimpleCard } from 'components'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addSecretAnswer } from './store/SecretAnswer.action'

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

const AddSecretAnswer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [questionId, setQuestionId] = useState('')
    const [answer, setAnswer] = useState('')

    const handleQuestionId = (e) => setQuestionId(parseInt(e.target.value))
    const handleAnswer = (e) => setAnswer(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            addSecretAnswer({
                questionId,
                answer,
            })
        )
        navigate('/SecretAnswer')
    }

    useEffect(() => {
        return () => {
            setQuestionId('')
            setAnswer('')
        }
    }, [])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'AddSecretAnswer', path: '/SecretAnswer' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="number"
                                name="QuestionId"
                                id="questionIdInput"
                                onChange={handleQuestionId}
                                value={questionId || ''}
                                validators={['required']}
                                label="QuestionId"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Answer"
                                id="answerInput"
                                onChange={handleAnswer}
                                value={answer}
                                validators={['required']}
                                label="Answer"
                                errorMessages={['this field is required']}
                            />
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

export default AddSecretAnswer
