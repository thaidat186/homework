import React,{ useState} from'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

export default function FindManager ({findTest}){
    const[inputValue,setInputValue] = useState();

    const onChange = (event)=>{
        event.preventDefault()
        setInputValue(event.target.value)

    }

    const findTestFunc = (event) => {
       
        event.preventDefault();
        findTest(inputValue)
        console.log(inputValue)
    }



    return (<Container fluid>
        <Row >
            {/* <Col></Col> */}
            <Col sm={12}  >
                <Form>
                    <InputGroup>
                        <Col ><Form.Control onChange={(event)=>onChange(event)} type="text" /></Col>
                        <Col ><Button onClick={findTestFunc} variant="primary" type="submit"> Search </Button></Col>
                    </InputGroup>
                </Form>
            </Col>
            <Col></Col>
        </Row>
        <br/>
        </Container>
        
    )
}