import React, { Component } from 'react';
import { Container} from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './index.css'


class Landing4 extends Component {
    constructor(){
        super()
        this.state ={
            dollars : '',
            naira : 360,
            output : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event){
        this.setState({
            dollars : event.target.value
        })
    }
    
    handleClick(){
        let converted = this.state.dollars * this.state.naira
        this.setState({
            output : converted
        })
    }
    render(){ 
        return ( 
            <div className='divland4'>
                <Container>
                    <Row>
                        <Col className='col4'>
                            <div className='divto'>
                                Amount
                            </div>
                            <div>
                                <input className='input4' value={this.state.dollars} onChange ={this.handleChange} />                                
                                <h5 className='h55'>Dollars</h5>
                            </div>
                        </Col> 
                        <Col className='col4'>
                            <div className='divto'>
                                To 
                            </div>
                            <select className='naira' value={this.state.naira}>
                                        <option className='nnaira' value={this.state.naira}>naira</option>
                            </select>  
                        </Col>
                        <Col className='col4'>
                            <div>
                                <button type='submit' className='button4' onClick={this.handleClick}>Convert</button>
                            </div>                     
                        </Col>           
                    </Row>
                    <Row>
                        <Col className='col5'>
                            <div>
                                <button className='button5'>{this.state.output}</button>
                                <h5 className='h55'>Result</h5>
                            </div>
                        </Col>  
                    </Row>
                </Container>
                
            </div>
         );
    }
}
 
export default Landing4;