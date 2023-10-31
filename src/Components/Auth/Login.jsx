import React from 'react'
import styled from 'styled-components'

const Login = () => {

    const MainContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    background: white;
    `;

    const Container = styled.section`
    height: 80vh;
    margin-left: 5em;
    width: 80%;
    display: flex;
    flex: wrap;
    flex-direction: row;
    align-self: center;
    margin-top: 3em;
    font-size: 1.5em;

    @media only screen and (max-width: 600px) {
        flex-direction: ${props => (props.Container ? props.Container: 'column')};
        margin-left: ${props => (props.Container ? props.Container : '0.5em' )};
        gap: ${props => (props.Container ? props.Container : '0.5em' )};
    }
    `;


    const Title = styled.h1`
    
    font-size: 1em;
    margin-top: 1em;
    color: black;
    align-self: center;

    `;

    const Graphic = styled.section`
    
    height: 60vh;
    width: 50%;
    display: flex;
    align-items: center;
    // border: 2px solid gray;
    background: white;
    
    
    @media only screen and (max-width: 600px) {
        width: ${props => (props.Graphic ? props.Graphic: '100%')}
    }

    `;

    const GraphicImg = styled.div`
    margin-top: 2em;
    width: 380px;
    hegiht: 400px;
    `;

    const Background = styled.img`
    
    `;



    const LoginBox = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: flext-start;
    width: 50%;
    height: 60vh;
    // background: teal;
    // border: 2px solid gray;
    padding: 2em;
    box-shadow: -4px 8px 8px 4px gray;
    

    @media only screen and (max-width: 600px) {
        width: ${props => (props.LoginBox ? props.LoginBox: '100%')}
    }
    `;

    const Form = styled.input`
    
    width: 100%;
    padding: 12px;
    border : 1px solid gray;
    border-radius: 3px;
    margin-top: 2em;
    margin: 0.5em;
    align-self: flex-start;
    
    
    &::focus {
    //    border: 2px solid black
    }

    `;

    const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    font-size: 0.5em;
    justify-content: space-between;
    
    `;

    const InnerContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    font-size: 0.5em;
    `;


    const Link = styled.a`
    color: #BF4F74;
    font-size: 1.5em;

    `;

    const Link2 = styled.a`
    color: #BF4F74;
    font-size: 1em;
    display: flex;
    align-self: center;
    `;

    const LoginButton = styled.button`
    display: flex;
    align-self: center;
    background: blue;
    padding: 0.25em 1em;
    color: white;
    width: auto;
    font-size: 0.75em;
    margin-top: 2em;
    border-radius: 8px;
    `;

    const Para = styled.p`
    font-size: 1.1em;
    align-self: center;
    margin-left: 11em;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
        margin-left: ${props => (props.Para ? props.para: '4em')}
    }
    `;

  return (
    <>
    <MainContainer>
    <Container>
        <Graphic>
            <GraphicImg>
                <Background src='https://www.shutterstock.com/shutterstock/photos/2155193207/display_1500/stock-vector-fluid-gradient-background-vector-cute-and-minimalist-style-posters-photo-frame-cover-with-pastel-2155193207.jpg' width='380px' height='400px' />
            </GraphicImg>
        </Graphic>
        <LoginBox>
            <Title>Log in</Title>
            <label style={{fontSize: '0.75em'}} htmlFor="email">Email</label>
            <Form  type='text' placeholder='Login ID' />
            <label style={{fontSize: '0.75em'}} htmlFor="password">Password</label>
            <Form type='password' placeholder='Password' />
            <InnerContainer>
                <div>
             <input type="checkbox" id='option1' name='option1' value='Remember me' />
             <label htmlFor="option1">Remember me</label> </div>
             <Link2 href='/'>Forgot-Password?</Link2>
             </InnerContainer>
             <InnerContainer2>
             <input type="checkbox" id='option2' name='option2' value='terms' />
             <label htmlFor="option2">Agree to <Link href='/' >terms & conditions</Link></label>
             </InnerContainer2>
             <LoginButton type='submit' >LogIn</LoginButton>
             <InnerContainer2>
             <Para>Don't Have An Account?? <Link2 href='/' style={{fontWeight: 'bold', fontSize: '1em'}}>Register Now</Link2> </Para> 
             </InnerContainer2>
             
        </LoginBox>
    </Container>
    </MainContainer>
      
    </>
  )
}

export default Login
