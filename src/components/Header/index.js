import React from "react"
import { Header, Items, Logo, NavMenu, Nav, ItemUl, UserImage } from "./styles"
import { Link } from "react-router-dom"
import LogoImg from "../../assets/img/Logo.png"
import EmptyProfile from "../../assets/img/empty_profile.jpg"

export default function index() {
  return (
    <Header>
      <Items>
        <Logo>
          <Link to={"/"}>
            <img src={LogoImg} alt="website logo" />
          </Link>
        </Logo>
        <NavMenu>
          <Nav>
            <ItemUl>
              <li>
                <Link to={"/"}> Home </Link>
              </li>
              <li>
                <Link to={"/recomendacoes"}>Recomendações</Link>
              </li>
              <li>
                <Link to={"/sobre"}>Sobre</Link>
              </li>
            </ItemUl>
          </Nav>
        </NavMenu>
        <UserImage>
          <Link to={"/user/"}>
            <img src={EmptyProfile} alt="website logo" />
          </Link>
        </UserImage>
      </Items>
    </Header>
  )
}
