import React, { Component } from 'react';
import HomePage from '../HomePage';
import FormSearchStudent from './FormSearchStudent';
class PageStudent extends Component {
    render() {
        return (
            <>
             <HomePage/>
               <div className="container">
                
              <div class="card bg-primary text-white">
                  <div class="card-body">DANH SÁCH HỌC VIÊN</div>
              </div>
                <FormSearchStudent>
                    
                </FormSearchStudent>
               </div>

            </>
        );
    }
}

export default PageStudent;