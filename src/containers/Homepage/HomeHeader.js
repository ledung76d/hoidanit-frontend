import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsFillCartDashFill } from "react-icons/bs"
import { FaUserPlus, FaUserCircle } from "react-icons/fa"
// import { FcMultipleSmartphones } from "react-icons/fc"
// import { AiOutlineMenuUnfold } from "react-icons/ai"
import './HomeHeader.scss'
import logoVT from '../../assets/images/logoVT.png'
import menulogo from '../../assets/images/menu.svg'

class HomeHeader extends Component {
    render() {
        return (
            <>
                <header className='header-upper py-3'>
                    <div className='container-xxl'>
                        <div className='row align-items-center'>
                            <div className='col-2'>
                                <h3>
                                    <Link to="/" className='text-white'>
                                        <img src={logoVT} className='img-fluid gap-15' style={{ width: "80px", height: "80px" }}></img>
                                    </Link>
                                </h3>
                            </div>
                            <div className='col-5'>
                                <div className="input-group">
                                    <input
                                        type="text" className="form-control py-2"
                                        placeholder="Tìm kiếm sản phẩm ở đây..."
                                        aria-label="Tìm kiếm sản phẩm ở đây..."
                                        aria-describedby="basic-addon2" />
                                    <span className="input-group-text p-3" id="basic-addon2">
                                        <BsSearch className='fs-6' />
                                    </span>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className='header-upper-links d-flex align-items-center justify-content-between '>
                                    <div>
                                        <Link className='d-flex align-items-center gap-10 text-white' to='/signup'>

                                            <FaUserPlus className=' d-flex align-items-center  text-white ' style={{ width: "50px", height: "50px" }} />
                                            <p className='mb-0'>
                                                <span className='text-white'>Đăng ký</span>
                                                <br />
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-center gap-10 text-white' to='/login'>
                                            <FaUserCircle className=' d-flex align-items-center gap-10 text-white' style={{ width: "50px", height: "50px" }} />
                                            <p className='mb-0'>
                                                <span className='text-white fs-50' >Đăng nhập</span>
                                                <br />
                                            </p>

                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                                            {/* <img src='/images/cart.svg' alt='cart' /> */}
                                            <BsFillCartDashFill className=' d-flex align-items-center gap-10 text-white' style={{ width: "50px", height: "50px" }} />

                                            <div className='d-flex flex-column gap-10'>
                                                <span className='badge bg-white text-dark'>0</span>
                                                <p className='mb-0'>0 VND</p>
                                            </div>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <header className='header-bottom py-3'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='menu-bottom d-flex align-items-center gap-30'>
                                    <div>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                {/* <AiOutlineMenuUnfold className=' d-flex align-items-center gap-10 text-white' style={{ width: "30px", height: "30px" }} /> */}
                                                <img src={menulogo} alt='' />
                                                <span className='me-5 d-inline-block'>Phân loại sản phẩm</span>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                                <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                                <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='menu-links'>
                                        <div className='d-flex align-items-center gap-15'>
                                            <NavLink to='/'>Trang chủ</NavLink>
                                            <NavLink to='/products'>Sản phẩm</NavLink>
                                            <NavLink to='/about'>Về chúng tôi</NavLink>
                                            <NavLink to='/blog'>Blogs</NavLink>
                                            <NavLink to='/contact'>Liên hệ</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
