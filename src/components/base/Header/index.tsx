import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { up } from 'styled-breakpoints';
import useToggle from '../../../lib/hooks/useToggle';
import Button from '../../common/button';
import Logo from '../../../assets/img/Logo.svg';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import Container from '../../common/box/Container';

const HeaderBox = styled.header`
  position: sticky;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
`;

const StyledContainer = styled(Container)`
  justify-content: space-between;

  padding: 0.5rem 1rem;

  ${up('md')} {
    padding: 0;
  }
`;

const MenuButton = styled(Button)`
  ${up('md')} {
    display: none;
  }
`;

const MenuButtonBurger = styled.div<{ open: boolean }>`
  position: relative;

  z-index: 1;

  width: 1.5rem;
  height: 0.2rem;

  background-color: #000;

  border-radius: 5px;

  transform: none;
  transition: all 100ms ease-in-out;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 0;

    width: 1.5rem;
    height: 0.2rem;

    background-color: #000;

    border-radius: 5px;
  }

  &:before {
    transform: translateY(-0.5rem);
  }

  &:after {
    transform: translateY(0.5rem);
  }

  ${({ open }) => open &&
  css`
            background-color: transparent;
            translateX(-9999px);

            &:before {
              background-color: #FFF;
              transform: rotate(45deg);
            }

            &:after {
              background-color: #FFF;
              transform: rotate(-45deg);
            }
          `
}
`;

const HeaderLogo = styled(Link)`
  display: block;
  width: 91px;
  height: auto;

  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;

  text-indent: -9999px;

  ${up('md')} {
    order: 0;
  }
`;


const Header = () => {
  const [open, setOpen] = useToggle(false);

  return (
    <HeaderBox>
      <StyledContainer>
        <MenuButton onClick={setOpen}>
          <MenuButtonBurger open={open} />
        </MenuButton>
        <MainMenu open={open} />
        <HeaderLogo to={'/'}>
          Logo
        </HeaderLogo>
        <SubMenu />
      </StyledContainer>
    </HeaderBox>
  );
};


export default Header;
