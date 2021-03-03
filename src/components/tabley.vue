<template>
	<section class="table-container">
      <b>table</b>
      <div>
        <div class="ant-modal-footer" style="text-align: left;">
          <button class="primary" @click="exportExcel">导出excel</button>
          
        </div>
        <div class="ant-modal-footer" style="text-align: right;">
          <button @click="importE">导入new excel</button>
          <button class="primary" @click="exportZhJson">导出new ZhJson</button>
          <button class="primary" @click="exportZhJson">导出new EnJson</button>
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

export default {
	data() {
        return {
        tableScoreData: [   ],
        inData:[        
          {
            name: "路人甲",
            phone: "123456789",
            email: "000@123456.com"
          },
          {
            name: "炮灰乙",
            phone: "123456789",
            email: "000@123456.com"
          },
          {
            name: "土匪丙",
            phone: "123456789",
            email: "000@123456.com"
          },
          {
            name: "流氓丁",
            phone: "123456789",
            email: "000@123456.com"
          }
        ]
      }
    },
	mixins: [tableToExcel,init],
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
        Excel.importExcel((data, dataRef) => {
          alert("数据已经打印在控制台");
          console.log(data);
          console.log(dataRef);
        })
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
