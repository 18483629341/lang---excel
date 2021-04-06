// 文档：https://docs.sheetjs.com/#array-of-objects-input
import XLSX from 'xlsx'
// import XLSX from 'xlsx-style' // ./cptable 报错
export default {
  methods: {
    /***
     * table导出为excel并下载到本地
     * @tableList 表格数据（可能存在多张表的情况）例如： [{id: 'myTab', name: 'sheet'}]
     * @fileName 下载的文件名称
     */
    tableToExcel(tableList, fileName) {
      let table, worksheet
      let workbook = XLSX.utils.book_new();
      tableList.map((item) => {
        table = document.getElementById(item.id);
        worksheet = XLSX.utils.table_to_sheet(table, {
          raw: true // 让所有单元格都以字符串显示，否则90%会显示成0.9
        });
        XLSX.utils.book_append_sheet(workbook, worksheet, item.name);
        workbook["Sheets"][item.name]["!cols"] = new Array(10).fill({ wpx: 200 }) // 单元格列宽
      })
      try {
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
      } catch (e) {
        console.log(e, workbook);
      }
    }
  }
}

