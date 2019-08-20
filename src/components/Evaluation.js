import React from 'react';
import {connect} from "dva";
import { Table } from 'antd';


const columns = [{
  title: '名称',
  dataIndex: 'name',
  key: 'name',
},{
  title:'科目',
  dataIndex:'subject_name',
  key:'subject_name'
},{
  title:'在线考试',
  dataIndex:'title',
  key:'title'
},{
  title:'考试日期时间',
  dataIndex:'description',
  key:'description'
},{
  title:'开始日期时间',
  dataIndex:'online_start_datetime',
  key:'online_start_datetime'
},{
  title:'结束日期时间',
  dataIndex:'online_stop_datetime',
  key:'online_stop_datetime'
},{
  title:'考生范围',
  dataIndex:'invited_only',
  key:'invited_only'
}];
class Evaluation extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={this.props.example.evaluation} columns={columns}/>
      </div>
    );
  }
}
export default connect(({example})=>({example}))(Evaluation);
