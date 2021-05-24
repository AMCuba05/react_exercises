import {Card} from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import {ThemeContext} from '../../utils/themeContext'
import { useContext } from 'react'
import './TitleCard.css'

const TitleCard = ({title, }) => {

  const [theme] = useContext(ThemeContext)

  return(
    <Card className={theme === 'dark' ? 'card-dark' : 'card-light'} >
      {console.log(theme)}
      <Card.Body >
        <Card.Title style={{textAlign: 'left'}} >{title}</Card.Title>
        <ItemList />
      </Card.Body>
    </Card>
  )
}

export default TitleCard
