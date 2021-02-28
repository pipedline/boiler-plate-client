import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import Button from '../../common/button/Button';
import Logo from '../../../assets/img/Logo.svg';
import Avatar from 'react-avatar';



const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;

  width: 100%;

  border: 1px solid #000;
`;

const MainMenu = styled.ul`
  //display: flex;
  display: none;
  justify-content: center;
  align-items: center;
`;

const MainMenuItem = styled.li`
`;

const MainItemLink = styled(NavLink)`
  display: block;

  padding: 0.5rem;
`;

const HeaderLogo = styled(Link)`
  display: block;
  width: 91px;
  height: auto;

  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;

  text-indent: -9999px;
`;


const Header = () => {
  const [login, setLogin] = useState(false);

  return (
    <HeaderContainer>
      <MainMenu>
        <MainMenuItem>
          <MainItemLink to={'/'}>
            홈
          </MainItemLink>
        </MainMenuItem>
        <MainMenuItem>
          <MainItemLink to={'/'}>
            브랜드
          </MainItemLink>
        </MainMenuItem>
        <MainMenuItem>
          <MainItemLink to={'/'}>
            랭킹
          </MainItemLink>
        </MainMenuItem>
        <MainMenuItem>
          <MainItemLink to={'/'}>
            남성
          </MainItemLink>
        </MainMenuItem>
        <MainMenuItem>
          <MainItemLink to={'/'}>
            여성
          </MainItemLink>
        </MainMenuItem>
        <MainMenuItem>
          <MainItemLink to={'/'}>
            유니섹스
          </MainItemLink>
        </MainMenuItem>
      </MainMenu>
      <HeaderLogo to={'/'}>
        Logo
      </HeaderLogo>
      {
        login
          ?
          <Avatar />
          :
          <Button color={'dark'}>
            로그인
          </Button>
      }
    </HeaderContainer>
  );
};

export default Header;
