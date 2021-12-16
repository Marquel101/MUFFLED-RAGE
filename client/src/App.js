import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import './App.css';
import Create from './screens/Create/Create';
import Edit from './screens/Edit/Edit';
import Feed from './screens/Feed/Feed';
import Login from './screens/Login/Login';
import MyPost from './screens/MyPost/MyPost';
import Register from './screens/Register/Register';
import Splash from './screens/Splash/Splash';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getPosts, postPost } from './services/posts';


function App() {
  const [user, setUser] = useState(null)
  const history = useHistory() 
  const [feed, setFeed] = useState([])
  

  useEffect(() => {
  const fetchFeed = async () => {
      const posts = await getPosts()
      setFeed(posts)
  }
  fetchFeed()
}, [])

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
    history.push('/feed')
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

  const handleCreate = async (post) => {
    const newPost = await postPost(post)
    setFeed((prevState) => [...prevState, newPost])
    history.push('/feed')
  }
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'> 
            <Splash user={user} handleLogout={handleLogout} />
          </Route> 
          <Route path='/login'>
            <Login user={user} setUser={setUser} handleLogin = {handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register user={user} setUser={setUser} handleRegister={handleRegister}/>
          </Route>
          <Route path='/feed'>
            <Feed user={user} handleLogout={handleLogout} feed = {feed} />
          </Route>
          <Route path='/newrage'>
            <Create user={user} handleLogout={handleLogout} handleCreate = {handleCreate}/>
          </Route>
          <Route path='/editrage/:id'>
            <Edit user={user} handleLogout={handleLogout} />
          </Route>
          <Route path='/myrage'>
            <MyPost user={user} handleLogout={handleLogout} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
