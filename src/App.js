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
  const [title, setTitle] = useState('Title')

  useEffect(() => {
    console.log('app is mounting')
    setTimeout( () => setTitle('Another Title'), 1000)
    
  }, [])
  useEffect(() => {
    console.log('app is updating')
  }, [title])

  return (
    <div className="App">
      <TitleCard title={title} data={data} />
    </div>
  );
}

export default App;
