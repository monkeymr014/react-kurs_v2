import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
