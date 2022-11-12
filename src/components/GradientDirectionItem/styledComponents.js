import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #1e293b;
  width: 45%;
  margin: 0.2rem;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
  @media (min-width: 768px) {
    width: 20%;
  }
`

export const GradientDirectionItemButton = styled.button`
  background: inherit;
  border: none;
  border-radius: 0.6rem;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`
