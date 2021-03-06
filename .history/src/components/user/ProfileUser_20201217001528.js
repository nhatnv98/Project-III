import React, { Component } from 'react';

class ProfileUser extends Component {
    render() {
        return (
            <div>
                <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Chi Tiết <i className="bi bi-info-circle"></i>
                </button>
                
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-group">
                                            <label htmlFor="name" className="col-form-label">Tên Người Dùng:</label>
                                            <input type="text" name="name" className="form-control" id="name"  />
                                </div>
                                <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" id="email" name="email"  />
                                </div>
                                <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Vai Trò:</label>
                                            <input type="text" className="form-control" id="role" name="userRole"  />
                                </div>
                                <div className="form-group">
                                            <label htmlFor="password" className="col-form-label">Password:</label>
                                            <input type="password" className="form-control" id="password" name="password"  />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ProfileUser;