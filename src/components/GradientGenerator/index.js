import {Component} from 'react'

import {
  GradientGeneratorBgContainer,
  GradientGeneratorHeader,
  GradientDirectionSelectionContainer,
  GradientGeneratorSubSectionText,
  GradientDirectionsList,
  GradientColorSelectionContainer,
  GradientColorPickersList,
  GradientColorPickerContainer,
  GradientColorPicker,
  GradientGeneratorButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

export default class GradientGenerator extends Component {
  state = {}
}
