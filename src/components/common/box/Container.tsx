import styled from 'styled-components';
import {up} from 'styled-breakpoints';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  max-width: 540px;
  
  margin-left: auto;
  margin-right: auto;
  
  ${up('md')} {
    max-width: 720px;
  }

  ${up('lg')} {
    max-width: 960px;
  }

  ${up('xl')} {
    max-width: 1140px;
  }
`;

export default Container;
