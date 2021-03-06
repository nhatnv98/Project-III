import React, { Component } from 'react';


class Navbars extends Component {
    render() {
        return (
            <>
                <div className="main" id="mySidebar">
                    
                        <div className="sidebar left ">
                            <div className="user-panel">

                                <div className="pull-left image">
                                    <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p> Quản lý học viên </p>
                                    <a href="/online"><i className="fa fa-circle text-success" />Trực tuyến</a>
                                </div>
                            </div>
                            <ul className="list-sidebar bg-defoult">
                                <li> <a href="/home"><i className="	fas fa-home" /> <span className="nav-label">Trang Chủ</span></a> </li>
                                <li> <a href="/" data-toggle="collapse" data-target="#dashboard" className="collapsed active"> <i className="fa fa-user" /> <span className="nav-label"> Người Dùng</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="dashboard">
                                        <li className="active"><a href="user">Danh Sách Người Dùng</a></li>
                                        {/* <li><a href="#">General</a></li>
                                        <li><a href="#">Buttons</a></li>
                                        <li><a href="#">Tabs &amp; Accordions</a></li>
                                        <li><a href="#">Typography</a></li>
                                        <li><a href="#">FontAwesome</a></li>
                                        <li><a href="#">Slider</a></li>
                                        <li><a href="#">Panels</a></li>
                                        <li><a href="#">Widgets</a></li>
                                        <li><a href="#">Bootstrap Model</a></li> */}
                                    </ul>
                                </li>
                               
                                <li> <a href="#" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fas fa-address-card" /> <span className="nav-label">Học Viên</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="products">
                                        <li className="active"><a href="/student"  >Thêm Học Viên</a></li>
                                        {/* <li><a href="/accountStudent">Tài Khoản Học Viên</a></li> */}
                                        {/* <li><a href="#">Buttons</a></li>
                                        <li><a href="#">Tabs &amp; Accordions</a></li>
                                        <li><a href="#">Typography</a></li>
                                        <li><a href="#">FontAwesome</a></li>
                                        <li><a href="#">Slider</a></li>
                                        <li><a href="#">Panels</a></li>
                                        <li><a href="#">Widgets</a></li>
                                        <li><a href="#">Bootstrap Model</a></li> */}
                                    </ul>
                                </li>
                                {/* <li> <a href="#"><i className="fa fa-laptop" /> <span className="nav-label">Grid options</span></a> </li> */}
                                <li> <a href="#" data-toggle="collapse" data-target="#tables" className="collapsed active"><i className="fas fa-chalkboard-teacher" /> <span className="nav-label">Giáo Viên</span><span className="fa fa-chevron-left pull-right" /></a>
                                    <ul className="sub-menu collapse" id="tables">
                                        <li><a href="/teacher"> Thêm Giáo Viên</a></li>
                                        {/* <li><a href= "/accountTeacher"> Tài Khoản Giáo Viên</a></li> */}
                                    </ul>
                                </li>
                                <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" className="collapsed active"><i className="fas fa-laptop-house" /> <span className="nav-label">Lớp Học</span><span className="fa fa-chevron-left pull-right" /></a>
                                    <ul className="sub-menu collapse" id="e-commerce">
                                        <li><a href="/class"> Thêm Lớp Học</a></li>
                                        {/* <li><a href> Products list</a></li>
                                        <li><a href>Product edit</a></li>
                                        <li><a href> Product detail</a></li>
                                        <li><a href>Cart</a></li>
                                        <li><a href> Orders</a></li>
                                        <li><a href> Credit Card form</a> </li> */}
                                    </ul>
                                </li>
                                
                                <li> <a href="/course"><i className="fa fa-newspaper-o" /> <span className="nav-label">Khóa Học</span></a> </li>
                                <li> <a href="/thoikhoabieu"><i className="fas fa-calendar-alt" /> <span className="nav-label">Thời Khóa Biểu</span> </a></li>
                                <li> <a href="/co"><i className="fa fa-pie-chart" /> <span className="nav-label">Hộp Thư</span> </a></li>
                                <li> <a href="/course"><i className="	fas fa-car" /> <span className="nav-label">Quản Lý Thiết Bị</span></a> </li>
                                <li> <a href="/co"><i className="fa fa-pie-chart" /> <span className="nav-label">Kho</span> </a></li>
                                <li> <a href="/nhanvien"><i className="fa fa-address-book" /> <span className="nav-label">Nhân Viên</span> </a></li>
                                <li> <a href="/co"><i className="fa fa-pie-chart" /> <span className="nav-label">Thu Học Phí</span> </a></li>

                            </ul>
                        </div>
                    
                </div>

            </>
        );
    }
}

export default (Navbars);