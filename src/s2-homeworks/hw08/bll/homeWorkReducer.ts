import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sortedState = state.sort((a: UserType, b: UserType) => {
                if(a.name < b.name) {
                    return -1
                }
                if(a.name > b.name) {
                    return 1
                }
                return 0
            })
            if(action.payload === 'up') {
                return sortedState;
            } else if(action.payload === 'down') {
                return sortedState.reverse();
            }
            return sortedState;
        }
        case 'check': {
            return state.filter((u: UserType) => u.age > 18).sort() // need to fix
        }
        default:
            return state
    }
}
