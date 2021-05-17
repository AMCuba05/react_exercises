import { useContext } from 'react'
import {Form} from 'react-bootstrap'
import {ThemeContext, themes} from '../../utils/themeContext'

const Switch = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const toggleTheme = () => {
        theme === themes.dark ?
            setTheme(themes.light) : setTheme(themes.dark)
    }
    return (
    <Form style={{textAlign: 'right', paddingBottom: '10px', paddingRight: '10px'}} >
        <Form.Check 
            style={theme === themes.dark ? {color: '#EFF3F5'}: {color: '#2A3B47'}}
            checked={theme === themes.dark}
            onClick={toggleTheme}
            type="switch"
            label={'Dark mode'}
            id="disabled-custom-switch"
        />
    </Form>
    )
}

export default Switch