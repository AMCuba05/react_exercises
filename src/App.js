import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './components/ItemList/ItemList'
import TitleCard from './components/TitleCard/TitleCard'
import './App.css'
import { useEffect, useState } from 'react'

const data = [
  { name: 'Edson', variant: 'danger' },
  { name: 'Carlos', variant: 'primary' },
  { name: 'Oscar', variant: 'success' }
]

function App() {
  const [display, setDisplay] = useState(true)
  const [title, setTitle] = useState('Title')
  const handleChecked = (e) => setDisplay(e.target.checked)

  useEffect(() => {
    console.log('app is mounting')
    setTimeout( () => setTitle('Another Title'), 1000)
    
  }, [])
  useEffect(() => {
    console.log('app is updating')
  }, [title])

  return (
    <div className="App">
      <TitleCard handleCheck={handleChecked} check={display} title={title} />
      {
        display ? <ItemList data={data} /> : null
      }
    </div>
  );
}

export default App;
