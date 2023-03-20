import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { BsFacebook, BsYoutube, BsGithub, BsInstagram } from 'react-icons/bs'
import newsletter from '../../assets/images/newsletter.png'
import './Footer.scss'
class Footer extends Component {
    render() {
        return (
            <>
                <footer className='py-4'>
                    <div className='container-xxl'>
                        <div className='row align-items-center'>
                            <div className='col-5'>
                                <div className='footer-top-data d-flex gap-30 align-items-center'>
                                    <img src={newsletter} alt='newsletter' />
                                    <h2 className='mb-0 text-white'>Đăng ký để nhận thông tin mới nhất</h2>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className="input-group">
                                    <input
                                        type="text" className="form-control py-1"
                                        placeholder="Nhập email của bạn tại đây"
                                        aria-label="Nhập email của bạn tại đây"
                                        aria-describedby="basic-addon2" />
                                    <span className="input-group-text p-2" id="basic-addon2">
                                        Đăng ký
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className='py-4'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-4'>
                                <h4 className='text-white mb-4'>Liên hệ cửa hàng</h4>
                                <div>
                                    <address className='text-white fs-5'>Số 144 Xuân Thủy,<br />
                                        Cầu Giấy, Hà Nội <br />
                                        Mã bưu chính: 000084<br />
                                    </address>
                                    <a
                                        href='tel:0978569372'
                                        className='mt-3 d-block mb-1 text-white'>
                                        SĐT: 0978569372
                                    </a>
                                    <a
                                        href='mailto:19021371@vnu.edu.vn'
                                        className='mt-2 d-block mb-0 text-white'>
                                        Email: 19021371@vnu.edu.vn
                                    </a>
                                    <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                        <a className='text-white' href='https://www.facebook.com/Binhnonglanh48/'>
                                            <BsFacebook className='fs-4 ' />
                                        </a>
                                        <a className='text-white' href='https://www.instagram.com/dongphuong_201/'>
                                            <BsInstagram className='fs-4 ' />
                                        </a>
                                        <a className='text-white' href='https://github.com/Thuynv265/'>
                                            <BsGithub className='fs-4 ' />
                                        </a>
                                        <a className='text-white' href='https://www.youtube.com/'>
                                            <BsYoutube className='fs-4 ' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>
                                <h4 className='text-white mb-4'>Thông tin</h4>
                                <div className='footer-links d-flex flex-column'>
                                    <NavLink to='/privacy-policy' className='text-white py-2 mb-1 '>Bảo mật và điều khoản</NavLink>
                                    <NavLink to='/refund-policy' className='text-white py-2 mb-1 '>Chính sách đổi trả</NavLink>
                                    <NavLink to='/shipping-policy' className='text-white py-2 mb-1 '>Chính sách vận chuyển</NavLink>
                                    <NavLink to='/term-and-condition' className='text-white py-2 mb-1 '>Điều khoản dịch vụ</NavLink>
                                    {/* <Link className='text-white py-2 mb-1 '>Blogs</Link> */}
                                </div>
                            </div>
                            <div className='col-3'>
                                <h4 className='text-white mb-4'>Khác</h4>
                                <div className='footer-links d-flex flex-column'>
                                    {/* <Link className='text-white py-2 mb-1 '>Tìm kiếm</Link> */}
                                    <NavLink to="/about" className='text-white py-2 mb-1 '>Về chúng tôi</NavLink>
                                    <Link className='text-white py-2 mb-1 '>Faqs</Link>
                                    <NavLink to='/contact' className='text-white py-2 mb-1 '>Liên hệ</NavLink>
                                    {/* <Link className='text-white py-2 mb-1 '>Size chart</Link> */}
                                </div>
                            </div>
                            <div className='col-2'>
                                <h4 className='text-white mb-4'>Truy cập nhanh</h4>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1 '>Iphone</Link>
                                    <Link className='text-white py-2 mb-1 '>Samsung</Link>
                                    <Link className='text-white py-2 mb-1 '>Oppo</Link>
                                    <Link className='text-white py-2 mb-1 '>Xiaomi</Link>
                                    <Link className='text-white py-2 mb-1 '>Realme</Link>
                                    <Link className='text-white py-2 mb-1 '>Vivo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className='py-4'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <p className='text-center mb-0 text-white'>
                                    &copy; {new Date().getFullYear()}: Bản quyền thuộc về Nguyễn Văn Thủy - 19021371

                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
