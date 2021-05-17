import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeContext, themes} from './utils/themeContext'
import TitleCard from './components/TitleCard/TitleCard'
import Switch from './components/Switch/Switch'
import './App.css'
import { useEffect, useState } from 'react'

const data = [
  { name: 'Edson', variant: 'danger' },
  { name: 'Carlos', variant: 'primary' },
  { name: 'Oscar', variant: 'success' }
]

function App() {
  const [title, setTitle] = useState('Title')
  const themeHook = useState(themes.light)
 
  useEffect(() => {
    console.log('app is mounting')
    setTimeout( () => setTitle('Another Title'), 1000)
  }, [])
  
  useEffect(() => {
    console.log('app is updating')
  }, [title])

  return (
    <ThemeContext.Provider value={themeHook} >
      
      <div className={themeHook[0] === 'dark' ? 'container-dark' : 'container-light'} >
        <div className="App">
          <Switch />
          <TitleCard title={title} data={data} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
