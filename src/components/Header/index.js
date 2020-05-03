import React from 'react';
import logo from '../../assets/svg/logo.svg';
import { HeaderDiv, Logo } from './style.js';
import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

export default function Header() {
  return (
    <HeaderDiv >
      <div className="header-top">
        <Logo src={logo} alt="Logo"/>
        <a className="signIn-btn">
          Sign In
        </a>
      </div>
      <div className="header-content">
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <div className="input-home">
          {/* <label htmlFor="email">Email</label> */}
          <input type="email" id="email" placeholder="Seu Email"/>
          <button>ASSINE A NETFLIX <Icon icon={ic_keyboard_arrow_right} size={37}/></button>
        </div>
      </div>
    </HeaderDiv>
  )
}