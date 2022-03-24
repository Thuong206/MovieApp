import React from "react";
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
// import { auth, provider } from '../firebase.js'
function Header() {
    // const handleAuth = () => {
    //     auth.signInWithPopup(provider)
    //         .then((result) => {
    //             console.log(result)
    //         })
    //         .catch((error) => {
    //             alert(error.message)
    //         })
    // }
    return (
        <NavLogin>
            <NavLogo src='/images/logo.svg' />

            <Menu>
                <p>
                    <img src='/images/home-icon.svg' />
                    <a>HOME</a>

                </p>

                <p>
                    <img src='/images/search-icon.svg' />
                    <a>SEARCH</a>
                </p>

                <p>
                    <img src='/images/watchlist-icon.svg' />
                    <a>WATCHLIST</a>
                </p>

                <p>
                    <img src='/images/original-icon.svg' />
                    <a>ORIGINAL</a>
                </p>

                <p>
                    <img src='/images/movie-icon.svg' />
                    <a>MOVIES</a>
                </p>

                <p>
                    <img src='/images/series-icon.svg' />
                    <a>SERIES</a>
                </p>
            </Menu>


            <Link to='/home'>
                <BtnLogin
                // onClick={handleAuth}
                >
                    LOGIN
                </BtnLogin>
            </Link>
        </NavLogin>
    )
}
export default Header
const NavLogin = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #090b13;
    height: 12vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px 15px;
    z-index: 1;
`
const NavLogo = styled.img`
    cursor: pointer;
`
const BtnLogin = styled.button`
    border: none;
    outline: none;
    font-size: 2.85vh;
    padding: 0 20px;
    border: 1px solid white;
    background: none;
    color: white;
    border-radius: 4px;
    height: 6vh;
    margin-top: 1vh;
    cursor: pointer;
    transition: 0.25s;
    letter-spacing: 2px;

    :hover{
        background: white;
        color: #090b13;
        border: 1px solid #090b13;
    }
`
const Menu = styled.div`
    position: absolute;
    display: flex;
    left: 25vh;
    top: 30px;

    @media (max-width: 768px){
         display: none;
    }

    p{
        display: flex;
        align-items: center;
        margin: 0 10px;
        img{
            width: 4vh;
            cursor: pointer;
        }
        a{
            letter-spacing: 2px;
            cursor: pointer;
            font-size: 2.5vh;
            margin-left: 8px;
            position: relative;

            &:before{
                content:'';
                height: 2px;
                background: white;
                width: 0%;
                border-radius: 0 0 4px 4px;
                position: absolute;
                bottom: -5px;
                transition: 0.25s;
            }
        }
        :hover{
            opacity: 0.9;
            a:before{
                width: 100%;

            }
        }

    }
`