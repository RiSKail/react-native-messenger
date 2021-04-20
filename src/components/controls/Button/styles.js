import styled from 'styled-components/native'

import {
  NORMAL_FONT,
  WHITE_COLOR,
  BUTTON_DISABLED_COLOR,
  DOUBLE_UNIT,
  SINGLE_UNIT,
  TRIPLE_UNIT,
} from '@/themes'

export const ButtonContainer = styled.TouchableOpacity`
  margin: ${SINGLE_UNIT} ${TRIPLE_UNIT};
  padding: ${SINGLE_UNIT};
  border-radius: ${DOUBLE_UNIT};
  background-color: ${props => (!props.disabled ? props.bgColor : BUTTON_DISABLED_COLOR)};
`

export const ButtonText = styled.Text`
  color: ${WHITE_COLOR};
  font-size: ${NORMAL_FONT};
  font-weight: bold;
  text-align: center;
`
