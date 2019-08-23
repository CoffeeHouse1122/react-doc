/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 16:22:55
 * @LastEditTime: 2019-08-16 16:23:22
 * @LastEditors: Please set LastEditors
 */

import React from 'react' // 创建组件、虚拟DOM元素，生命周期
import ReactDom from 'react-dom' // 把创建好的 组件 和 虚拟DOM放到页面上展示

// 导入组件
import Hello from '@/components/Hello'

import '@/class'

// 导入 样式表
import cssObj from '@/css/index.css'

// 创建虚拟DOM元素
// const myh1 = React.createElement('h1', { id:'myh1', title:'this is a  h1'}, '这是一个h1')

// 可以使用babel来转换 
// cnpm i @babel/core babel-loader @babel/plugin-transform-runtime @babel/runtime -D
// cnpm i @babel/preset-env  -D
// cnpm i @babel/preset-react -D
// js中混合写入类似于HTML的语法，叫做JSX语法，符合XML规范的js


// class 关键字创建组件【有状态组件】
class Movie extends React.Component {

  // 构造器
  constructor() {
    super()
    this.state = {
      msg: '大家好！'
    }
  }

  // 渲染当前组件所对应的 虚拟DOM结构
  render() {
    // this.state.msg = "您好！"
    return <div onClick={() => this.show()} >
      {this.state.msg} -- 这是一个Movie组件 -- {this.props.name}
      <input type="text" style={ {width: "100%"} } value={this.state.msg} onChange={ (e) => this.txtChange(e) } ref="txt" />
    </div>
  }

  show = () => {
    // 使用 this.setState({msg: "hahaha"})修改state中的数据 异步执行
    this.setState({
      msg: "hahaha"
    }, function () { 
      console.log(this.state.msg + "触发了。。。")
    })
  }

  txtChange = (e) => {
    console.log(this.refs.txt.value)
    this.setState({
      msg: e.target.value
    }, function () { 
      // console.log(this.state.msg + "触发了。。。")
    })
  }

}

const user = {
  name: "张三",
  age: 3,
  gender: "男"
}

const mydiv =
  <div id="mydiv" title="this is a div" className={cssObj.mydiv} style={{ color: 'red', fontWeight: "700" }}  >
    这是一个div元素
  <hr />
    <label htmlFor="ooo" > oooo </label>
    {/* <Hello name={user.name} age={user.age} gender={user.gender}></Hello> */}
    <Hello {...user}></Hello>
    <Movie {...user}></Movie>
  </div>

ReactDom.render(mydiv, document.getElementById('app'))
