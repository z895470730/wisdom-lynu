import React from 'react';
import {connect} from "dva";
import { Table } from 'antd';
const columns = [{
  title: '记录人',
  dataIndex: 'creator_name',
  key: 'creator_name',
},{
  title:'来电部门',
  dataIndex:'school_name',
  key:'school_name'
},{
  title:'来电人姓名',
  dataIndex:'person_name',
  key:'title'
},{
  title:'来电号码',
  dataIndex:'call_number',
  key:'call_number'
},{
  title:'来电时间',
  dataIndex:'call_datetime',
  key:'call_datetime'
},{
  title:'相关任务',
  dataIndex:'content',
  key:'content'
}];
class CallRecords extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={this.props.example.callRecords} columns={columns}/>
      </div>
    );
  }
}

export default connect(({example})=>({example}))(CallRecords);
