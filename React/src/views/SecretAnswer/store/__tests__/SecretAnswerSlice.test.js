import store from 'store/store'
import {
    secretAnswerAdded,
    secretAnswerDeleted,
    secretAnswerUpdated,
} from '../secretAnswerSlice'

describe('testing secretAnswer redux store reducers', () => {
    test('add secretAnswer to store test', () => {
        let state = store.getState().secretAnswer
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            QuestionId: 82,
            Answer: 'Answer',
        }
        store.dispatch(secretAnswerAdded(initialInput))
        state = store.getState().secretAnswer
        expect(state.entities).toHaveLength(1)
    })

    test('update secretAnswer from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            QuestionId: 62,
            Answer: 'Answer',
        }
        store.dispatch(secretAnswerAdded(initialInput))
        let state = store.getState().secretAnswer
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
            QuestionId: 87,
            Answer: 'Answer',
        }
        store.dispatch(secretAnswerUpdated(updatedInput))
        state = store.getState().secretAnswer
        let changedSecretAnswer = state.entities.find((p) => p.id === 2)
        expect(changedSecretAnswer).toStrictEqual(updatedInput)
    })

    test('delete secretAnswer from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            QuestionId: 18,
            Answer: 'Answer',
        }
        store.dispatch(secretAnswerAdded(initialInput))
        let state = store.getState().secretAnswer
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            secretAnswerDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().secretAnswer
        expect(state.entities).toHaveLength(2)
    })
})
