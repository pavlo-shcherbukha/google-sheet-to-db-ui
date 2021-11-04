<template>
    <div class="container">
<!-- Компонент грида -->
            <data-table 
				ref="edt"
				v-if="tblshow"
                v-bind:tableTitle="tableTitle" 
                v-bind:tableColumns="tColumns"
                v-bind:tableRows="tRows"
                v-bind:tableHeight="tableHeight"
                v-bind:tableWidth="tableWidth"
				v-on:rowchanged="setCurrentRow"
            >
                <template v-slot:toolbar>
                    <a class="waves-effect waves-light btn" v-on:click="recordAdd">Добавить</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordEdit" ><i class="material-icons left">cloud</i>Редактровать</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordRetrieve"><i class="material-icons right">cloud</i>обновить</a>

                    <a class="waves-effect waves-light btn" v-on:click="findbykey"><i class="material-icons left">cloud</i>find-by-key</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordDelete"><i class="material-icons right">cloud</i>Удалить</a>


                </template>


            </data-table>

<!-- =================================== -->
<!-- Вспомогательное отображение текущей записи -->			
			<div class="row">
				<div class="col s12 m6">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
					<span class="card-title">Внутреннее представление записи</span>
						<p> {{this.theCurentRowData}}  </p>
					</div>
				</div>
				</div>
			</div>
<!-- =================================== -->

<!-- Компонент формы для добавлени записи-->			
			<add-record
				v-bind:title_oper="add_title_oper"
				v-bind:title_subj="add_title_subj"
				v-bind:open="addVisible"
				v-on:close="addHide"
			>
				<template v-slot:data>
					<form class="col s12">
                        <div class="row">
                           <div class="input-field col s6">
								<label for="xbrn" class="active">Табельный номер </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theNewRowData.TABNUM">
                               
                            </div>
                        </div>
                        <div class="row"><HR/></div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theNewRowData.FAM">
                                <label for="empname" class="active">Фамилия </label>
                            </div>
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theNewRowData.IM">
                                <label for="empname" class="active">ИМЯ </label>
                            </div>
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theNewRowData.OTCH">
                                <label for="empname" class="active">Отчество </label>
                            </div>

                        </div>
                        <div class="row"><HR/></div>


                        <div class="row">
                            <div class="input-field col s6">
								<label for="xbrn" class="active">Branch code </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theNewRowData.CODEBRN">
                               
                            </div>
							<div class="input-field col s6">
                                <input id="brnname" type="text" class="validate" v-model="theNewRowData.NAMEBRN">
                                <label for="brnname" class="active">Наименование отделения </label>
                            </div>
                        </div>
                        <div class="row"><HR/></div>
                            
                        <div class="row">
                            <div class="input-field col s6">
								<label for="xbrn" class="active">Принят </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theNewRowData.DS">
                               
                            </div>
							<div class="input-field col s6">
                                <input id="brnname" type="text" class="validate" v-model="theNewRowData.DF">
                                <label for="brnname" class="active">Уволен </label>
                            </div>
                        </div>
                    </form>

				</template>

				<template v-slot:menu>
					<a class="waves-effect waves-light btn" v-on:click="addrecordSave(1)"><i class="material-icons right">cloud</i>С=охранить</a>
					<a class="waves-effect waves-light btn" v-on:click="addrecordSave(2)"><i class="material-icons right">cloud</i>З=акрыть</a>
				</template>
			</add-record>


<!-- =================================== -->
<!-- Компонент формы для редактироания записи-->				
			<edit-record
				v-bind:title_oper="edt_title_oper"
				v-bind:title_subj="edt_title_subj"
				v-bind:open="editVisible"
				v-on:close="addHide"
				
			>
				<template v-slot:data>
					<form class="col s12">
                        <div class="row">
                           <div class="input-field col s6">
								<label for="xbrn" class="active">Табельный номер </label>
                                <input disabled placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theCurentRowData.TABNUM">
                               
                            </div>
                        </div>
                        <div class="row"><HR/></div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theCurentRowData.FAM">
                                <label for="empname" class="active">Фамилия </label>
                            </div>
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theCurentRowData.IM">
                                <label for="empname" class="active">ИМЯ </label>
                            </div>
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theCurentRowData.OTCH">
                                <label for="empname" class="active">Отчество </label>
                            </div>

                        </div>
                        <div class="row"><HR/></div>


                        <div class="row">
                            <div class="input-field col s6">
								<label for="xbrn" class="active">Branch code </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theCurentRowData.CODEBRN">
                               
                            </div>
							<div class="input-field col s6">
                                <input id="brnname" type="text" class="validate" v-model="theCurentRowData.NAMEBRN">
                                <label for="brnname" class="active">Наименование отделения </label>
                            </div>
                        </div>
                        <div class="row"><HR/></div>
                            
                        <div class="row">
                            <div class="input-field col s6">
								<label for="xbrn" class="active">Принят </label>
                                <input disable placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theCurentRowData.DS">
                               
                            </div>
							<div class="input-field col s6">
                                <input id="brnname" type="text" class="validate" v-model="theCurentRowData.DF">
                                <label for="brnname" class="active">Уволен </label>
                            </div>
                        </div>
                    </form>

				</template>
			
				<template v-slot:menu>
					<a class="waves-effect waves-light btn" v-on:click="editrecordSave(1)"><i class="material-icons right">cloud</i>С=охранить</a>
					<a class="waves-effect waves-light btn" v-on:click="editrecordSave(2)"><i class="material-icons right">cloud</i>З=акрыть</a>
				</template>
			</edit-record>
<!-- =================================== -->
<!-- Компонент сообщения о ошибке-->

			<div>
                <error-msg :show="err_show" :title="err_title" @close="error_close">
                <p>  {{ err_msg }}</p>
                </error-msg>

            </div> 


<!-- =================================== -->
<!-- -->

			


    </div>
</template>

<script>

import api_be from '@/axios/api_be';

import DataTable from '@/components/PvxDataTable/DataTable';
//import BaseModal from '@/components/tableview3edit/BaseModal';
//import SDialogBase from '@/components/tableview3edit/SDialogBase';
import EditTable3 from '@/components/tableview3edit/EditTable3';

import ErrorMsg from '@/components/messageboxes/ErrorMsg';
//import { resolveTransitionHooks } from '@vue/runtime-core';


export default {
    components: {
            DataTable,
			"edit-record": EditTable3,
            "add-record":  EditTable3,
			"error-msg": ErrorMsg,
    },
    computed: {
         

    },
    data: () => ({

        err_show: false,
        err_title: 'Error Title',
        err_msg: 'Error messagebox',


		tblshow: true,
		edt_title_oper: "Корректировка/изменние", /* окно режактирования: заголовок 1 */
		edt_title_subj: "Данные о сотруднике",    /* окно режактирования: заголовок 2 */
		add_title_oper: "Добавить", /* окно режактирования: заголовок 1 */
		add_title_subj: "Данные о сотруднике",    /* окно режактирования: заголовок 2 */

		theCurenRowIndex: 0, /**индекс текуще строки */
		theCurentRowData: {}, /**Данные текущей строки */
		theNewRowData: {
			TABNUM:  "",
			CODEBRN: "",
			NAMEBRN: "",
			FAM:     "",
			IM:      "",
			OTCH:    "",
			ADRESS:  "",
			MSTATUS: "",
			COUNTRY: "",
			DS:      "",
			DF:      ""

		}, /**Данные новой строки */

		//dialogIsVisible: false,
		shdialogIsVisible: false,

		addVisible: false, /** Показать-скрыть диалог добавления */
		editVisible: false, /**Показа-скрыть диалог редактироания */
        //testmsg: 'TableView3',   /** */
        tableTitle: 'Это таблица',  /** параметры таблицы */
        tableHeight: "300px",       /** параметры таблицы   */
        tableWidth: "1200px",        /** параметры таблицы */
        tColumns: [
			{ 
                label: "Таб.ном",
                width: "auto",
                field: "TABNUM",
				key: true

            },
            { 
                label: "Отд.Код",
                width: "auto",
                field: "CODEBRN",
				key: false

            },
            { 
                label: "Отд.Наим.",
                width: "auto",
                field: "NAMEBRN",
				key: false

            },
            { 
                label: "Фамилия",
                width: "auto",
                field: "FAM",
				key: false

            },
			{ 
                label: "ИМЯ",
                width: "auto",
                field: "IM",
				key: false

            },
			{ 
                label: "Отчество",
                width: "auto",
                field: "IM",
				key: false

            },
            { 
                label: "Дата",
                width: "auto",
                field: "DS",
				key: false

            },
        ],
        tRows: [],  /**массив строк */
    }),
    created() {
		// вычитываю записи с сервера
		//this.readEmps();
		this.recordRetrieve();

    },

    methods:{
		/**
		 * Небольшой сервисній логгер
		 */
		log( msg, where){
			if (    typeof p_value === "undefined" ||  where === null  ){
				where = 'logger';	
			} 
			console.log(where + ': ' + msg );
		},
		/** Добавить запись */
		
        recordAdd(){
			this.addVisible=true;
	


        },
		/**
		 * Редактировать записть
		 */
        recordEdit(){
            if ( this.theCurenRowIndex >= 0 ){
				let ltabnum=this.theCurentRowData.TABNUM;	
				this.readEmp(ltabnum)
				.then( result => {
					this.log('Read record' + JSON.stringify(result), 'recordEdit');
					this.editVisible=true;

				});
			}
			

			


        },
		/**
		 * Редактировать записть
		 */
        recordDelete(){
            if ( this.theCurenRowIndex >= 0 ){
				let ltabnum=this.theCurentRowData.TABNUM;	
				this.deleteEmp(ltabnum)
				.then( result => {
					this.log('Read record' + JSON.stringify(result), 'deleteRecord');
					//this.editVisible=true;

				});
			}
			

			


        },

		/**
		 * Перечитать записи с сервера
		 */
        recordRetrieve(){
			let that=this;
			this.readEmps()
			.then( ()=>{
				that.theCurenRowIndex=-1;
				if ( that.tRows.length > 0) {
					that.theCurenRowIndex=0
					that.$refs.edt.setRow(this.theCurenRowIndex);	
				}
				return that.tRows.length;
			});
        },
		
		// showDialog() {
		// 	this.dialogIsVisible = true;
		// },
		// hideDialog() {
		// 	this.dialogIsVisible = false;
		// },

        /**
		 *  Добавлени записи: Реакция на событие закрытия акна добавелния записи  
		 * ??? Может и не нужна пока
		 */ 
		addHide(){
			this.addVisible = false;
		},

		/**
		 *  Добавлени записи: Реакция на событие нажатия кнопок в окне добавления  
		 */
		addrecordSave(value){
			this.addVisible = false;
			let that = this;
			if (value===1){
				let l_opts = {};
				l_opts.empdata= {
							TABNUM:  this.theNewRowData.TABNUM, 
							CODEBRN: this.theNewRowData.CODEBRN, 
							NAMEBRN: this.theNewRowData.NAMEBRN, 
							FAM:     this.theNewRowData.FAM, 
							IM:      this.theNewRowData.IM, 
							OTCH:    this.theNewRowData.OTCH, 
							ADRESS:  this.theNewRowData.ADRESS, 
							MSTATUS: this.theNewRowData.MSTATUS,
							COUNTRY: this.theNewRowData.COUNTRY, 
							DS:      this.theNewRowData.DS,
							DF:      this.theNewRowData.DF
				};
				api_be.createEmp(l_opts)
				.then( result => {
					that.addVisible=false;
					that.log('Save result' + JSON.stringify(result), 'recordAdd');
							

				})
				.catch( err =>{
						that.addVisible=false
						//alert( 'add record error ' + err.message );
						that.err_show= true;
						that.err_title= 'Внимание! ';
						that.err_msg= 'Ошибка при сохранении  данных по клиенту! ' + err.error.data.error.message + ' - ' + JSON.stringify(err.error.data.error.errordetails);


				});

			} else {
				//

			}
			
			
		},
		/**
		 * Редактирование записи: Созранить результаті редактирования на сервере
		 */
		editrecordSave(value){
			this.editVisible = false;
			this.log('Редактирование записи: ' + value);
			if (value===1){
				// сохранить значит
				var l_tabnum = this.theCurentRowData.TABNUM;
				var that=this;
				this.updateEmp( l_tabnum)
				.then(result=>{
					//alert("updaye-ok=" + result)
					that.log('Update record: ' + result);
					return that.recordRetrieve()
				})
				.catch(err=>{
					alert( "update error"+ err.message);
				});


			} else {
				//сбросить редактирование
			}
			
		},
		/**
		 * Обработчик события грида [rowchnged]
		 * устанавливаем индекс и заполняетм данніе текуще строки
		 */
		setCurrentRow(rowindex){
			this.theCurenRowIndex=rowindex;
			this.theCurentRowData=this.tRows[this.theCurenRowIndex];
		},

		/**
		 * Читаем с сервера данные о сутруднике и заполнем  массив tRows
		 */
		async readEmps(){
			let l_opts = {};
			l_opts.batchsize = 100;
			this.tRows.splice(0,this.tRows.length);
			try {
				let l_records = await api_be.readEmps(l_opts);
				let ltRows = l_records.data.response;
				ltRows.forEach((element) => {
						this.tRows.push(element);

				});

				this.log( JSON.stringify( this.tRows ) , 'readEmps')
				this.log( '=====================' , 'readEmps')
			} catch (err){
				this.log(err.message, 'readEmps');
				alert(err.message);
			}	
		},
		/**
		 * Прочитать данные одного сотрудника
		 */
		async readEmp( atabnum ){
			let l_opts = {};
			l_opts.tabnum = atabnum;
			try {
				//this.p_record = [];
				let l_data = await api_be.readEmp(l_opts);
				let l_record = l_data.data.response;
				this.log( JSON.stringify( l_record[0] ) , 'readEmp:' + l_opts.tabnum);
				this.theCurentRowData=l_record[0];
				return l_record[0];
				
			} catch (err){
				this.log(err.message, 'readEmp'  + l_opts.tabnum );
				alert(err.message);
				return null;
			}	

		},
		/**
		 * Обновить данные по сотрудникуI
		 */
		async updateEmp( atabnum ){
			let l_opts = {};
			l_opts.tabnum = atabnum;
			l_opts.empdata= {
						CODEBRN: this.theCurentRowData.CODEBRN, 
						NAMEBRN: this.theCurentRowData.NAMEBRN, 
						FAM:     this.theCurentRowData.FAM, 
						IM:      this.theCurentRowData.IM, 
						OTCH:    this.theCurentRowData.OTCH, 
						ADRESS:  this.theCurentRowData.ADRESS, 
						MSTATUS: this.theCurentRowData.MSTATUS,
						COUNTRY: this.theCurentRowData.COUNTRY, 
						DS:      this.theCurentRowData.DS.substr(0,10),
						DF:      this.theCurentRowData.DF
			};
			try {
				//this.p_record = [];
				let l_data = await api_be.updateEmp(l_opts);
				this.log( JSON.stringify( l_data ) , 'updateEmp:' + l_opts.tabnum);
				return true;
				
			} catch (err){
				this.log(err.message, 'updateEmp'  + l_opts.tabnum );
				alert(err.message);
				return false;
			}	

		},
		/**
		 * Удалить данные одного сотрудника
		 */
		async deleteEmp( atabnum ){
			let l_opts = {};
			l_opts.tabnum = atabnum;
			try {
				//this.p_record = [];
				let l_data = await api_be.deleteEmp(l_opts);
				let l_record = l_data.data.response;
				this.log( JSON.stringify( l_record[0] ) , 'deleteEmp:' + l_opts.tabnum);
				return l_record[0];
				
			} catch (err){
				this.log(err.message, 'deleteEmp'  + l_opts.tabnum );
				alert(err.message);
				return null;
			}	

		},

		findbykey(){
			let l_tabnum = '00002';
			this.$refs.edt.setRowByKey( l_tabnum);
						this.err_show= true;
						this.err_title= 'Внимание! ';
						this.err_msg= 'Ошибка при сохранении  данных по клиенту! ' ;

		},
		error_close(){
            this.err_show = false;
		}	


    },
   
}
</script>

<style>

</style>
