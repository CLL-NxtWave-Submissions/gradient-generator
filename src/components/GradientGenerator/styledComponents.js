import styled from 'styled-components'

export const GradientGeneratorBgContainer = styled.div`
  background-image: ${props =>
    `linear-gradient(to ${props.gradientDirection}, ${props.gradientColor1}, ${props.gradientColor2})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
  font-family: 'Roboto';
`

export const GradientGeneratorHeader = styled.h1`
  color: #ffffff79;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`

export const GradientDirectionSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const GradientGeneratorSubSectionText = styled.p`
  color: #ededed;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const GradientDirectionsList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const GradientColorSelectionContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const GradientColorPickersList = styled(GradientDirectionsList)`
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const GradientColorPickerContainer = styled.li`
  margin: 1rem;
`

export const GradientColorPicker = styled.input`
  border: 0.05rem solid #334155;
  margin: 0 1rem;
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.bgColor};
`

export const GradientGeneratorButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.4rem;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
`
