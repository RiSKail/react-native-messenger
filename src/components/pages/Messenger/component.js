import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native'

import { setMessage } from '@/actions'
import { BG_GRADIENT_COLOR } from '@/themes'
import { PageContainer } from './styles'

const Messenger = () => {
  const dispatch = useDispatch()
  const messagesStore = useSelector(state => state.messages)

  const onSend = useCallback((message = {}) => {
    dispatch(setMessage(message[0]))
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messagesStore}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

export default Messenger
