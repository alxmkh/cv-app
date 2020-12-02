import React from 'react';
import {Col, Row} from "antd";
import {Collapse} from 'antd';
import { Descriptions } from 'antd';
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import { PracticalExperienceReadOnlyForm } from '../Practical/PracticalExperienceReadOnlyForm';
import moment from 'moment';

const {Panel} = Collapse;

export const Result: React.FC = React.memo(() => {
    const generalInfo = useSelector((state: AppStateType) => state.generalReducer);
    const educationInfo = useSelector((state: AppStateType) => state.educationReducer);
    return (
        <>
            <Row>
                <Col span={16} offset={4}>
                    <Collapse>
                        <Panel header="General" key="1">
                            <Descriptions title="General info">
                                <Descriptions.Item label="First name">{generalInfo.firstName}</Descriptions.Item>
                                <Descriptions.Item label="Last name">{generalInfo.lastName}</Descriptions.Item>
                                <Descriptions.Item label="Email">{generalInfo.email}</Descriptions.Item>
                                <Descriptions.Item label="Date of birth">{moment(generalInfo.dateOfBirth).format('LL')}</Descriptions.Item>
                                <Descriptions.Item label="Gender">{generalInfo.gender}</Descriptions.Item>
                            </Descriptions>
                        </Panel>

                        <Panel header="Education" key="2">
                            <Descriptions title="Education info">
                                <Descriptions.Item label="School name">{educationInfo.schoolName}</Descriptions.Item>
                                <Descriptions.Item label="Title of study">{educationInfo.titleOfStudy}</Descriptions.Item>
                                <Descriptions.Item label="From">{moment(educationInfo.dateOfStudyFrom).format('LL')}</Descriptions.Item>
                                <Descriptions.Item label="To">{moment(educationInfo.dateOfStudyTo).format('LL')}</Descriptions.Item>
                            </Descriptions>
                        </Panel>
                        <Panel header="Practical experience" key="3">
                            <PracticalExperienceReadOnlyForm/>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    )
})

