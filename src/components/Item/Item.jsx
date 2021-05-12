import { ListGroup } from "react-bootstrap";

const Item = ({variant, name}) => 
    <ListGroup.Item variant={variant}>{name}</ListGroup.Item>

export default Item