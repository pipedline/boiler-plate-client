import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import Index from '../../common/Button';
import Button from '../../common/Button';

const SubMenuContainer = styled.div`
  order: 2;
`

const SubMenu = () => {
  const [login, setLogin] = useState(false);

  return (
    <SubMenuContainer>
      {
        login
          ?
          <Avatar />
          :
          <Button color={'dark'}>
            로그인
          </Button>
      }
    </SubMenuContainer>
  );
};

export default SubMenu;
