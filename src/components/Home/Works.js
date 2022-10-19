import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Works = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>They provide stellar customer service. They are adaptable.</p>
                </div>
                <div className="contentHolder">
                    <Button size="large" onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>

                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    destroyOnClose={true} >

                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/Etnbq9DFWNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default Works;