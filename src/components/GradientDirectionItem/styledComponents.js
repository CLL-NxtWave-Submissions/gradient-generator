import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  background-color: #ffffff79;
  color: #1e293b;
  width: 20%;
  margin: 0.15rem;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
  @media (min-width: 768px) {
    width: 45%;
  }
`

export const GradientDirectionItemButton = styled.button`
  background: inherit;
  border: none;
  border-radius: 0.6rem;
  outline: none;
  cursor: pointer;
  padding: 1rem;
`
