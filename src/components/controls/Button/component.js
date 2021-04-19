import React from 'react'
import pt from 'prop-types'

import { BUTTON_COLOR } from '@/themes'
import { ButtonContainer, ButtonText } from './styles'

const CustomButton = ({ onPress, bgColor, title, disabled }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor} disabled={disabled}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
)

CustomButton.propTypes = {
  onPress: pt.func.isRequired,
  bgColor: pt.string,
  title: pt.string,
  disabled: pt.bool,
}

CustomButton.defaultProps = {
  disabled: false,
  title: '',
  bgColor: BUTTON_COLOR,
}

export default CustomButton
