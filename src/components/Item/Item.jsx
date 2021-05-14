import { useState } from "react";
import { ListGroup } from "react-bootstrap";

const Item = ({variant, name}) => {
    const [check, setCheck] = useState(false)
    const handleCheck = () => setCheck(!check)
    return(
        <ListGroup.Item variant={variant} style={{textAlign: 'left'}} >
            <input type='checkbox'
                style={{marginRight: '5px'}}
                checked={check} 
                onChange={handleCheck} 
            />
            {name}
        </ListGroup.Item>
    )
}

export default Item