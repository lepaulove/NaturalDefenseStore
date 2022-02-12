import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Section from './Components/Section';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import Atomy from './pages/Atomy';
import Vitamins from './pages/Vitamins'
import Order from './pages/Order';
import ResponsiveAppBar from './Components/Navigation';
import Login from './pages/Login';
import Registration from './pages/Registration';
import EmailLogin from './pages/EmailLogin';
import { auth, handleUserProfile } from '../src/Firebase/utils'
import ForgotPassword from './pages/ForgotPaassword';
import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/User/user.actions';

// const initialState = {
//   currentUser: null
// }

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

class App extends Component{

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     ...initialState
  //   }
  // }

  authListener = null

  componentDidMount(){

    const { currentUser } = this.props

    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot =>{
          this.props.setCurrentUser({
            // currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            // }
          })
        })
      }
      this.props.setCurrentUser(userAuth)//({
      //   ...initialState
      // })
    })
  }

  componentWillUnmount(){
    this.authListener()
  }

  render(){

    const { currentUser } = this.props
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
              <Route exact path='/register' element={<Registration/>}>
                <Route exact path='' element={<Section currentUser={currentUser}/>}/>
              </Route>
              <Route exact path ='/password-reset' element={<ForgotPassword currentUser={currentUser}/>}/>
            </Routes>
          </Router>
      </div>
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
