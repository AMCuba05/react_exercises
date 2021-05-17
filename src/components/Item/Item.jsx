import { useState, useContext } from "react";
import {ThemeContext} from '../../utils/themeContext'
import { ListGroup } from "react-bootstrap";
import './Item.css'

const Item = ({variant, name}) => {

    const [check, setCheck] = useState(false)
    const handleCheck = () => setCheck(!check)
    const [theme] = useContext(ThemeContext)

    return(
        <ListGroup.Item variant={variant} className={theme === 'dark'? 'item-dark' : 'item-light'} >
            <input type='checkbox'
                style={{marginRight: '10px'}}
                checked={check} 
                onChange={handleCheck} 
            />
            {name}
        </ListGroup.Item>
    )
}

export default Item
