import React from 'react'
import styled from 'styled-components'

const Login = () => {

    const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: #fff;
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
    }
    `;


    const Title = styled.h1`
    
    font-size: 1em;
    margin-top: 1em;
    color: black;
    align-self: center;

    `;

    const Graphic = styled.section`
    
    height: 70vh;
    width: 50%;
    padding: 20px;
    // border: 2px solid gray;
    
    @media only screen and (max-width: 600px) {
        width: ${props => (props.Graphic ? props.Graphic: '100%')}
    }

    `;



    const LoginBox = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: flext-start;
    width: 50%;
    height: 70vh;
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
    padding: 8px;
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

    const InnerContainer3 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    font-size: 0.5em;
    align-items: center;
    width: 100%;
    `;

    const Link = styled.a`
    color: #BF4F74;
    font-size: 1.5em;

    `;

    const Link2 = styled.a`
    color: #BF4F74;
    font-size: 1em;
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

  return (
    <>
    <MainContainer>
    <Container>
        <Graphic>
            1
        </Graphic>
        <LoginBox>
            <Title>Log in</Title>
            <Form type='text' placeholder='Login ID' />
            <Form type='password' placeholder='Password' />
            <InnerContainer>
                <div>
             <input type="checkbox" id='option1' name='option1' value='Remember me' />
             <label htmlFor="option1">Remember me</label> </div>
             <Link2>Forgot-Password?</Link2>
             </InnerContainer>
             <InnerContainer2>
             <input type="checkbox" id='option2' name='option2' value='terms' />
             <label htmlFor="option2">Agree to <Link href='/' >terms & conditions</Link></label>
             </InnerContainer2>
             <LoginButton type='submit' >LogIn</LoginButton>
             <InnerContainer3>
             <small style={{fontSize: '1em'}}>Don't Have An Account</small><Link2 style={{fontWeight: 'bold', fontSize: '1.5em'}}>Register</Link2>
             </InnerContainer3>
             
        </LoginBox>
    </Container>
    </MainContainer>
      
    </>
  )
}

export default Login
