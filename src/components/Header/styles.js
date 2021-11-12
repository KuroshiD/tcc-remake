import styled, { css } from "styled-components"

const imageStyle = css`
  width: 80px;
  height: 80px;

  > a {
    > img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
  }
`
export const Header = styled.header`
  width: 100%;
  height: 70px;
  background: var(--primary);
  color: var(--white);
  z-index: 100;
  padding: 0 1.5rem;
`

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const Logo = styled.div`${imageStyle}`

export const NavMenu = styled.div`
  width: 500px;
`
export const Nav = styled.nav`
  width: 100%;
`
export const ItemUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > li {
    > a {
      cursor: pointer;
      border-radius: 3px;
      padding: 5px 8px;
      color: var(--white);
      &:hover {
        background: var(--gray);
        color: var(--primary);
      }
    }
  }
`
export const UserImage = styled.div`
  height: 50px !important;
  width: 50px !important;
  ${imageStyle}`;
;
