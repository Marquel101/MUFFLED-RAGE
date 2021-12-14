import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [user, setUser] = useState(null)
  const history = useHistory() 

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setUser(userData)
    }
    handleVerify()
  }, [])
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData)
    setUser(userData)
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData)
    setUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('authToken')
    removeToken()
  }

  return (
    <div className="App">
      <Layout 
      user = {user}
      handleLogout = {handleLogout}
      >
        <Switch>
          <Route path='/login'>
            <Login handleLogin = {handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
