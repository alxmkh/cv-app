import React, { useState } from 'react';
import "antd/dist/antd.css";
import {Steps, Button, message, Layout} from 'antd';
import {GeneralInfo} from './Components/General/GeneralInfo';
import {EducationInfo} from './Components/Education/EducationInfo';
import {PracticalExperienceInfo} from "./Components/Practical/PracticalExperienceInfo";
import {Result} from "./Components/Result/ResultInfo";
import {Col} from "antd/lib/grid";

const {Step} = Steps;
const {Header, Content, Footer} = Layout;

const Main: React.FC = React.memo(() => {
    const [isSaved, setSaved] = useState(false);
    const steps = [
        {
            title: 'General Info',
            content: <GeneralInfo/>,
        },
        {
            title: 'Education Experience',
            content: <EducationInfo/>,
        },
        {
            title: 'Practical Experience',
            content: <PracticalExperienceInfo/>,
        },

    ];

    const result = {
        title: 'Result',
        content: <Result/>,
    }

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const whenComplete = () => {
        message.success('Processing complete!')
        //isSaved = true
        setSaved(true);
        console.log('whenComplete: ' + isSaved)
    }

    const whenEdit = () => {

        setSaved(false);
    }

    return (
        <>
            {console.log('startApp: ' + isSaved)}
            <Layout>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <h1 style={{
                        color: 'White',
                        textAlign: 'center',
                        fontVariant: 'tabular-nums',
                        fontSize: '25px'
                    }}>Curriculum vitae</h1>
                </Header>

                <Content className="site-layout" style={{padding: '0 50px', marginTop: 80}}>
                    {isSaved ?
                        <>
                            <Col span={12} offset={12} style={{paddingBottom: 24}}>
                                <Steps current={current}>
                                    <Step key={result.title} title={result.title}/>
                                </Steps>
                            </Col>
                            <div className="steps-content" style={{alignContent:'center'}}>{result.content}</div>
                            <div className="steps-action"
                                 style={{textAlign: 'center', paddingTop: '20%', paddingLeft: '5%'}}>
                                <Button type="primary" onClick={whenEdit}>
                                    Edit
                                </Button>
                            </div>
                        </>
                        : <>
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title}/>
                                ))}
                            </Steps>

                            <div className="steps-content">{steps[current].content}</div>

                            <div className="steps-action"
                                 style={{textAlign: 'center', paddingTop: '20%', paddingLeft: '5%'}}>
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={whenComplete}>
                                        Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </>
                    }
                </Content>
                <Footer style={{textAlign: 'center', paddingLeft: '7.5%'}}>Cv-Project ©2020</Footer>
            </Layout>
        </>
    );
})

export default Main;
