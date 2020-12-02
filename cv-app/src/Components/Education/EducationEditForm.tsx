import React from 'react';
import {DatePicker, Form, Input} from "formik-antd";
import Row from "antd/lib/grid/row";
import locale from "antd/es/date-picker/locale/ru_RU";
import {Formik} from "formik";
import {SignupSchemaEducationForm} from "../Common/validate";
import Col from "antd/lib/grid/col";
import {Button} from "antd";
import {SaveOutlined} from "@ant-design/icons";
import {valuesTypeForEducationInfoEdit } from '../Common/types';
import { layout } from '../Common/styles';

export const EducationEditForm: React.FC<valuesTypeForEducationInfoEdit> = React.memo((props) => {
    return (
        <>
            <Formik
                validationSchema={SignupSchemaEducationForm}
                onSubmit={props.submit}
                initialValues={props.educationInfo}
                render={() => (
                    <Form
                        {...layout}>
                        <Form.Item name="schoolName" style={{paddingTop: 10}}
                                   label={'School name'}
                                   showValidateSuccess>
                            <Input name={'schoolName'}/>
                        </Form.Item>
                        <Form.Item name="titleOfStudy" style={{paddingTop: 10}}
                                   showValidateSuccess
                                   label={'Title of study'}>
                            <Input name={'titleOfStudy'}/>
                        </Form.Item>

                        <Row justify={'center'}>
                        </Row>
                        <Form.Item name="dateOfStudyFrom" style={{paddingTop: 10}}
                                   showValidateSuccess
                                   label={'From'}>
                            <DatePicker name={'dateOfStudyFrom'} locale={locale} style={{width: '100%'}}/>
                        </Form.Item>
                        <Form.Item name="dateOfStudyTo" style={{paddingTop: 10}}
                                   showValidateSuccess
                                   label={'To'}>
                            <DatePicker name={'dateOfStudyTo'} locale={locale} style={{width: '100%'}}/>
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