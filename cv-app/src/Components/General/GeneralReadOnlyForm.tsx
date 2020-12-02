import React from 'react';
import {Form, Input} from "formik-antd";
import moment from "moment";
import {valuesTypeForGeneralInfoReadOnly} from "../Common/types";
import {Formik} from "formik";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";
import { layout } from '../Common/styles';

export const GeneralReadOnlyForm: React.FC<valuesTypeForGeneralInfoReadOnly> = React.memo((props) => {



    return (
        <>
            <Formik
                //@ts-ignore
                onSubmit={() => null}
                initialValues={props.generalInfo}
                render={() => (
                    <Form
                        {...layout}>
                        <Form.Item name="firstName" style={{paddingTop: 20}}
                                   label={'First Name'}>
                            <Input name={'firstName'}
                                   bordered={false}
                                   value={props.generalInfo.firstName}
                                   readOnly/>
                        </Form.Item>
                        <Form.Item name="lastName"
                                   label={'Last Name'}>
                            <Input name={'lastName'}
                                   value={props.generalInfo.lastName}
                                   bordered={false}
                                   readOnly/>
                        </Form.Item>

                        <Form.Item name="email"
                                   label={'Email'}>
                            <Input name={'email'}
                                   value={props.generalInfo.email}
                                   bordered={false}
                                   readOnly/>
                        </Form.Item>

                        <Form.Item name='dateOfBirthday'
                                   label={'Date of birth'}>
                            <Input name='dateOfBirthday'
                                   bordered={false}
                                   readOnly
                                   value={moment(props.generalInfo.dateOfBirth).format('Do  MMMM YYYY')}/>
                        </Form.Item>

                        <Form.Item name="gender"
                                   label={'Gender'}>
                            <Input name={'gender'}
                                   style={{paddingTop: 10, textAlign: 'left'}}
                                   value={props.generalInfo.gender}
                                   bordered={false}
                                   readOnly/>
                        </Form.Item>
                        <Col style={{alignContent: 'center', textAlign: 'center', paddingTop: 50}}
                             push={12}>
                            <Form.Item name={'editButton'}>
                                <Row justify={'space-between'}
                                     style={{alignContent: 'center', textAlign: 'center'}}>
                                    <Button type="primary"
                                            onClick={props.edit}
                                            ghost
                                            name={'submitButton'}
                                            icon={<EditOutlined/>}>
                                        Edit
                                    </Button>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Form>
                )}
            />
        </>
    )
})