import './App.css';
import Header from './components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Feed from './components/Content/Feed';
import UsersContainer from './components/Users/UsersContainer';
import UserPageContainer from './components/UserPage/UserPageContainer';
import Direct from './components/Direct/Direct';
import { connect } from 'react-redux';
import { authMe } from './redux/auth-reducer';
import React, { useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login'
import Error404 from './components/404/Error404';

const App = React.memo((props) => {

  useEffect(() => {
    props.authMe()
  }, [])

  return <>
    {props.auth.isLogined === null
      ? <Preloader />
      : <div id="main">
        <Header />
        <div className="container">
          <div className="row">
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/direct/*' element={<Direct />} />
              <Route path='/users/' element={<UsersContainer />} />
              <Route path='/profile/:userId' element={<UserPageContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/404' element={<Error404 />} />
              <Route path='/*' element={<Navigate to={'/404'} />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    }

  </>
})

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, { authMe })(App)