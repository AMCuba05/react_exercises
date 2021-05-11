import Item from '../src/components/Item'
import './App.css';

const data = [
  { name: 'Edson', color: 'red' },
  { name: 'Carlos', color: 'blue' },
  { name: 'Oscar', color: 'green' }
]

function App() {
  return (
    <div className="App">
      {
        data.map((item, index)=> <Item key={index} item={item} /> )
      }
    </div>
  );
}

export default App;
