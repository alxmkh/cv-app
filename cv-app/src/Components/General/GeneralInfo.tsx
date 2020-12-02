import React from 'react';
import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import Layout from 'antd/lib/layout';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import {actions} from "../../Redux/general-reducer";
import {GeneralEditForm} from "./GeneralEditForm";
import {GeneralReadOnlyForm} from "./GeneralReadOnlyForm";
import { valuesTypeForGeneralInfo } from '../Common/types';
import {message} from "antd";

export const GeneralInfo: React.FC = React.memo(() => {
    const isSaved = useSelector((state: AppStateType) => state.generalReducer.isSave);
    const generalInfo = useSelector((state: AppStateType) => state.generalReducer);

    const dispatch = useDispatch();

    const submit = (values: valuesTypeForGeneralInfo, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        dispatch(actions.setGeneralInfo(values.firstName, values.lastName, values.email, values.dateOfBirth, values.gender, true));
        setSubmitting(false);
        message.success('Saved');
    }
    const edit = () => {
        dispatch(actions.editGeneralInfo(false));
        message.warning('Edit')
    }

    return (
        <>
            <Layout>
                <Row justify={'center'}>
                    <Col style={{alignContent: 'center', textAlign: 'center'}} span={7}>
                        {!isSaved
                            ? <GeneralEditForm submit={submit}
                                               generalInfo={generalInfo}/>
                            : <GeneralReadOnlyForm edit={edit}
                                                   generalInfo={generalInfo}/>
                        }
                    </Col>
                </Row>
            </Layout>
        </>
    )
});