import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { up } from 'styled-breakpoints';
import {MdChevronRight} from 'react-icons/md';

const MainMenuContainer = styled.ul<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #000;

  transform: ${({ open }) => open ? css`translateX(0)` : css`translateX(-100%)`};
  transition: transform 300ms ease-in-out;

  ${up('md')} {
    position: static;

    flex-direction: row;
    
    width: auto;
    height: auto;
    
    background-color: transparent;

    transform: translateX(0);
    transition: none;
    
    order: 1;
  }
`;

const MainMenuItem = styled.li`
  width: 100%;

  ${up('md')} {
    width: auto;
  }
`;

const MainItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  
  width: 100%;
  
  padding: 1.5rem;

  color: #FFF;
  font-weight: 700;
  
  &:hover {
    border: 1px solid #000;
  }

  &.active {
    text-decoration: underline;
  }

  ${up('md')} {
    width: auto;
    color: #000;
  }
`;

interface MainMenuProps {
  open: boolean;
}

const MainMenu = ({ open }: MainMenuProps) => {
  return (
    <MainMenuContainer open={open}>
      <MainMenuItem>
        <MainItemLink
          to={'/'}
          activeClassName={'active'}
          exact={true}
        >
          홈
        </MainItemLink>
      </MainMenuItem>
      <MainMenuItem>
        <MainItemLink
          to={'/brand'}
          activeClassName={'active'}
          exact={true}
        >
          브랜드
        </MainItemLink>
      </MainMenuItem>
      <MainMenuItem>
        <MainItemLink
          to={'/ranking'}
          activeClassName={'active'}
          exact={true}
        >
          랭킹
        </MainItemLink>
      </MainMenuItem>
      <MainMenuItem>
        <MainItemLink
          to={'/male'}
          activeClassName={'active'}
          exact={true}
        >
          남성
        </MainItemLink>
      </MainMenuItem>
      <MainMenuItem>
        <MainItemLink
          to={'/female'}
          activeClassName={'active'}
          exact={true}
        >
          여성
        </MainItemLink>
      </MainMenuItem>
      <MainMenuItem>
        <MainItemLink
          to={'/unisex'}
          activeClassName={'active'}
          exact={true}
        >
          유니섹스
        </MainItemLink>
      </MainMenuItem>
    </MainMenuContainer>
  );
};

export default MainMenu;
