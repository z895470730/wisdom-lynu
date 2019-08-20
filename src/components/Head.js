import React from 'react';
import { connect } from "dva";
import style from "./Head.css";
import { Input, Avatar,Dropdown,Menu,Icon } from 'antd';
const Search = Input.Search;
//退出登录应该怎么写？？

class Head extends React.Component {
   logout=()=>{
    console.log('aa');
    this.props.dispatch({
      type:'example/logout'
    });
     console.log('bb');
  };
  render() {
    return (
      <div className={style.head}>
        <div className={style.logo}>
          <img src='../../src/assets/logo.png'/>
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <Search
              placeholder="输入要查找的内容"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
          <div className={style.user}>
            {console.log(this.props.example)}
            {this.props.example.userState?
              <Dropdown overlay={<Menu>
                                  <Menu.Item onClick={this.logout}>
                                    <Icon type="logout" />
                                    <span>退  出</span>
                                  </Menu.Item>
                                </Menu>}
                        placement="bottomLeft">
                <Avatar
                  style={{color: '#f56a00', backgroundColor: '#fde3cf'}}
                  size='large'
                  className={style.avatar}
                >
                  {this.props.example.user?this.props.example.user.name:<Icon type="loading"/>}
                </Avatar></Dropdown>:<Avatar size='large'>未登录</Avatar>
            }
          </div>
        </div>
      </div>
    );
  }
}
  export default connect(({example})=>({example}))(Head);
