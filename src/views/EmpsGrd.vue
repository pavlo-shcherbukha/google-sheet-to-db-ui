<template>
  <div class="container">
  

      <!-- Компонент грида -->
      <data-table 
                v-bind:tableTitle="datagrid.tableTitle" 
                v-bind:tableColumns="datagrid.tableColumns"
                v-bind:tableRows="datagrid.tableRows"
                v-bind:tableHeight="datagrid.tableHeight"
                v-bind:tableWidth="datagrid.tableWidth"
                v-bind:keyfieldname="datagrid.KeyFieldName" 
                v-on:dtbupdated="ev_updated"
                ref='tbl'
      >
                <template v-slot:toolbar>
                    <a class="waves-effect waves-light btn" v-on:click="recordAdd">Добавить</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordEdit" ><i class="material-icons left">cloud</i>Редактровать</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordRetrieve"><i class="material-icons right">cloud</i>обновить</a>

                    <a class="waves-effect waves-light btn" v-on:click="dopfunc"><i class="material-icons left">cloud</i>find-by-key</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordDelete"><i class="material-icons right">cloud</i>Удалить</a>


                </template>


      </data-table>

<!-- =================================== -->
      <div>
        <p> Ключевое поле: {{datagrid.KeyFieldName}}  </p>
      </div>

      <add-emp
        v-bind:isopen="addemp_open"
        v-on:addempclose="addemp_close"
      >
      </add-emp>

      <edit-emp
        v-bind:isopen="edtemp_open"
        v-on:edtempclose="edtemp_close"
        ref="edt"
      >
      </edit-emp>
      <delete-emp        
          v-bind:isopen="delemp_open"
          v-on:deleteempclose="delemp_close"
          ref="del"
      >

      </delete-emp>
  
  </div>  
</template>

<script>
//import api_be from '@/axios/api_be';
import DataTable from '@/components/emps/DataTable3';
import EmpGrdDsc from '@/components/PvxDataTable/EmpGrdDsc.js';
import addEmp from '@/components/emps/addEmp';
import editEmp from '@/components/emps/editEmp';
import deleteEmp from '@/components/emps/deleteEmp';
import { success_message } from "@/lib/messages.js";
export default {
    components: {
      "data-table": DataTable,
      "add-emp":  addEmp,
      "edit-emp": editEmp,
      "delete-emp": deleteEmp,
    },
    computed: {
    },
    data: () => ({
      title: "Список співробітників",
      addemp_open: false,
      edtemp_open: false,
      delemp_open: false,
      datagrid: new EmpGrdDsc(),
    
    

    }),
    created() {
		// вычитываю записи с сервера
		this.datagrid.loadData();
		

    },
    methods:{
      async recordAdd(){
        this.addemp_open=true;

      },
      async addemp_close(value, keyvalue){
         this.addemp_open=false;
        //alert('close event with ' + value + 'ketvalue=' + keyvalue);
        var keyindex=await this.datagrid.loadDataWithParm(keyvalue);
        console.log(' the keyindex=' + keyindex );
        this.$refs.tbl.selectRow(keyindex);
        await success_message(
                        "Внимание",
                        "Запись успешно добавлена!"
        );
      },
      async recordEdit(){
          let cindex = this.$refs.tbl.curentRow;
          let ctabnum = this.datagrid.Rows[cindex].TABNUM;
          await this.$refs.edt.readRecordByKey(ctabnum);
          this.edtemp_open=true;
      },
      async edtemp_close(value, keyvalue){
          this.edtemp_open=false;
          var keyindex = await this.datagrid.loadDataWithParm(keyvalue);
          console.log(' the keyindex=' + keyindex );
          this.$refs.tbl.selectRow(keyindex);
          await success_message(
                        "Внимание",
                        "Запись успешно отредактирована!"
              );
      },
      async recordDelete(){
          let cindex = this.$refs.tbl.curentRow;
          let ctabnum = this.datagrid.Rows[cindex].TABNUM;
          //alert('TABNUM IS ' + ctabnum);
          await this.$refs.del.readRecordByKey(ctabnum);
          this.delemp_open=true;

      },
      async delemp_close(value){
          this.delemp_open=false;
          if (value ===1) {
              await success_message(
                        "Внимание",
                        "Запись успешно удалена!"
              );
              console.log(' the value=' + value );
              await this.datagrid.loadData();
              this.$refs.tbl.setRow(1);
          } else {
              console.log('просто закрыли');
          }
      },
      
      
      ev_updated(){
         console.log("Table Redrow");
      },
      async recordRetrieve(){
        this.datagrid.loadData();
        //var keyindex=await this.datagrid.loadDataWithParm('00006');
        //console.log(' the keyindex=' + keyindex );
        //this.$refs.tbl.selectRow(keyindex);
        this.$refs.tbl.selectRow( 0 );
        

      },
      async dopfunc(){

      },

 

    }
    
}
</script>

<style scoped>
</style>



