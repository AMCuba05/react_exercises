import {Card} from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'

const TitleCard = ({title, data}) => {
    
    return(
    <Card style={{ width: '100%' }}>
        <Card.Body >
          <Card.Title style={{textAlign: 'left',}} >{title}</Card.Title>
          <ItemList data={data} />
        </Card.Body>
      </Card>
    )
}

export default TitleCard