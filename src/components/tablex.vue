<template>
	<section class="table-container">
      <b>table</b>
      <table class="table" id="myTab">
        <tr
          v-for="(row, index) in tableScoreData"
          :key="index"
        >
          <td v-for="(item, i) in row" :key="i" class="td">{{item}}</td>
        </tr>
      </table>
      
      <table class="table" id="myTab2">
        <tr
          v-for="(row, index) in tableFruitData"
          :key="index"
        >
          <td v-for="(item, i) in row" :key="i" class="td">{{item}}</td>
        </tr>
      </table>
      
      <div class="ant-modal-footer" style="text-align: center;">
        <button class="primary" @click="exportExcel">导出</button>
      </div>
    </section>
</template>

<script>
import tableToExcel from '../mixins/tableToExcel'

export default {
	data() {
        return {
        tableScoreData: [
            ['NAME', 'SEX', 'SCORE'],
            ['Bill', 'Male', 96],
            ['Amy', 'Female', 55.65],
            ['Mike', 'Male', 88]
        ],
        tableFruitData: [
            ['CLASS', 'COUNT', 'PERCENT'],
            ['301', '100', '20%'],
            ['302', '200', '40%'],
            ['303', '200', '40%'],
        ]
      }
    },
	mixins: [tableToExcel],
	methods: { 
        exportExcel() {
            this.tableToExcel([
              {
                  id: 'myTab',
                  name: '成绩表'
              },
              {
                  id: 'myTab2',
                  name: '班级表'
              }
            ], '导出结果')
        
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
