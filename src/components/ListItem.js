import React from "react";
import styled from 'styled-components'
function ListItem({ title, img1, img2, img3, img4 }) {
    return (
        <Floor>
            <h3>{title}</h3>
            <Wrap>
                <div>
                    <Img src={img1} />
                </div>
                <div>
                    <Img src={img2} />
                </div>
                <div>
                    <Img src={img3} />
                </div>
                <div>
                    <Img src={img4} />
                </div>

            </Wrap>
        </Floor>
    )
}

const Floor = styled.div`
    padding: 5vh 0;
`
const Wrap = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    div{
        border-radius: 10px;
        border: 3px solid rgba(249, 249, 249, 0.5);
        overflow: hidden;
        cursor: pointer;
        transition: 0.2s;
        margin-right: 20px;
        width: 45vh;
        margin-top: 5px;
        height: 28vh;

        :hover{
            transform: scale(1.1);
            border: 3px solid rgba(249, 249, 249, 1);
        }
    }

`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`
export default ListItem