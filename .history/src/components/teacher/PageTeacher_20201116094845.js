import React, { Component } from 'react';
import FormSearchTeacher from './FormSearchTeacher';

class PageTeacher extends Component {
    render() {
        return (
           
                <>
                <div className="container">
                        <div>
                        <button type="button" className="btn btn-primary"> < GrAdd/> Thêm giáo viên </button>
                        </div><br/>
                    <div class="card bg-primary text-white">
                        <div class="card-body">DANH SÁCH GIÁO VIÊN</div>
                    </div>
                    <FormSearchTeacher>

                    </FormSearchTeacher>
                    <
                </div>

                </>
           
        );
    }
}

export default PageTeacher;