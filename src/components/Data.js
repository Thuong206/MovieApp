import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
function Data() {
    return (
        <div>
            <Container>
                <Wrap>
                    <img src='/images/logo.svg' />
                    <Icon>
                        <Div1>
                            <div>
                                <img src='/images/play-icon-black.png' />
                            </div>
                            Play
                        </Div1>
                        <Div2>
                            <div>
                                <img src='/images/play-icon-white.png' />
                            </div>
                            Trailer
                        </Div2>
                        <Div3>
                            <img src='/images/group-icon.png' />
                        </Div3>

                        <Div4>
                            <span>+</span>
                        </Div4>
                    </Icon>
                    <p>2022 • 1h 93m • Science, Action, Antihero, Action-Adventure</p>
                </Wrap>
                <div>
                    <h3>A former U.S. Marine, struggling with dissociative identity disorder, is granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.</h3>
                </div>
            </Container>
        </div>
    )
}
const Container = styled.div`
    background-image: url(/images/moonknight.jpg);
    background-size: cover;
    background-position: center;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;

    div h3{
        bottom: 0;
        position: absolute;
        line-height: 24px;
        color: rgba( 255,255,255, 0.8);
        margin: 10px 0 0 10px;
        letter-spacing: 2px;
        word-break: break-all;
        right: 10px;
    }
`
const Wrap = styled.div`
    width: 500px;
    float: left;    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        margin-top: 10vh;
    }
    @media (max-width: 768px){
        width: 50%;
    }
    p{
        margin: 10px 0 0 10px;
        @media (max-width: 768px){
            width: 200%;
        }
    }
`
const Icon = styled.div`
    display: flex;
    margin-top: 10vh;
    align-items: center;

    @media (max-width: 768px){
        margin-top: 15vh;
        width: 125vh;
    }
`
const Div1 = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    color: black;
    border-radius: 5px;
    height: 10vh;
    width: 20vh;
    &> div{
        margin-top: -58px;
    }
    img{
        object-fit: cover;
        object-position: center;
    }
    :hover{
        background-color: rgb(198, 198, 198);
        cursor: pointer;
    }
    @media (max-width: 768px){
        height: 8vh;
        width: 15vh;
    }
`
const Div2 = styled(Div1)`
    color: white;
    background-color: rgba(0, 0, 0, 0.0001);
    border: 1px solid rgb(249, 249, 249);
    width: 25vh;
`
const Div3 = styled.div`
    margin: 0 10px 0 20px;
    height: 8vh;
    width: 8vh;
    border: 2px solid;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        margin-top: 0;
    }
`
const Div4 = styled.div`
    margin: 0 10px;
    height: 8vh;
    width: 8vh;
    border: 2px solid;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    display: flex;

    span{
        font-size: 8vh;
        transform: translate(7.5px,-4px);
    }
    
    @media (max-width:768px){
        margin: 10px;
    }
`
export default Data