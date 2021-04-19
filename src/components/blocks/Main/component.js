import React from 'react'
import pt from 'prop-types'

import { TextStyles } from './styles'

const Main = ({ text }) => {
  return (
    <TextStyles>
      {text}
    </TextStyles>
  )
}

Main.propTypes = {
  text: pt.string,
}

export default Main
