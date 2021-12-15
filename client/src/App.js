import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import './App.css';
import Feed from './screens/Feed';
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
        <Switch>
          <Route path='/login'>
            <Login handleLogin = {handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/feed'>
            <Feed/>
          </Route>
          <Route path='/addRage'>
    
          </Route>
        </Switch>
    </div>
  );
}

export default App;
