import React, {useState} from 'react';
import {Button, Modal, Form, Input as AntdInput, Row, Col, message} from 'antd';
import {useForm, Controller} from 'react-hook-form';
import {SignupSchemaPracticalExperienceForm} from "../Common/validate";
import {yupResolver} from '@hookform/resolvers/yup';
import {DatePicker} from 'antd';
import {useDispatch} from "react-redux";
import {actions} from "../../Redux/practical-reducer";
import {CollectionCreateFormProps, companyInfo } from '../Common/types';
import { PracticalExperienceReadOnlyForm } from './PracticalExperienceReadOnlyForm';
import {validation} from "../Common/styles";

const {TextArea} = AntdInput;

const initialValues = {
    positionTitle: '',
    companyName: '',
    mainTasks: '',
    dateFrom: null as Date | null,
    dateTo: null as Date | null,
    isSave: false
}

export const PracticalExperienceInfo = () => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const {register, errors, control} = useForm<companyInfo>({
        resolver: yupResolver(SignupSchemaPracticalExperienceForm)
    });
    const dispatch = useDispatch();
    const onCreate = (data: companyInfo) => {
        dispatch(actions.setPracticalExpInfo(data.companyName,data.positionTitle,data.mainTasks,data.dateFrom,data.dateTo,true));
        setVisible(false);
        message.success('Work added')
    }

    return (
        <div>
            <CollectionCreateForm
                visible={visible}

                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
                initialValues={initialValues}
                form={form}
                register={register}
                errors={errors}
                control={control}
            />
            <Row justify={'center'}>
                <Col style={{paddingLeft: '65px', paddingTop: '30px'}}>
                   <PracticalExperienceReadOnlyForm/>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col style={{paddingLeft: '65px', paddingTop: '30px'}}>
                    <Button
                        type="dashed"
                        onClick={() => {
                            setVisible(true);
                        }}
                    >
                        Add work
                    </Button>
                </Col>
            </Row>
        </div>
    );
};


const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
                                                                       visible,
                                                                       onCreate,
                                                                       onCancel,
                                                                       initialValues,
                                                                   }) => {

    const {handleSubmit, errors, control} = useForm<typeof initialValues>({
        resolver: yupResolver(SignupSchemaPracticalExperienceForm)
    });

    return (
        <>
            <Modal
                visible={visible}
                title="Add your practical experience"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                cancelButtonProps={{style: {display: 'none'}}}
                okButtonProps={{style: {display: 'none'}}}>
                <form onSubmit={handleSubmit(onCreate)}>
                    <div className='input-group'>
                        <label className='label'>Company name</label>
                        <Controller
                            as={<AntdInput name={'companyName'}/>}
                            name='companyName'
                            control={control}
                            defaultValue=''
                        />
                        <p style={validation.color}>{errors.companyName?.message}</p>
                        <label className='label'>Position title</label>
                        <Controller
                            as={<AntdInput name={'positionTitle'}/>}
                            name='positionTitle'
                            control={control}
                            defaultValue=''
                        />
                        <p style={validation.color}>{errors.positionTitle?.message}</p>
                        <Row justify={'space-between'}>
                            <Col span={7}>
                                <label className='label'>Start date</label>
                                <Controller
                                    as={<DatePicker name={'dateFrom'}/>}
                                    name='dateFrom'
                                    control={control}
                                    defaultValue=''
                                />
                                <p style={validation.color}>{errors.dateFrom?.message}</p>
                            </Col>
                            <Col span={7}>
                                <label className='label'>End date</label>
                                <Controller
                                    as={<DatePicker name={'dateTo'}/>}
                                    name='dateTo'
                                    control={control}
                                    defaultValue=''
                                />
                                <p style={validation.color}>{errors.dateTo?.message}</p>
                            </Col>
                        </Row>
                        <p/>
                        <label className='label'>About your tasks</label>
                        <Controller
                            as={<TextArea name={'mainTasks'} showCount maxLength={300}/>}
                            name='mainTasks'
                            control={control}
                            defaultValue=''
                        />
                        <p>{errors.mainTasks?.message}</p>
                    </div>
                    <Row justify={'end'}>
                        <Col>
                            <Button type='primary' htmlType='submit'>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal>
        </>
    );
};
