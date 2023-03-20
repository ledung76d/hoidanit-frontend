import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsFillCartDashFill } from "react-icons/bs"
import { FaUserPlus, FaUserCircle } from "react-icons/fa"

import Meta from '../../components/Meta'
import './About.scss'
import logoIphone from '../../assets/images/logoIphone.jpg'
import logoOppo from '../../assets/images/logoOppo.jpg'
import logoRealme from '../../assets/images/logoRealme.png'
import logoSamsung from '../../assets/images/logoSamsung.jpg'
import logoVivo from '../../assets/images/logoVivo.jpg'
import logoXiaomi from '../../assets/images/logoXiaomi.jpg'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';

class About extends Component {
    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                <Meta title={"Về cửa hàng"} />
                <section id="about" className="py-16">
                    <div className="container my-3 py-3">
                        <h1 className="text-center">Về chúng tôi</h1>
                        <hr />
                        <p className="lead ">
                            -VTmobile là một chuỗi các cửa hàng cung cấp và bán các sản phẩm điện thoại di động trong phạm vi cả nước, hợp tác kinh doanh hiệu quả với nhiều Công ty và thương hiệu lớn trên thế giới.
                            <br></br>
                            -Với triết lý " Chắc chắn cho tương lai", chúng tôi luôn hướng tới mục tiêu
                            phát triển bền vững cho chính Công ty và cho khách hàng của mình.Chất lượng quốc tế cho người Việt Nam
                            <br></br>
                            -Giá trị này dẫn dắt sự thành công của VT mobile tại nhiều quốc gia trên toàn cầu và cũng là động lực,
                            niềm tự hào cho đội ngũ VT mobile Việt Nam cùng nỗ lực vì cuộc sống dễ dàng và tốt đẹp hơn cho người Việt.
                            <br></br>
                            -Kinh doanh có trách nhiệm:
                            <br></br>
                            -Chúng tôi tin rằng một doanh nghiệp lớn mạnh luôn cần sự chung sức và đồng hành của tập thể gồm đối tác,
                            nhân viên và cộng đồng và cũng là giá trị mà chúng tôi cân nhắc cho sự phát triển bền vững của VT mobile.
                            -VT mobile được thành lập năm 2023 dưới tên gọi C.S, có trụ sở tại Hà Nội (VN). Khởi đầu là một đại lý điện thoại nhỏ, sau đó VT đã nhanh chóng mở rộng thêm các chi nhánh trên phạm vi toàn quốc.
                            Tại thời điểm đó, ý tưởng kinh doanh mới này đáp ứng đúng nhu cầu khách hàng, là tiền đề cho khái niệm bán lẻ tiện lợi

                        </p>

                        <h2 className="text-center py-4">Các hãng điện thoại mà VT mobile hiện đang phân phối và bán lẻ:</h2>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoIphone} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><br />Iphone</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoSamsung} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Samsung</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoOppo} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><br /><br /><br /><br /><br /><br /><br />Oppo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoXiaomi} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Xiaomi</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoRealme} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Realme</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3 px-3">
                                <div className="card h-100">
                                    <img className="card-img-top img-fluid" src={logoVivo} alt="" height={160} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Vivo</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
