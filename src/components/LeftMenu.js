import React from 'react';
import { connect } from 'dva';
import {Icon, Menu} from 'antd';
import style from './leftMenu.css'
const { SubMenu } = Menu;
class LeftMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onChange = (document) => {
    //改变页面的方法应不应该这样写？？ 该不该写在这里？？
    //每当改变页面时，数据还没加载出，但是页面已经渲染的问题怎么处理？？
    switch (document.key) {
      case '1':this.onGetCallRecords();break;
      case '2':this.onGetEvaluation();break;
      case '3':this.onGetJobCategory();break;
      case '4':this.onGetCallRecords();break;
      case '5':this.onGetWorkTasks();break;
      case '6':this.onGetCallRecords();break;
      case '7':this.onGetWorkRecord();break;
      default: break;
    }
    this.props.dispatch({
      type:'example/saveFlag',
      payload:document.key
    });
  };
  onGetJobCategory = () => {
    this.props.dispatch({
      type:'example/getJobCategoryData',
    })
  };
  onGetCallRecords = () => {
    this.props.dispatch({
      type:'example/getCallRecordsData',
    })
  };
  onGetWorkTasks = () => {
    this.props.dispatch({
      type:'example/getWorkTasksData',
    })
  };
  onGetWorkRecord = () => {
    this.props.dispatch({
      type:'example/getWorkRecordData',
    })
  };
  onGetEvaluation = () => {
    this.props.dispatch({
      type:'example/getEvaluationData',
    })
  };
  render() {
    return (
      <div className={style.menu}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          className={style.list}
        >
          <Menu.Item key="1" onClick={this.onChange}>
            <Icon type="user" />
            个人信息
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="laptop" />考试测验</span>}>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="snippets" />考核测评</span>}>
            <Menu.Item key="2" onClick={this.onChange}>评测</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="desktop" />日常工作</span>}>
            <Menu.Item key="3" onClick={this.onChange}>工作类别</Menu.Item>
            <Menu.Item key="4" onClick={this.onChange}>通讯记录</Menu.Item>
            <Menu.Item key="5" onClick={this.onChange}>工作任务</Menu.Item>
            <Menu.Item key="6" onClick={this.onChange}>会议</Menu.Item>
            <Menu.Item key="7" onClick={this.onChange}>工作记录</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default connect(({example})=>({example}))(LeftMenu);
