import React from "react";
import ImgSlieder from "./ImgSlier";
import styled from 'styled-components'
import ListAt from "./ListAt";
import ListItem from './ListItem'
import { Link, NavLink } from 'react-router-dom'
function Content() {
    return (
        <BgrMain>
            <SileNav>
                <ImgSlieder />
                <ListAt />
                <Link to='/data'>
                    <ListItem
                        title='Recommended For You'
                        img1='/images/moonknight.jpg'
                        img2='/images/batman.jpg'
                        img3='/images/morbius.jpg'
                        img4='/images/luffy.jpg'
                    />

                    <ListItem
                        title='New to Disney+'
                        img1='/images/1.jpg'
                        img2='/images/2.jpg'
                        img3='/images/3.jpg'
                        img4='/images/4.jpg'
                    />
                    <ListItem
                        title='Originals'
                        img1='/images/disney1.jpg'
                        img2='/images/disney2.jpg'
                        img3='/images/disney3.jpg'
                        img4='/images/disney4.jpg'
                    />
                    <ListItem
                        title='Trending'
                        img1='/images/sw1.jpg'
                        img2='/images/sw2.jpg'
                        img3='/images/sw3.jpg'
                        img4='/images/sw4.jpg'
                    />
                </Link>
            </SileNav>
        </BgrMain>
    )
}
const BgrMain = styled.div`
background-image: url('/images/home-background.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
top: 70px;
padding: 0 calc(3.5vw + 5px);
overflow: hidden;
`
const SileNav = styled.div`
    min-height: 70vh;
`
export default Content