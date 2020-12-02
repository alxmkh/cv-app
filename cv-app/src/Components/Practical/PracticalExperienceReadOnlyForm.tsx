import React from "react";
import {Table} from 'antd';
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store";
import moment from "moment";

const columns = [
    {
        title: 'Position Title',
        dataIndex: 'positionTitle',

        overflow: 'wrap'
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        ellipsis: true,
        width: '200px'
    },
    {
        title: 'About your tasks',
        dataIndex: 'mainTasks',
    },
    {
        title: 'From',
        dataIndex: 'dateFrom',
    },
    {
        title: 'To',
        dataIndex: 'dateTo',
    },
];

export const PracticalExperienceReadOnlyForm: React.FC = React.memo(() => {
    const practicalExpInfo = useSelector((state: AppStateType) => state.practicalReducer.practicals);
    const data = practicalExpInfo.map((ci, i) => (
        Object.create(
            {
                key: i,
                companyName: ci.companyName,
                positionTitle: ci.positionTitle,
                mainTasks: ci.mainTasks,
                dateFrom: moment(ci.dateFrom).format('l'),
                dateTo: moment(ci.dateTo).format('l'),
            }
        )
    ))


    return (
        <>
            {data.length === 0 ?
                <>
                </> :
                <Table
                    style={{whiteSpace: 'unset'}}
                    columns={columns}
                    dataSource={data}
                    size="large"
                    pagination={false}/>
            }
        </>
    )
});