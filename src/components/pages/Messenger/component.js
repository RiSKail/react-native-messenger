import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import { launchImageLibrary } from 'react-native-image-picker';

import CustomButton from '@/components/controls/Button'

import { setMessage } from '@/actions'
import { BUTTON_COLOR } from '@/themes'
import internalization from '@/internalization'

import { PageContainer } from './styles'

const Messenger = () => {
  const dispatch = useDispatch()
  const messagesStore = useSelector(state => state.messages)

  const onSend = useCallback((message = {}) => {
    dispatch(setMessage(message[0]))
  }, [])

  const chooseFile = (type) => {
    const options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert(internalization.camera_unavailable);
        return;
      } else if (response.errorCode == 'permission') {
        alert(internalization.permission);
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      dispatch(setMessage({
        _id: `${messagesStore.length + 1}`,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        image: response.uri,
      }))
    });
  };

  return (
    <PageContainer>
      <GiftedChat
        messages={messagesStore}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      <CustomButton
        onPress={() => chooseFile('photo')}
        title={internalization.photo}
        bgColor={BUTTON_COLOR} />
    </PageContainer>
  )
}

export default Messenger
