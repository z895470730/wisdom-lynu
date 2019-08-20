import React from 'react';
import {connect} from "dva";
import { Table } from 'antd';
const columns = [{
  title: '工作人员',
  dataIndex: 'person_name',
  key: 'person_name',
},{
  title:'指派人',
  dataIndex:'creator_name',
  key:'creator_name'
},{
  title:'类别',
  dataIndex:'category_title',
  key:'category_title'
},{
  title:'优先级',
  dataIndex:'get_priority_display',
  key:'get_priority_display'
},{
  title:'开始时间',
  dataIndex:'start_datetime',
  key:'start_datetime'
},{
  title:'结束时间',
  dataIndex:'end_datetime',
  key:'end_datetime'
},{
  title:'相关工作记录',
  dataIndex:'content',
  key:'content'
},{
  title:'相关会议',
  dataIndex:'meeting',
  key:'meeting'
}];
class JobCategory extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={this.props.example.workTasks} columns={columns}/>
      </div>
    );
  }
}
export default connect(({example})=>({example}))(JobCategory);
