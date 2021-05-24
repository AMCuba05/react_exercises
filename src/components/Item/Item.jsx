import { useState, useContext } from "react";
import {ThemeContext} from '../../utils/themeContext'
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions";
import './Item.css'

const Item = ({todo}) => {
    const dispatch = useDispatch();
    const handleCheck = () => dispatch(toggleTodo(todo.id))
    const [theme] = useContext(ThemeContext)

    return(
        <ListGroup.Item className={theme === 'dark'? 'item-dark' : 'item-light'} >
            <input type='checkbox'
                style={{marginRight: '10px'}}
                checked={todo.completed} 
                onChange={handleCheck} 
            />
            {todo.content}
        </ListGroup.Item>
    )
}

export default Item
