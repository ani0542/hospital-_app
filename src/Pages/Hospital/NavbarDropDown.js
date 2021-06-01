import React from 'react'
import { Form } from 'semantic-ui-react'

const SIZE = [
    { key: "Bangalore", value: "Bangalore", text: "Bangalore", },
    { key: "Hyderabad", value: "Hyderabad", text: "Hyderabad", },
    { key: "Pune", value: "Pune", text: "Pune", },
];


function NavbarDropDown() {
    return (
        <>
            <Form validate="false" size="large" className='pt-3'>
                <Form.Select
                    // label="Projects"
                    name="module"
                    required
                    search
                    selection
                    placeholder="Select Hospitals"
                    options={ SIZE }
                    // onChange={ ( e, ed ) => onChangeHandler( e, ed, "pid" ) }
                />
            </Form> 
        </>
    )
}

export default NavbarDropDown
