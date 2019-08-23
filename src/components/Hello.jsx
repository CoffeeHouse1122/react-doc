import React from 'react' // 创建组件、虚拟DOM元素，生命周期

// 第一种创建组件的方式 【无状态组件】
function Hello(props) {
  console.log(props)
  return <div {...props}>{props.name}</div>
  // return null
}

export default Hello