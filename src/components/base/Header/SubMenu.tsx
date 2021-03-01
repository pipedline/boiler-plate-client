import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import Button from '../../common/button/index';

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
