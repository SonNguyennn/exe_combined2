import { Image, Input, Button, Form, Typography, Space } from 'antd';
import React from 'react';
import qr from '../assets/images/qr.png';

const { TextArea } = Input;
const { Title, Text } = Typography;

const Contact = () => {
    const onFinish = (values) => {
        console.log('Form Values:', values);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <Title level={3}>Scan to Access the Calorie Calculator App</Title>
            <Text style={{ textAlign: 'center', color: '#6d6d6d', maxWidth: '400px' }}>
                Use your phone to scan this QR code and use this app for easy calorie tracking and nutrition management on the go.
            </Text>

            <div style={{ margin: '20px 0' }}>
                <Image src={qr} width={200} />
            </div>
        </div>
    );
};

export default Contact;
