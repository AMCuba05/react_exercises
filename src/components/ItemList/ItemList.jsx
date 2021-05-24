import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/selectors";
import {useEffect} from 'react'
import Item from '../Item/Item'

const ItemList = () => {
  const allTodos = useSelector(getTodos);
    useEffect(() => {
        console.log(allTodos)
      return () => {
        console.log("item list is unmounting");
      };
    }, []);

    return(
        <ListGroup>
        {
          allTodos && allTodos.length > 0 ?
          allTodos.map((todo, index)=> <Item key={index} todo={todo} /> ) : null
        }
        </ListGroup>
    )
}

export default ItemList