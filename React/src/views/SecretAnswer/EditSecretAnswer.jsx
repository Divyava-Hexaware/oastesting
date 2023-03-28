import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { editSecretAnswer } from './store/SecretAnswer.action'
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

const EditSecretAnswer = () => {
    const { id: SecretAnswerId } = useParams()

    const SecretAnswer = useSelector((state) =>
        state.SecretAnswer.entities.find(
            (SecretAnswer) =>
                SecretAnswer.id.toString() === SecretAnswerId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [questionId, setQuestionId] = useState(SecretAnswer.questionId)
    const [answer, setAnswer] = useState(SecretAnswer.answer)

    const handleQuestionId = (e) => setQuestionId(parseInt(e.target.value))
    const handleAnswer = (e) => setAnswer(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            editSecretAnswer({
                id: SecretAnswerId,
                questionId,
                answer,
            })
        )
        navigate('/SecretAnswer')
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'EditSecretAnswer', path: '/SecretAnswer' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Form">
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

export default EditSecretAnswer
