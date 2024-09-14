import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  
  let a='第一个变量'
    const arr=['abb','cba','cba']
    const obj = {
      name:"张三",
      age:18
    }
    let isTure=true;
    let isUnderfined = undefined;
    let isNull = null;
    function fun(){
      return("我是函数的返回值");
    }
    return (
    <>
      {/*字符串*/}
      <View>{a}</View>
  
      <View>{arr}</View>
      <View>
        {obj.name}-{obj.age}
      </View>
      <View>{JSON.stringify(obj)}</View>
      {isNull}
      <View>{new Date().getTime()}</View>
      <View>{1+2}</View>
      <View>{isTure ?"我是真的":"我是假的"}</View>
      <View>{fun()}</View>
    </>
  )
}
