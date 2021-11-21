import styled from 'styled-components';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export const Container = styled.footer`
  background: #111;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 30px;
  > p {
        justify-self: center;
  }
`;

export const CopyrightIcon = styled(AiOutlineCopyrightCircle)``
