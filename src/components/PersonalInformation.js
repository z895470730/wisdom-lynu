import React from 'react';
import {connect} from "dva";
import { Row, Col ,Card ,Divider} from 'antd';
import style from './PersonalInformation.css'
const { Meta } = Card;
class PersonalInformation extends React.Component {

  render() {
    return (
      <div className={style.page}>
        <Row>
          <Col span={1}></Col>
          <Col span={15} className={style.personalInformation}>
            <Divider orientation="left" className={style.title}>个人信息</Divider>
            <div className={style.content}>
              <div className={style.option}>姓名：{this.props.example.user.name}</div>
              <div className={style.option}>出生日期：{this.props.example.user.birthdate}</div>
              <div className={style.option}>民族：{this.props.example.user.get_nation_display}</div>
              <div className={style.option}>性别：{this.props.example.user.get_gender_display}</div>
              <div className={style.option}>学号：{this.props.example.user.id}</div>
              <div className={style.option}>身份证号码：{this.props.example.user.personid}</div>
              <div className={style.option}>邮箱：{this.props.example.user.email}</div>
              <div className={style.option}>联系方式：{this.props.example.user.cell_number}</div>
            </div>
          </Col>
          <Col span={8} className={style.avatar}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                description="点击更改头像"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default connect(({example})=>({example}))(PersonalInformation);
