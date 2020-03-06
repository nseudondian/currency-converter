import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './index.css'




class Landing3 extends Component {
    
    render() { 
        return ( 
            <div className='divland3'> 
                 <Container>
                    <Row>
                        <Col>
                            <div className='div300'>
                                <h1 className='h1'>ENTER DETAILS</h1>
                            </div>                         
                        </Col>
                        <Col>
                            <div className='div222'>
                                <form>
                                    <div>
                                        <label className='label1'>First Name</label>
                                        <input className='input' type='text' />
                                    </div>   
                                    <div>
                                        <label className='label'>Surname</label>
                                        <input className='input' type='text' />
                                    </div>
                                    <div>
                                        <label className='label'>Marital Status</label>
                                    </div> 
                                    <div>
                                        <select className='input'>
                                            <option>Married</option>
                                            <option>Single</option>
                                            <option>Engaged</option>
                                            <option>Divorced</option>
                                        </select>
                                    </div> 
                                    <div>
                                        <label className='label'>Address</label>
                                        <input className='input' type='text' />
                                    </div>   
                                </form>   
                            </div>       
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Landing3;