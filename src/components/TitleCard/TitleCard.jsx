import {Card} from 'react-bootstrap'

const TitleCard = ({handleCheck, check, title}) => {
    
    return(
    <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <label>Display List</label>
          <input type='checkbox'
            style={{marginLeft: '5px'}}
            checked={check} 
            onChange={handleCheck} 
          />
        </Card.Body>
      </Card>
    )
}

export default TitleCard