import React, { useState, } from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import { Button, Icon, Dropdown, } from "semantic-ui-react";
import '../App.css';
import styled from "styled-components";


const Navbar = (props) => {
  const [selection, setSelection] = useState('')

  const menuOptions = [
    { key: 1, text: 'Hats', value: 'Hats' },
    { key: 2, text: 'Stickers', value: 'Stickers' },
    { key: 3, text: 'Contact', value: 'Contact' },
    { key: 4, text: 'Register', value: 'Register' },
    { key: 5, text: 'Login', value: 'Login' },
  ]

  const handleChange = (e, { value, }, ) => setSelection(value)

  const userOptions = () => {
    switch (selection) {
      case 'Contact':
        setSelection('')
        props.history.push('/Contact')
        break;
      case "Register":
        setSelection('')
        props.history.push('/Register')
        break;
      case "Login":
        setSelection('')
        props.history.push('/login')
        break;
      case "Hats":
        setSelection('')
        props.history.push('/categories/2')
        break;
      case "Stickers":
        setSelection('')
        props.history.push('/categories/4')
        break;
      // case "":
      //   setSelection('')
      //   props.history.push('/')
      //   break;
      // case "":
      //   setSelection('')
      //   props.history.push('/')
      //   break;
    }
  }


  const rightNavItems = (auth) => {
    if (auth.user) {
      return (
        <>
          <header>
            <Nav>
              <h3>
                <div
                  style={cust}
                  name='logout'
                  onClick={() => auth.handleLogout(props.history)}
                />
              </h3>
            </Nav>
          </header>
        </>
      )
    } else {
      return (
        <>
          <Nav>
            <div>
              <Button style={cust}>
                <Link to='/login'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/login'} />
                  </h3>login
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/register' >
                  <h3 >
                    <div
                      active={props.location.pathname === '/register'}
                    />register
                  </h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/categories/2'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/categories/2'} />
                  </h3>Hats
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/categories/4'>
                  <h3>
                    <Nav
                      active={props.location.pathname === '/categories/4'} />
                  </h3>Stickers
                </Link>
              </Button>
            </div>
          </Nav>
        </>
      )
    }
  }
  return (
    <AuthConsumer>
      {auth => (
        <Nav>
          <div>
            <Button style={home}>
              <Link to="/">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/C510BAQEaODeG-ziDdQ/company-logo_200_200/0?e=2159024400&v=beta&t=aHik_r9QdKRvn_OC_Ng1e-O0G9f58i-DiHsgmu81FhI"
                    height="60"
                    width="60"
                    class="navbar"
                  >
                  </img> .SHOP( )
                </div>
              </Link>
            </Button>
          </div>
          <div>
            <div>
              <Button style={cust}>
                <Link to='/'>
                  <h3>
                    <Nav
                    //what are you adding on this button 
                    />
                    All products</h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/categories/1'>
                  <h3>
                    <Nav
                    //what are you adding on this button 
                    />
                    T-Shirts</h3>
                </Link>
              </Button>
              <Button style={cust}>
                <Link to='/categories/3'>
                  <h3>
                    <Nav
                    //what are you adding on this button 
                    />
                    Hoodies</h3>
                </Link>
              </Button>
              <Dropdown
                as="h3"
                placeholder='More'
                options={menuOptions}
                onChange={handleChange}
                value={selection}
                simple item
              />
              {selection != '' ? userOptions() : null}
              <Button style={cust}>
                <Link to="/Cart">
                  <h3>
                    <Icon name='cart arrow down'>
                    </Icon>Cart
                  </h3>
                </Link>
              </Button>
            </div>
          </div>
        </Nav>
      )}
    </AuthConsumer>
  )
}

const Nav = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  display: flex;
  color: black;
  fontSize: 30px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;

`
const cust = {
  paddingTop: '95px',
  backgroundColor: 'white',
  color: 'black',
  fontSize: '30px',
  justifyContent: 'right',
  direction: 'rtl',
  textAlign: 'right',
  flexStart: 'right',
  alignItems: 'right',
  position: 'right',
  positionRight: '100px',
  flex: 'right',
}

const home = {
  backgroundColor: 'white',
  paddingTop: '60px',
  paddingLeft: '85px',
  color: 'black',
  fontSize: '30px'
}

const left = {
  paddingleft: '350',

}

class Rend extends React.Component {
  valueRender = (element, value) => {
    if (!value) {
      return element;
    }
    const child = []
  }
}


export default withRouter(Navbar)

