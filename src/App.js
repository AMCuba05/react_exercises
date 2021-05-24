import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeContext, themes} from './utils/themeContext'
import { Provider } from "react-redux";
import TitleCard from './components/TitleCard/TitleCard'
import Switch from './components/Switch/Switch'
import AddTodo from './components/AddTodo/AddTodo'
import store from './redux/store'
import './App.css'
import { useEffect, useState, useContext } from 'react'

function App() {
  const [title, setTitle] = useState('Title')
  const themeHook = useState(themes.dark)

 
  useEffect(() => {
    console.log('app is mounting')
    setTitle('To do list')
  }, [])
  
  useEffect(() => {
    console.log('app is updating')
  }, [title])

  return (
    <Provider store={store} >
      <ThemeContext.Provider value={themeHook} >
        <div className={themeHook[0] === 'dark' ? 'container-dark' : 'container-light'} >
          <div className="App">
            <Switch />
            <AddTodo />
            <TitleCard title={title}  />
          </div>
        </div>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default App;
