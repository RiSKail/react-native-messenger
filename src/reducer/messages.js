import { SET_MESSAGES } from '@/constants'

const initialState = [{
  _id: 1,
  text: 'Hello developer',
  createdAt: new Date(),
  user: {
    _id: 2,
    name: 'React Native',
    avatar: 'https://placeimg.com/140/140/any',
  },
}]

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return [
        action.payload,
        ...state,
      ]

    default:
      return state
  }
}

export default messagesReducer
