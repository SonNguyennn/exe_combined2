import React from 'react';
import '../assets/css/footer.css'
import { Col, Row } from 'antd';
import { EnvironmentFilled, PhoneFilled, MailFilled, FacebookFilled, InstagramFilled } from '@ant-design/icons';


const Footer = () => {
    return (
        <div className='footer'>
            <Row className='container'>
                {/* <Col span={6} className='footer-content'>
                    <div className='footer-item--title'>
                        ABOUT US
                    </div>
                    <p className='footer-item--text'>
                        Được thành lập vào cuối năm 2016 trong bối cảnh thời trang streetstyle dần nhen nhóm vào thị trường Việt Nam.
                        Sau 6 năm phát triển, SWE - Street Wear Eazy với slogan Young kids with a mission™ đã chiếm được tình cảm của
                        hầu hết các bạn trẻ yêu mến thời trang đường phố trên khắp cả nước.
                    </p>
                </Col> */}
                <Col span={8} className='footer-content'>
                    <div className='footer-item--title'>
                        CHÍNH SÁCH
                    </div>
                    <ul className='footer-list'>
                        <li>
                            <a href='/'>Chính sách bảo mật</a>
                        </li>
                        <li>
                            <a href='/'>Hướng dẫn mua hàng</a>
                        </li>
                        <li>
                            <a href='/'>Phương thức thanh toán</a>
                        </li>
                        <li>
                            <a href='/'>Chính sách giao nhận - vận chuyển</a>
                        </li>
                        <li>
                            <a href='/'>Chính sách đổi và bảo hành sản phẩm</a>
                        </li>
                    </ul>
                </Col>
                <Col span={8} className='footer-content'>
                    <div className='footer-item--title'>
                        HỆ THỐNG CỬA HÀNG DYNAMIX
                    </div>
                    <ul className='footer-list store-system'>
                        <li>
                            <div className='icon'>
                                <EnvironmentFilled />
                            </div>
                            <a href='/'>Store 1: 143C/18, Nguyễn Văn Cừ</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <EnvironmentFilled />
                            </div>
                            <a href='/'>Store 2: 143C/18, Nguyễn Văn Cừ</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <EnvironmentFilled />
                            </div>
                            <a href='/'>Store 3: 143C/18, Nguyễn Văn Cừ</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <EnvironmentFilled />
                            </div>
                            <a href='/'>số 600 Nguyễn Văn Cừ- Phường An Bình - Quận Ninh Kiều- Thành Phố Cần Thơ</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <PhoneFilled />
                            </div>
                            <a href='/'>0335 624 825</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <MailFilled />
                            </div>
                            <a href='/'>nguyenthanhson.19102003@gmail.com</a>
                        </li>
                    </ul>
                </Col>
                <Col span={8} className='footer-content'>
                    <div className='footer-item--title'>
                        FANPAGE
                    </div>
                    <FacebookFilled className='fb-icon ' />
                    <InstagramFilled className='fb-icon ' />
                </Col>
            </Row>
            <Row className='container footer-navigate' >
                <a href='/'>facebook</a>
                |
                <a href='/'>instagram</a>
            </Row>
            <Row className='footer-bottom'>
                Copyright © 2024 SWE (STREETWEAREAZY). Powered by Haravan
            </Row>
        </div>
    );
};

export default Footer;