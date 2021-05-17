import { ListGroup } from "react-bootstrap";
import {useEffect} from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {

    useEffect(() => {
        console.log('item list is mounting')
      return () => {
        console.log("item list is unmounting");
      };
    }, []);

    return(
        <ListGroup>
        {
            data.map((item, index)=> <Item key={index} variant={'dark'} name={item.name} /> )
        }
        </ListGroup>
    )
}

export default ItemList