import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './index.css'



class Landing1  extends Component {
    
    render() { 
        return ( 
            <div className='div1'>
                <Container>
                    <Row>
                        <Col>
                            <div className='div2'>
                                <h1 className='welcome1'>WELCOME</h1>
                            </div>
                            <div className='div3'>
                                <h5 className='welcome2'>Welcome</h5>
                            </div>                            
                        </Col>
                        <Col>
                            <img className='img'  alt='' src='https://res.cloudinary.com/nseabasi/image/upload/v1582646366/nnse/reactlogo_pvga1k.png' />
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Landing1 ;