import zhTree from '../langIn/zh'
import enTree from '../langIn/en'
/**
 * 获取中文ison树改为数组
 */
const  getTypeOptions = function(){
    let options= []
    const map = new Map(Object.entries(zhTree))
    const result = getMap(map, new Map(), '')
    let number = 1
    result.forEach((value, key) => {
      if (value === '未知') {
        return
      }
      options.push({
        key: key,
        zhLabel: value,
        enLabel: ''
       
      })
    })
    return options
  }
  
const  getMap = function(value, result, keySuffix) {
    value.forEach((value, key) => {
      if (value instanceof Object) {
        getMap(new Map(Object.entries(value)), result, keySuffix + key + '.')
      } else {
        result.set(keySuffix + key, value)
      }
    })
    return result
  }
  
  /*
   * 根据json 树，以及key(container.run.rules.memory_not_empty)获取对应的value
   * @param  <obect>树对象  demo：{container:{ run: {rules:{memory_not_empty: 'jojo'}}},...}
   * @param  <string>key   container.run.rules.memory_not_empty
   * 最后返回值为字符串  'jojo'
   */
 const getLabel= (obj, key)=>{
    let propArrs=key.split('.')
    // debugger
    let result=obj
    propArrs.forEach((prop,i)=>{
      if(result.hasOwnProperty(prop)){
        result = result[prop]
      } else {
        result= ''
      }
    })
    return result
  }


export default {
    methods: {
        init(){
            // 中文树转为数组
            let arr = getTypeOptions()
            // 根据数据获取英文的label
            arr.filter((item) =>{
              item.enLabel=getLabel(enTree,item.key)
            })
            return arr
        }
    }
}
  