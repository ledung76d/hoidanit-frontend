import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import './Product.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import ReactStars from 'react-rating-stars-component';
import ip14prm from "../../assets/images/ip14promax.jpg";

class Product extends Component {

    render() {
        return (
            <>
                <HomeHeader></HomeHeader>
                <Meta title={"Liên hệ VT mobile"} />
                <div className='product-wrapper home-wrapper-2 py-5'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='filter-part mb-3'>
                                    <h3 className='filter-title'>
                                        Phân loại sản phẩm
                                    </h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li>Iphone</li>
                                            <li>Samsung</li>
                                            <li>Xiaomi</li>
                                            <li>Oppo</li>
                                            <li>Realme</li>
                                            <li>Vivo</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='filter-part mb-3'>
                                    <h3 className='filter-title'>Phân loại theo</h3>
                                    <div>
                                        <h5 className='sub-title'>Còn hàng/hết hàng:</h5>
                                        <div>
                                            <div className='form-check'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    value=""
                                                    id=''
                                                />
                                                <label className='form-check-label' htmlFor=''>
                                                    Còn hàng (1)
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    value=""
                                                    id=''
                                                />
                                                <label className='form-check-label' htmlFor=''>
                                                    Hết hàng (0)
                                                </label>
                                            </div>
                                        </div>
                                        <h5 className='sub-title'>Giá:</h5>
                                        <div className='d-flex align-items-center gap-10'>
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="from"
                                                />
                                                <label htmlFor="floatingInput">Từ</label>
                                            </div>

                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingInput1"
                                                    placeholder="to"
                                                />
                                                <label htmlFor="floatingInput1">Đến</label>
                                            </div>
                                        </div>
                                        <h5 className='sub-title'>Màu sắc:</h5>

                                        <h5 className='sub-title'>Kích thước màn hình:</h5>
                                        <div>
                                            <div className='form-check'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    value=""
                                                    id='color-1'
                                                />
                                                <label className='form-check-label' htmlFor='color-1'>
                                                    5.8 inches (2)
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    value=""
                                                    id='color-2'
                                                />
                                                <label className='form-check-label' htmlFor='color-2'>
                                                    6.1 inches (2)
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    value=""
                                                    id='color-3'
                                                />
                                                <label className='form-check-label' htmlFor='color-3'>
                                                    6.43" (2)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-part mb-3'>
                                    <h3 className='filter-title'>Tags sản phẩm</h3>
                                    <div>
                                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                Iphone
                                            </span>
                                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                Zfold 4
                                            </span>
                                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                Reno 8T
                                            </span>
                                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                Xiaomi 13
                                            </span>
                                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                Realme
                                            </span>
                                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                                Vivo V25
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='filter-part mb-3'>
                                    <h3 className='filter-title'>Sản phẩm gợi ý</h3>
                                    <div>
                                        <div className='suggest-products mb-3 d-flex'>
                                            <div className='w-50'>
                                                <img
                                                    src={ip14prm}
                                                    className='img-fluid'
                                                    alt='watch'
                                                />
                                            </div>
                                            <div className='w-50'>
                                                <h5>Day la san pham goi y cho ban</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <b>9.990.000 VND</b>
                                            </div>
                                        </div>
                                        <div className='suggest-products d-flex'>
                                            <div className='w-50'>
                                                <img
                                                    src={ip14prm}
                                                    className='img-fluid'
                                                    alt='watch'
                                                />
                                            </div>
                                            <div className='w-50'>
                                                <h5>Day la san pham goi y cho ban</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <b>9.990.000 VND</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-9">
                                <div className="filter-sort-grid mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-10">
                                            <p className="mb-0 d-block" style={{ width: "100px" }}>
                                                Sắp xếp theo:
                                            </p>
                                            <select
                                                name=""
                                                defaultValue={"manula"}
                                                className="form-control form-select"
                                                id=""
                                            >
                                                <option value="title-ascending">Từ A-Z</option>
                                                <option value="title-descending">Từ Z-A</option>
                                                <option value="price-ascending">Giá cao-thấp</option>
                                                <option value="price-descending">Giá thấp đến cao</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='list-product pb-5'>
                                    <div className='d-flex flex-wrap gap-10'>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className={"col-3"}>
                                            <Link to="/product/:id" className='product-card position-relative'>

                                                <div className='product-image'>
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                    <img src={ip14prm} className='img-fluid' alt='product image' />
                                                </div>

                                                <div className='product-details'>
                                                    <h6 className='brand'>
                                                        Havels
                                                    </h6>
                                                    <h5 className='product-title'>
                                                        Kids headphones bulk 10 packs multi colored for students
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value={4}
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p >
                                                        Sản phẩm có trong mình một diện mạo bắt mắt nhờ lối tạo hình vuông vức bắt trend
                                                        tương tự thế hệ iPhone 13 series, đây được xem là kiểu thiết kế rất thành công trên
                                                        các thế hệ trước khi tạo nên cơn sốt toàn cầu về kiểu dáng điện thoại cho đến nay.
                                                    </p>
                                                    <p className='price'>
                                                        5.000.000 VNĐ
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
