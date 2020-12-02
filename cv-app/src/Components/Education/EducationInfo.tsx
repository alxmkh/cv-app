import React from 'react';
import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import Layout from 'antd/lib/layout';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {actions} from "../../Redux/education-reducer";
import {EducationEditForm} from "./EducationEditForm";
import {valuesTypeForEducationInfo} from "../Common/types";
import {EducationReadOnlyForm} from "./EducationReadOnlyForm";
import {message} from "antd";

export const EducationInfo: React.FC = React.memo(() => {
    const isSaved = useSelector((state: AppStateType) => state.educationReducer.isSave);

    const educationInfo = useSelector((state: AppStateType) => state.educationReducer);

    const dispatch = useDispatch();

    const submit = (values: valuesTypeForEducationInfo, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        dispatch(actions.setEducationInfo(values.schoolName, values.titleOfStudy, values.dateOfStudyFrom, values.dateOfStudyTo, true));
        setSubmitting(false);
        message.success('Saved');
    }
    const edit = () => {
        dispatch(actions.editEducationInfo(false));
        message.warning('Edit')
    }

    return (
        <>
            <Layout>
                <Row justify={'center'}>
                    <Col style={{alignContent: 'center', textAlign: 'center'}} span={7}>
                        {!isSaved
                            ? <EducationEditForm submit={submit}
                                                 educationInfo={educationInfo}/>
                            : <EducationReadOnlyForm
                                educationInfo={educationInfo}
                                edit={edit}/>
                        }
                    </Col>
                </Row>
            </Layout>
        </>
    )
});