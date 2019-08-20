import React from 'react';
import {connect} from "dva";
import { Table } from 'antd';
const columns = [{
  title: '工作人员',
  dataIndex: 'person_name',
  key: 'person_name',
},{
  title:'工作简述',
  dataIndex:'title',
  key:'title'
},{
  title:'类型',
  dataIndex:'category_title',
  key:'category_title'
},{
  title:'工作时长',
  dataIndex:'hours',
  key:'hours'
},{
  title:'创建时间',
  dataIndex:'created',
  key:'created'
},{
  title:'最后修改时间',
  dataIndex:'modified',
  key:'modified'
},{
  title:'创建人',
  dataIndex:'creator_name',
  key:'creator_name'
},{
  title:'相关工作任务',
  dataIndex:'note_title',
  key:'note_title'
}];
class workRecord extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={this.props.example.workRecord} columns={columns}/>
      </div>
    );
  }
}
export default connect(({example})=>({example}))(workRecord);
