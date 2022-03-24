import React, { useState } from "react";
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
function Login() {

    const [show, setShow] = useState(false)
    const [ip, setIp] = useState('')
    return (
        <Container>
            {
                show &&
                <Modal>
                    <h2>Login</h2>
                    <div>user: admin1 <br /> password: admin1</div>
                    <label for="uname"><b>Username</b></label>
                    <input type="email" value='admin1' />
                    <div>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" />
                    </div>
                    <div>
                        <button type="submit" onClick={() => setShow(!show)}>Login</button>
                    </div>
                </Modal>

            }

            <Content>

                <Centre>
                    <HeadCentre src='/images/cta-logo-one.svg' />
                    <Btn onClick={() =>
                        setTimeout(() => {
                            setShow(!show)
                        }, 2000)
                    }>
                        GET ALL THERE
                    </Btn>
                    <TextCentre>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                    </TextCentre>
                    <FooterCentre src='/images/cta-logo-two.png' />
                </Centre>
                <Bgr />
            </Content>
        </Container>
    )
}
const Modal = styled.div`
                background-color: white;
                position: fixed;
                top: 50%;left:50%;
                z-index: 10;
                color: black;
                border-radius: 10px;
                padding:10px 20px;transform:translate(-50%, -50%);

                div{
                    margin: 20px 0;
                }
                button{
                    font-size: 30px;
                }
                `
export default Login
const Container = styled.section`
                display: flex;
                align-items: center;
                flex-direction: column;
                height: 100vh;

                `
const Bgr = styled.div`
                z-index: -1;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-position: center;
                background-size: cover;
                background-image: url('/images/login-background.jpg');

                `
const Content = styled.div`
                width: 100%;
                position: relative;
                min-height: 100vh;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 80px 40px;
                height: 100%;

                `
const Centre = styled.div`
                margin-bottom: 10vh;
                `
const HeadCentre = styled.img`
                width: 100%;
                max-width: 600px;
                `
const Btn = styled.button`
                color: white;
                border: none;
                outline: none;
                width: 100%;
                background-color: #0063e5;
                padding: 20px 0px;
                font-size: 20px;
                border-radius: 5px;
                cursor: pointer;
                max-width: 600px;
                font-weight: bold;
                :active{
                    opacity: 0.8;
    }
                `
const TextCentre = styled.div`
                color: hsla(0, 0%, 95.3%, 1);
                font-size: 11px;
                margin: 12px 0;
                line-height: 1.5;
                letter-spacing: 1.5px;
                max-width: 600px;
                `
const FooterCentre = styled.img`
                width: 100%;
                max-width: 600px;
                `
