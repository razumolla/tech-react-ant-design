import React from 'react';

import { Row, Col } from 'antd';

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Performance',
        content: "Your path to digital transformation is unique to your business. From design to implementation, our services help you thrive in today's dynamic environment.",
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Flat Design',
        content: "Flat design employs a distinct two-dimensional style that is simply flat.Every element or box, from image frames to buttons to navigational tools, is crisp and lacks feathered edges or shadows.",
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Simplified Workflow',
        content: "The simplified workflow allows project administrators to add status. If you move to a new workflow by creating new schemes, you will disable that function. Your boss has given you admin rights.",
    },
];

const About = () => {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Independent Software Vendors & Cloud Solutions Provider</p>
                </div>
                <div className="contentHolder">
                    <p>They provide stellar customer service. They are adaptable. They have good internal communication. They have a customer-centric approach. You are a technology company if you are in the business of selling technology- if you make money by selling applied scientific knowledge that solves a concrete problem.It's generally a company whose primary business is selling tech or tech services</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default About;