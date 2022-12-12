import styled from 'styled-components';

const Buttonicon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50%;
  border: none;
`;

export default Buttonicon;
