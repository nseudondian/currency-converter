import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './index.css'


class Landing2 extends Component {
    constructor(){
        super()
        this.state={
            age : ''

        }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            age : event.target.value
        })
    }
    render() { 
        return ( 
            <div className='div22'>
                <Container>
                    <Row>
                        <Col>
                            <div className='div221'>
                                <h1 className='h1'>{this.state.age}</h1>
                            </div>                         
                        </Col>
                        <Col>
                            <div className='div222'>
                                <form>
                                    <input value={this.state.age} onChange={this.handleChange} className='input' type='text' />
                                </form>   
                            </div>
                            <div className='div223'> 
                                <h1 className='h5' >Enter Your Age</h1>
                            </div>        
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Landing2;