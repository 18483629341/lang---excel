/**
 * 
 *  @param {Array<object>} data table所对应的对象数组, [{key:'a.b.c', zhLabel: '' ,enLabel:''},...]
 * @param {number} index 需要转出的语言包所在的列的下表，第一列下标为0，第二列下标为1
 * @returns 
 */
 function getTree(data, index){
    let tree={}
    
    let firstLevelPropArr=[];
    // 生成某种语言包递归专用的数据node，含父节点的key,以及数据深度level
    let node = getNode(data, index)
    // node约1000多个，遍历递归数量很大1000*1000，执行次数很大，将数据分类，分别处理app/container
    // 这样就是50*50*20 
    let classifyNode ={};
    // 找到所有一级的key
    node.forEach((item)=>{
      // debugger
      // if(!item['key']){
      //   return
      // }
      let oneLevelProp=item['key'].split('.')[0];
      if(firstLevelPropArr.indexOf(oneLevelProp) === -1){
        firstLevelPropArr.push(oneLevelProp);
        let node=[];
        node[0]= item;
        classifyNode[oneLevelProp]=node;
      }else {
        classifyNode[oneLevelProp].push(item);
      }
    })
  //   let nodeA = [
  //     {key: "app.running", value: "dsfasdaf", parentKey: "app", level: 2},
  //     {key: "app.status.label", value: "sfasedtqer", parentKey: "app.status", level: 3},
  //     {key: "app.go.about", value: "weteqrt", parentKey: "app.go", level: 3},
  //  ]
  // tree['app'] = tranTreeObj(nodeA, 'app' , 1)
    // 根据一级key，生成对应的对象树
    firstLevelPropArr.forEach((prop)=>{
      let chileTree= tranTreeObj(classifyNode[prop], prop , 1)
       tree[prop] =chileTree
     })
   return tree
 }

 /**
  * 根据一级key,生成key对应的tree对象
  * @param {Array<object>} node table所对应的对象数组,第一列数据必须为key, 'app'/'app.status'/'app.go'
  * 
  * 
  */
  function tranTreeObj(node, parentKey, level) {
   
   let result={}
   node.forEach((item)=>{
    // console.log(item)
    // console.log(parentKey)
     let _levelKey = item.key.split('.')[level]
     // 找到所有含有parentKey为的obj, 条件1：_levelKey存在
     if(item.key.indexOf(parentKey)> -1 && _levelKey){
        // 层级小于对象原本的层级
        if(level < item.level-1){
            let _pointIndex=item.parentKey.indexOf(_levelKey)+_levelKey.length
            let _currentKey= item['key'].substring(0,_pointIndex)
            
            result[_levelKey] = tranTreeObj(node, _currentKey, level+1)
         
        // 如果没有子属性，直接将value赋值
        } else {
          result[_levelKey]= item.value
        }
     } 
   })
   return result
 }

 /**
  * 生成递归专用的数据，含父节点的key,以及数据深度level
  */
 function getNode(data, langLabel){
    let node=[]
    data.forEach((item)=>{
        // 找到父属性key
        
        let itemKey= item['key']
        let lastPointIndex=itemKey.lastIndexOf('.')
        let parentKey= itemKey.substring(0,lastPointIndex)
        let obj = {
          key: itemKey,
          value: item[langLabel],
          parentKey,
          level: item['key'].split('.').length
        }
        node.push(obj)  
    })
    return node
 }
 export default {
    getTree
 }