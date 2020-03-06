import React, { Component } from 'react';
import Landing1 from './Landing1'
import Landing2 from './Landing2'
import Landing3 from './Landing3'
import Landing4 from './Landing4'


class MyApp extends Component {
    
    render() { 
        return ( 
            <div>
                 <Landing1 />
                 <Landing2 />
                 <Landing4 />
                 <Landing3 />
            </div>
           
         );
    }
}
 
export default MyApp;