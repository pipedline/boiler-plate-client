import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';
import Button from '../../common/button/index';

const SubMenuBox = styled.div`
  order: 2;
`

const SubMenu = () => {
  const [login, setLogin] = useState(false);

  return (
    <SubMenuBox>
      {
        login
          ?
          <Avatar />
          :
          <Button color={'dark'}>
            로그인
          </Button>
      }
    </SubMenuBox>
  );
};

export default SubMenu;
