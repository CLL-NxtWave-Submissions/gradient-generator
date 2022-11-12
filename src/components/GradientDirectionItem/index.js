import {
  GradientDirectionItemContainer,
  GradientDirectionItemButton,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemData, isItemSelected, onDirectionItemSelection} = props
  const {value, displayText} = itemData

  const onDirectionButtonClick = () => onDirectionItemSelection(value)

  return (
    <GradientDirectionItemContainer isSelected={isItemSelected}>
      <GradientDirectionItemButton onClick={onDirectionButtonClick}>
        {displayText}
      </GradientDirectionItemButton>
    </GradientDirectionItemContainer>
  )
}

export default GradientDirectionItem
