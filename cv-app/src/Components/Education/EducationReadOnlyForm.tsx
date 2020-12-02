import React from 'react';
import {Form, Input} from "formik-antd";
import moment from "moment";
import {valuesTypeForEducationInfoReadOnly} from "../Common/types";
import {Formik} from "formik";
import {SignupSchemaEducationForm} from "../Common/validate";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";
import { layout } from '../Common/styles';

export const EducationReadOnlyForm: React.FC<valuesTypeForEducationInfoReadOnly> = React.memo((props) => {



    return (
        <>
            <Formik
                validationSchema={SignupSchemaEducationForm}
                // @ts-ignore
                onSubmit={() => null}
                initialValues={props.educationInfo}
                render={() => (
                    <Form
                        {...layout}>
                        <Form.Item name="schoolName" style={{paddingTop: 20}}
                                   label={'School Name'}>
                            <Input name={'schoolName'}
                                   bordered={false}
                                   value={props.educationInfo.schoolName}
                                   readOnly/>
                        </Form.Item>
                        <Form.Item name="titleOfStudy"
                                   label={'Title of study'}>
                            <Input name={'titleOfStudy'}
                                   value={props.educationInfo.titleOfStudy}
                                   bordered={false}
                                   readOnly/>
                        </Form.Item>
                        <Form.Item name="dateOfStudyFrom"
                                   label={'From'}>
                            <Input name='dateOfStudyFrom'
                                   bordered={false}
                                   readOnly
                                   value={moment(props.educationInfo.dateOfStudyFrom).format('Do  MMMM YYYY')}/>
                        </Form.Item>
                        <Form.Item name="dateOfStudyTo"
                                   label={'To'}>
                            <Input name='dateOfStudyFrom'
                                   bordered={false}
                                   readOnly
                                   value={moment(props.educationInfo.dateOfStudyTo).format('Do  MMMM YYYY')}/>
                        </Form.Item>

                        <Col style={{alignContent: 'center', textAlign: 'center', paddingTop: 50}}
                             push={12}>
                            <Form.Item name={'editButton'}>
                                <Row justify={'space-between'}
                                     style={{alignContent: 'center', textAlign: 'center'}}>
                                    <Button type="primary"
                                            onClick={props.edit}
                                            ghost
                                            name={'l'}
                                            icon={<EditOutlined/>}>
                                        Edit
                                    </Button>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Form>)}/>
        </>
    )
})