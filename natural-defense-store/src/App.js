import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import styled from 'styled-components'
import Section from './Components/Section';
import { StylesProvider } from '@mui/styles';
import Grid from './Components/Grid';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import Atomy from './pages/Atomy';
import Vitamins from './pages/Vitamins'
import Order from './pages/Order';
import ResponsiveAppBar from './Components/Navigation';
import FullWidthTabs from './Components/Navigation2';
import Login from './pages/Login';
import Registration from './pages/Registration';
import EmailLogin from './pages/EmailLogin';
import { auth, handleUserProfile } from '../src/Firebase/utils'
import reactDom from 'react-dom';
import { render } from '@testing-library/react';

const initialState = {
  currentUser: null
}

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      ...initialState
    }
  }

  authListener = null

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({
        ...initialState
      })
    })
  }

  componentWillUnmount(){
    this.authListener()
  }

  render(){

    const { currentUser } = this.state
    return(
      //<StylesProvider injectFirst>
        <div style={{paddingBottom:'300px',background:'#A0F1F4', height:'100%'}}>
          <Banner/>
          {/* <FullWidthTabs/> */}
          <Router>
            
            <ResponsiveAppBar currentUser={currentUser}/>
            <Routes>
              <Route exact path='/naturaldefensestore' element={<Section currentUser={currentUser}/>} />
              <Route exact path='/atomy' element={<Atomy currentUser={currentUser}/>}/>
              <Route exact path='/vitamins' element={<Vitamins currentUser={currentUser}/>}/>
              <Route exact path='/order' element={<Order currentUser={currentUser}/>}/>
              <Route exact path='/login' element={<Login currentUser={currentUser}/>}>
                <Route exact path='' element={<Section currentUser={currentUser}/>}/>
              </Route>
              <Route exact path='/email-login' element={<EmailLogin currentUser={currentUser}/>}/>
              <Route exact path='/register' element={<Registration/>}/>
            </Routes>
          </Router>
      </div>
      // {/* </StylesProvider> */}
    )}
  }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
