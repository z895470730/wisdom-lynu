import React from 'react';
import {connect} from "dva";
import { Table } from 'antd';
const columns = [{
  title: '部门序号',
  dataIndex: 'school',
  key: 'school',
},{
  title:'部门名称',
  dataIndex:'school_name',
  key:'school_name'
},{
  title:'描述',
  dataIndex:'title',
  key:'title'
},{
  title:'工作内容',
  dataIndex:'description',
  key:'description'
}];
class meeting extends React.Component {
  render() {
    return (
      <div>
        <Table dataSource={this.props.example.jobCategory}columns={columns}/>
      </div>
    );
  }
}
export default connect(({example})=>({example}))(meeting);
