import React, { Component } from 'react';

class AddmodalStudent extends Component {
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Thêm Học Viên
                    </button>
                    
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm Học Viên</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label">Tên Học Viên:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Tên Lớp:</label>
                                        <input type="text" className="form-control" id="role" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Ngày Tạo:</label>
                                        <input type="text" className="form-control" id="role" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Ngày Update:</label>
                                        <input type="text" className="form-control" id="role" />
                                    </div>
                                </form>

                            </div>
                            
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Thêm</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddmodalStudent;