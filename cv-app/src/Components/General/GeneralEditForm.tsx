import React from 'react';
import {DatePicker, Form, Input, Select} from "formik-antd";
import Row from "antd/lib/grid/row";
import locale from "antd/es/date-picker/locale/ru_RU";
import {Formik} from "formik";
import {SignupSchemaGeneralForm} from "../Common/validate";
import Col from "antd/lib/grid/col";
import {Button} from "antd";
import {SaveOutlined} from "@ant-design/icons";
import {valuesTypeForGeneralInfoEdit} from '../Common/types';
import { layout } from '../Common/styles';

export const GeneralEditForm: React.FC<valuesTypeForGeneralInfoEdit> = React.memo((props) => {
    return (
        <>
            <Formik
                validationSchema={SignupSchemaGeneralForm}
                onSubmit={props.submit}
                initialValues={props.generalInfo}
                render={() => (
                    <Form
                        {...layout}>
                        <Form.Item name="firstName" style={{paddingTop: 20}}
                                   showValidateSuccess
                                   label={'First Name'}>
                            <Input name={'firstName'}/>
                        </Form.Item>
                        <Form.Item name="lastName" style={{paddingTop: 10}}
                                   showValidateSuccess
                                   label={'Last Name'}>
                            <Input name={'lastName'}/>
                        </Form.Item>

                        <Form.Item name="email" style={{paddingTop: 10}}
                                   showValidateSuccess
                                   label={'Email'}>
                            <Input name={'email'}/>
                        </Form.Item>

                        <Form.Item name="dateOfBirth" style={{paddingTop: 10}}
                                   showValidateSuccess
                                   label={'Date of birth'}>
                            <DatePicker name={'dateOfBirth'} locale={locale} style={{width: '100%'}}/>
                        </Form.Item>

                        <Form.Item name="gender" style={{paddingTop: 10, textAlign: 'left'}}
                                   showValidateSuccess
                                   label={'Gender'}>
                            <Select name={'gender'}
                                    placeholder="Pick your gender">
                                <Select.Option value="Male">Male</Select.Option>
                                <Select.Option value="Female">Female</Select.Option>
                            </Select>
                        </Form.Item>
                        <Col style={{alignContent: 'center', textAlign: 'center', paddingTop: 50}}
                             push={12}>
                            <Form.Item name={'submitButton'}>
                                <Row justify={'space-between'}
                                     style={{alignContent: 'center', textAlign: 'center'}}>
                                    <Button type="primary" ghost htmlType="submit" name={'saveButton'}
                                            icon={<SaveOutlined/>}>
                                        Save
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