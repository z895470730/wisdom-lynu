import React from 'react';
import { connect } from 'dva';
import style from './HomePage.css';
import LeftMenu from "../components/LeftMenu";
import Head from "../components/Head";
import PersonalInformation from "../components/PersonalInformation";
import Evaluation from "../components/Evaluation";
import Meeting from "../components/Meeting";
import CallRecords from "../components/CallRecords";
import WorkTasks from "../components/WorkTasks";
import WorkRecord from "../components/WorkRecord";
import JobCategory from "../components/JobCategory";
import Login from "../components/Login"
import { Layout} from 'antd';
const { Header, Content, Sider } = Layout;
class HomePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  };
  componentDidMount(){

  };
  render() {
    return (
      <Layout className={style.page}>
        {console.log(this.props.example.userState)}
        {this.props.example.userState?false:<Login/>}
        <Header className={style.header}>
          <Head/>
        </Header>
        <Layout>
          <Sider width='15%' className={style.leftMenu}>
            <LeftMenu/>
          </Sider>
          <Content className={style.content}>
            <div className={style.body}>
              {
                (()=>{
                  switch (this.props.example.flag) {
                    case '1':
                      return <PersonalInformation/>;//个人信息
                    case '2':
                      return <Evaluation/>;  //评测
                    case '3':
                      return <JobCategory/>;  //工作类别
                    case '4':
                      return <CallRecords/>;  //通讯记录
                    case '5':
                      return  <WorkTasks/>;  //工作任务
                    case '6':
                      return <Meeting />; //会议
                    case '7':
                      return <WorkRecord/>;  //工作记录
                    default:
                      return null;
                  }
                })()
              }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

HomePage.propTypes = {
};

export default connect(({example})=>({example}))(HomePage);
