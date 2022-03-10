import React, { useEffect } from 'react';
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
import { connect, useSelector, useDispatch } from 'react-redux'
import { checkUserSession, setCurrentUser, signInSuccess } from './Redux/User/user.actions';
import UserAccount from './pages/UserAccount'
import WithAuth from './HigherOrderComponents/withAuth';
import Admin from './pages/Admin';
import WithAdminAuth from './HigherOrderComponents/withAdminAuth';
import AdminToolbar from './Components/AdminToolbar';

const App = props => {

  // const { setCurrentUser } = 
  const { currentUser } = useSelector(mapState)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

    return(
      //<StylesProvider injectFirst>
        <div style={{paddingBottom:'300px',background:'#A0F1F4', height:'100%'}}>
          
          {/* <FullWidthTabs/> */}
          <Router>
            <AdminToolbar />
            <Banner />
            <ResponsiveAppBar currentUser={currentUser} />
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
              <Route exact path ='my-account' element={
                <WithAuth>
                  <UserAccount currentUser={currentUser}/>
                </WithAuth>
              }/>
              <Route exact path ='/admin' element={<WithAdminAuth><Admin/></WithAdminAuth>}/>
              
              {/* <Route exact path = '/my-account' element={<UserAccount currentUser={currentUser}/>}/> */}
            </Routes>
          </Router>
      </div>
    )}

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

export default App
