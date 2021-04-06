<template>
	<section class="table-container">
      <b>table</b>
      <div>
        <div class="ant-modal-footer" style="text-align: left;">
          <button class="primary" @click="exportExcel">导出excel</button>
          
        </div>
        <div class="ant-modal-footer" style="text-align: right;">
          
          <button @click="importE">导入excel替换英文</button>
          <!--<button class="primary" @click="replaceLang('en')" >替换英文</button>-->
        
          <button class="primary" @click="generateEnLang('enLabel')">生成英文</button>
        </div>
        
      </div>
      
      <table class="table" id="myTab">
        <thead>
           <tr>
            <td class="td"><b>key</b></td>
            <td class="td"><b>中文</b></td>
            <td class="td"><b>英文</b></td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in tableScoreData"
            :key="index"
          >
            <td v-for="(item, i) in row" :key="i" class="td">{{item}}</td>
          </tr>
        </tbody>
      </table>
    </section>
</template>

<script>
import tableToExcel from '../mixins/tableToExcel'
import init from '../mixins/langToTable'
import Excel from '../mixins/excel'
import FileSaver from 'file-saver'
import getTree  from '../mixins/tableToLang'

export default {
	data() {
        return {
        tableScoreData: [   ],
        newData:{},
        canReplace: false,
        zhMap: null,
        enMap: null
      }
    },
	mixins: [tableToExcel, init],
  created(){
    this.tableScoreData = this.init()
    this.importE()
  },
	methods: { 
      exportExcel() {
            this.tableToExcel([
              {
                  id: 'myTab',
                  name: 'zeus中英文统计'
              }
            ], '国际化统计')
          
      },
      importE(){
        // 保存数据，生成中英文map数据
        Excel.importExcel((data, dataRef) => {
          this.zhMap = new Map()
          this.enMap = new Map()
           console.log(data);
          data.forEach((item,i)=>{
            if(i>0){
              let key=item[0];
              let zhValue = item[1] || '';
              let enValue = item[2] || '';
              this.zhMap.set(key, zhValue);
              this.enMap.set(key, enValue);
            }
          })
          this.canReplace =true

          this.replaceLang('en')
        })
      },
      /**
       *  
       */
      replaceLang(lang){
        let arr = [...this.tableScoreData];
        let map = new Map()
        switch(lang){
          case 'en':
            arr.forEach((item)=>{
              if(item[lang+'Label']!== this.enMap.get(item['key'])){
                item[lang+'Label'] = this.enMap.get(item['key']);
              } 
            });
            break;
          case 'zh':
            arr.forEach((item)=>{
              if(item[lang+'Label']!== this.zhMap.get(item['key'])){
                item[lang+'Label'] = this.zhMap.get(item['key']);
              } 
            });
            break;
          default:
            console.err('需要添加语言map')
            break;
            
        }
       
        // console.log(arr);
        this.tableScoreData = [...arr]
      },
      generateEnLang(label){
        let tableData=JSON.parse(JSON.stringify(this.tableScoreData))
        // 生成lang树
        // 参数1为表格数据 ，参数2为需要转出语言包的所在列的下标；比如英语所在列为2
        let enTree=getTree.getTree(tableData, 'enLabel');
        // console.log(enTree)
        // 将json转换成字符串
        let data = JSON.stringify(enTree)
              data = 'export default' + data
        const blob = new Blob([data], {type: ''})
        FileSaver.saveAs(blob, 'en.ts')
      }

    }
}
</script>

<style>
.table-container {
  background-color: #fff;
  margin: 20px 0;
}
.table {
  width: 100%;
  margin-bottom: 30px;
  border-collapse: collapse;
}
tr:first-child {
  .td {
    font-weight: bold;
  }
}
.td {
  line-height: 40px;
  border: 1px solid #e8e8e8;
  text-align: center;
  font-size: 14px;
}
</style>
