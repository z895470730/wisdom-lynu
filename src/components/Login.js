import React from 'react';
import {connect} from "dva";
import { Modal,Form, Icon, Input, Button, Checkbox } from 'antd';
import  style  from './Login.css'
const FormItem = Form.Item;
class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type:'example/login',
          payload:{values}
        })
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          title="用户登录"
          centered
          visible={true}
          closable={false}
          maskClosable={false}
          footer={null}
          width="400px"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              className={style.FormItem}>
              {getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: '账号不能为空'
                }],
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: 'rgba(0,0,0,.25)'
                      }}
                    />}
                  placeholder="请输入您的账号"
                />
              )}
            </FormItem>
            <FormItem
              className={style.FormItem}>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: '密码不能为空'
                }],
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: 'rgba(0,0,0,.25)'
                      }}
                    />}
                  type="password"
                  placeholder="请输入您的密码"
                  id="user"
                />
              )}
            </FormItem>
            <FormItem className={style.FormItem}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <span
                className={style.forget}
              >
              <a
                className="login-form-forgot"
                href=""
              >
                忘记密码
              </a>
              </span>
            </FormItem>
            <div className={style.btnFormItem}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={style.loginFormButton}
                >
                  登录
                </Button>
            </div>
            <div className={style.btnFormItem}>
                <Button
                  type="danger"
                  htmlType="submit"
                  className={style.registerFormButton}
                >
                  注册
                </Button>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
Login =  Form.create({})(Login);
export default connect(({example})=>({example}))(Login);
