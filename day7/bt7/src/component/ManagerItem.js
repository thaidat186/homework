import { Alert } from "react-bootstrap";
import React,{ useState} from "react";
import { Button, Col, Container, Row, Modal ,} from "react-bootstrap";
import '../App.css';
import DoTest from "./DoTest"

export default function ManagerItem ({id,name,time,topic1,topic2,topic3,question}){
 
    const[showTest,setShowTest] = useState(false)
    const[showResult,setShowResult] = useState(false)

    const test = ()=>{
        setShowTest(true)
    }
    const result =()=>{
        if(showTest){
            setShowTest(false)

        }
        setShowResult(true)
    }
    

    

    return(
        <Container fluid >
           
                <Col className="border" sm={6} gap={4} >
                    <Alert.Link onClick={test} >{name}</Alert.Link>
                    <Row sm={6}>
                        <Col sm={8}><span>Time: {time}</span></Col>
                        <Col sm={4}>
                            <span>Question: {question}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}><Button variant="info" size="sm" sm={6}> {topic1} </Button></Col>
                        <Col sm={3}><Button variant="info" size="sm" sm={6}> {topic2}</Button></Col>
                        <Col sm={3}><Button variant="info" size="sm" sm={6}> {topic3}</Button></Col>
                    </Row>
                   
                </Col><br/>

                <Modal show={showTest} onHide={()=>setShowTest(false)}>
                        <Modal.Header closeButton>
                                {name}
                        </Modal.Header>
                        <Modal.Body>
                            <p>form</p>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button size="sm" className="col text-center" onClick={result}>Hoan Tat</Button>
                        </Modal.Footer>
                </Modal>
                <Modal show={showResult} onHide={()=>setShowResult(false)}>
                        <Modal.Header closeButton>
                                {name}
                        </Modal.Header>
                        <Modal.Body>
                            <p>You're Score : </p>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button  className="col text-center" onClick={()=>setShowResult(false)}>Hoan Tat</Button>
                        </Modal.Footer>
                </Modal>
                
  
            
        </Container>
        
    )
}
