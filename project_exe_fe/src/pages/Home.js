import React from 'react';
import '../assets/css/home.css';
import { Card, Carousel, Col, Rate, Row } from "antd";
import { TruckOutlined, CommentOutlined, DropboxOutlined, CreditCardOutlined } from '@ant-design/icons';
import Carousel1 from '../assets/images/carousel1.webp';
import Carousel2 from '../assets/images/carousel2.webp';
import ProductItem from '../components/product-item';

const Home = () => {

    return (
        <div>
            <Carousel arrows effect="fade">
                <img src={Carousel1} alt='' />
                <img src={Carousel2} alt='' />
            </Carousel>
            <Row className='container' style={{ margin: "15px auto", padding: "0 24px" }}>
                <Col span={6} className='service-item'>
                    <TruckOutlined className='service-icon' />
                    <h2 className='service-title'>Free shipping</h2>
                    <p>With orders from 500k or more</p>
                </Col>
                <Col span={6} className='service-item'>
                    <CommentOutlined className='service-icon' />
                    <h2 className='service-title'>24/7 support</h2>
                    <p>Online / offline support 24/7</p>
                </Col>
                <Col span={6} className='service-item'>
                    <DropboxOutlined className='service-icon' />
                    <h2 className='service-title'>Free returns</h2>
                    <p>Within 7 days</p>
                </Col>
                <Col span={6} className='service-item'>
                    <CreditCardOutlined className='service-icon' />
                    <h2 className='service-title'>Order online</h2>
                    <p>Hotline: 0335 624 825</p>
                </Col>
            </Row>
            {/* <div className='container'>
                <h2 className='home-item-title'>BEST-SELLING ITEMS</h2>
                <Row>
                    <ProductItem
                        img="https://product.hstatic.net/1000344185/product/1.1_64036a3bf99642a1bbde50dd46f9d05f_master.jpg"
                        name='NOMAD DENIM SHORTS - WASHED BLUE'
                        price='500,000₫'
                        originPrice='550,000₫'
                        rate={1}
                        discount='-9%'
                    />
                </Row>
            </div> */}
            <div className='container'>
                <h2 className='home-item-title'>FEEDBACK</h2>
                <Row className='grid-container'>
                    <div class="item1">
                        <img src='https://pos.nvncdn.com/29c4f1-30923/ps/20230805_AnpkXXe0uZ.png' alt='' />
                    </div>
                    <div class="item2">
                        <img src='https://cdnplaynutrition.b-cdn.net/wp-content/uploads/2013/08/IMG_20942-scaled.jpg' alt='' />
                    </div>
                    <div class="item3">
                        <img src='https://nugo.com/cdn/shop/files/ChurroLaunchCollectionMobile-min.png?v=1719516765&width=1500' alt='' />
                    </div>
                    <div class="item4">
                        <img src='https://wetrek.vn/pic/products/Thanh-nan_638240832675372626_HasThumb.jpg' alt='' />
                    </div>
                    <div class="item5">
                        <img src='https://verbenergy.co/cdn/shop/files/ccpb-hero.webp?v=1721929080' alt='' />
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Home;