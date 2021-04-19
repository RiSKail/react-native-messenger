import styled from 'styled-components/native'

import {
  NORMAL_FONT,
  WHITE_COLOR,
  BUTTON_DISABLED_COLOR,
  EIGHT_UNIT,
  DOUBLE_UNIT,
  TRIPLE_UNIT,
} from '@/themes'

export const ButtonContainer = styled.TouchableOpacity`
  padding: ${DOUBLE_UNIT} ${TRIPLE_UNIT};
  border-radius: ${EIGHT_UNIT};
  background-color: ${props => (!props.disabled ? props.bgColor : BUTTON_DISABLED_COLOR)};
`

export const ButtonText = styled.Text`
  color: ${WHITE_COLOR};
  font-size: ${NORMAL_FONT};
  font-weight: bold;
  text-align: center;
`
