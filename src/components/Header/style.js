import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpg';

export const HeaderDiv = styled.header`
  width: 100%;
  height: 90vh;
  position: relative;
  background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)), 
              url(${bgImage}) no-repeat center center/cover;

 
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background-color: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
  }
  .header-top {
    position: relative;
    height: 5rem;

  }
  .header-content {
    width: 50%;
    position:relative;
    margin: 8rem auto;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    > h1 {
      width: 75%;
      font-weight: 600;
      font-size: 50px;
      line-height: 1.1em;
    }
    >h2 {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.25em;
      margin: 1.2rem 0 1.875rem;
    }
    .input-home {
      
      width:100%;
      display: flex;
      justify-content:center;
      >input {
        border: 0;
        height: 60px;
        width: 60%;
        padding: 10px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
      }
      > button {
        cursor: pointer;
        font-size: 1.1rem;
        width: 40%;
        padding: 10px;
        color: #FFF;
        height: 60px;
        background-color: var(--main-red);
        border:1px solid #e50914;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        &:hover {
          background-color: var(--main-red-hover);
        }
      }
      > label {
        position: absolute;
        
        transform: translate(-550%, 100%);
        color: #333;
      }
    }
  }
`
export const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);

`