import { SET_MESSAGES } from '@/constants'

export const setMessage = (value) => ({
  type: SET_MESSAGES,
  payload: value,
})
