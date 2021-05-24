import {useState, useContext} from 'react'
import {Form , Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import { ThemeContext } from '../../utils/themeContext'

const AddTodo = () => {
    const [input, setInput] = useState(undefined);
    const dispatch = useDispatch();
    const [theme] = useContext(ThemeContext)
  
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={theme === 'dark' ? {color: 'white'} : {color: 'black'}} >Add Task</Form.Label>
                <Form.Control style={theme === 'dark' ? {backgroundColor: '#2A3B47', borderColor: 'black', color: '#EFF3F5'} : {backgroundColor: '#EFF3F5'}}
                    type="text" placeholder="Add a task for today" onBlur={e => setInput(e.target.value)} />
            </Form.Group>            
            <Button variant={'success'} onClick={() => dispatch(addTodo(input))} >
                ADD
            </Button>
        </Form>
    )
}

export default AddTodo