<template>
  <div class="container">
        <div class="card material-table">
          <div class="table-header">
              <span class="table-title">{{ title }}</span>
          </div>
          <table>
            <thead>
              <tr>
                  <th>CODEBRN</th>
                  <th>NAMEBRN</th>
                  <th>TABNUM</th>
                  <th>FAM</th>
                  <th>IM</th>
                  <th>OTCH</th>
                  <th>ADRESS</th>
                  <th>MSTATUS</th>
                  <th>COUNTRY</th>
                  <th>DS</th>
                  <th>DF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>CODEBRN</td>
                  <td>NAMEBRN</td>
                  <td>TABNUM</td>
                  <td>FAM</td>
                  <td>IM</td>
                  <td>OTCH</td>
                  <td>ADRESS</td>
                  <td>MSTATUS</td>
                  <td>COUNTRY</td>
                  <td>DS</td>
                  <td>DF</td>
              </tr>


            </tbody>
          </table>

        </div>


        <span class="card-title">Автомат підписалки</span>
       



             <ul class="collection">
                <li class="collection-item avatar">
                    One
                     
                </li>
                <li class="collection-item avatar">
                    Two
                     
                </li>
             </ul>  
  </div>  
</template>

<script>
import api_be from '@/axios/api_be';
export default {
    components: {
    },
    computed: {

    },
    data: () => ({
      title: "Список співробітників"
     

    }),
    mounted() {
      //this.log4g('Вхід: Robot.vue');
    },
     beforeDestroy(){
        // Перед выходом, очистить таймеры
        //this.stopworker();
        //this.log4g( 'Вихід: Robot.vue' );

    },
    methods:{
		
      /**
       * Логгер, анстроенный на плагин
       */
      // log4g(msg){
      //   console.log(msg);
      //   this.$addlogmsg(msg,'INFO', null, 'Robot.vue');
      // },
      /**
       * Простелький логгер 
       */
      // log( msg, msglabel, details, where ){
      //     let logrec = this.$createLogrec();
      //     logrec.message=msg;
      //     //msglabel, details, where

      //     if (typeof msglabel === "undefined" || msglabel===null || msglabel===''){
      //         logrec.msglabel = 'INFO';
      //     } else {
      //       logrec.msglabel = msglabel ;
      //     }

      //     if (typeof details === 'string'){
      //       logrec.details = details;
      //     }

      //     if (typeof msg === 'string'){
      //       logrec.message = msg;
      //     }

      //     if (typeof where === 'string'){
      //       logrec.where = where;
      //     }
      //     this.xlogmsg.push( logrec );
      // },



    }
    
}
</script>

<style scoped>
  div.material-table {
		padding: 0;
	}

	tr.clickable {
		cursor: pointer;
	}

	#search-input {
		margin: 0;
		border: transparent 0 !important;
		height: 48px;
		color: rgba(0, 0, 0, .84);
	}

	#search-input-container {
		padding: 0 14px 0 24px;
		border-bottom: solid 1px #DDDDDD;
	}

	table {
		table-layout: fixed;
	}

	.table-header {
		height: 64px;
		padding-left: 24px;
		padding-right: 14px;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		display: flex;
		-webkit-display: flex;
		border-bottom: solid 1px #DDDDDD;
	}

	.table-header .actions {
		display: -webkit-flex;
		margin-left: auto;
	}

	.table-header .btn-flat {
			min-width: 36px;
			padding: 0 8px;
	}

	.table-header input {
		margin: 0;
		height: auto;
	}

	.table-header i {
		color: rgba(0, 0, 0, 0.54);
		font-size: 24px;
	}

	.table-footer {
		height: 56px;
		padding-left: 24px;
		padding-right: 14px;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-justify-content: flex-end;
		justify-content: flex-end;
		-webkit-align-items: center;
		align-items: center;
		font-size: 12px !important;
		color: rgba(0, 0, 0, 0.54);
	}

	.table-footer .datatable-length {
		display: -webkit-flex;
		display: flex;
	}

	.table-footer .datatable-length select {
		outline: none;
	}

	.table-footer label {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.54);
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		/* works with row or column */

		flex-direction: row;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
	}

	.table-footer .select-wrapper {
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		/* works with row or column */

		flex-direction: row;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
	}

	.table-footer .datatable-info,
	.table-footer .datatable-length {
		margin-right: 32px;
	}

	.table-footer .material-pagination {
		display: flex;
		-webkit-display: flex;
		margin: 0;
	}

	.table-footer .material-pagination li a {
		color: rgba(0, 0, 0, 0.54);
		padding: 0 8px;
		font-size: 24px;
	}

	.table-footer .select-wrapper input.select-dropdown {
		margin: 0;
		border-bottom: none;
		height: auto;
		line-height: normal;
		font-size: 12px;
		width: 40px;
		text-align: right;
	}

	.table-footer select {
		background-color: transparent;
		width: auto;
		padding: 0;
		border: 0;
		border-radius: 0;
		height: auto;
		margin-left: 20px;
	}

	.table-title {
		font-size: 20px;
		color: #000;
	}

	table tr td {
		padding: 0 0 0 56px;
		height: 48px;
		font-size: 13px;
		color: rgba(0, 0, 0, 0.87);
		border-bottom: solid 1px #DDDDDD;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	table td, table th {
		border-radius: 0;
	}

	table tr td a {
		color: inherit;
	}

	table tr td a i {
		font-size: 18px;
		color: rgba(0, 0, 0, 0.54);
	}

	table tr {
		font-size: 12px;
	}

	table th {
		font-size: 12px;
		font-weight: 500;
		color: #757575;
		cursor: pointer;
		white-space: nowrap;
		padding: 0;
		height: 56px;
		padding-left: 56px;
		vertical-align: middle;
		outline: none !important;

		overflow: hidden;
		text-overflow: ellipsis;
	}

	table th:hover {
		overflow: visible;
		text-overflow: initial;
	}

	table th.sorting-asc,
	table th.sorting-desc {
		color: rgba(0, 0, 0, 0.87);
	}

	table th.sorting:after,
	table th.sorting-asc:after {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 16px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		word-wrap: normal;
		-webkit-font-feature-settings: 'liga';
		-webkit-font-smoothing: antialiased;
		content: "arrow_back";
		-webkit-transform: rotate(90deg);
		display: none;
		vertical-align: middle;
	}

	table th.sorting:hover:after,
	table th.sorting-asc:after,
	table th.sorting-desc:after {
		display: inline-block;
	}

	table th.sorting-desc:after {
		content: "arrow_forward";
	}

	table tbody tr:hover {
		background-color: #EEE;
	}

	table th:last-child,
	table td:last-child {
		padding-right: 14px;
	}

	table th:first-child, table td:first-child {
		padding-left: 24px;
	}

	.rtl {
		direction: rtl;
	}
</style>



