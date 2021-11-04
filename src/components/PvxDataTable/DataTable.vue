<template>
	<div class="card material-table" :style="{width: tableWidth ? tableWidth : 'auto'}">
		<div class="table-header">
				<span class="table-title">{{ tableTitle }}</span>
			
		</div>
		<div class="card-action">
			<slot name="toolbar"></slot>
		</div>
		<table class="highlight" >
				<thead>
					<tr> <th><i class="material-icons">more_vert</i></th>
						<th v-for="(column, index) in tableColumns" 
								:key="index"
								:style="{width: column.width ? column.width : 'auto'}"
								
						>		
							{{ column.label }}
						
							<a v-if="sortOrder==='asc' && index===sortIndex" class="waves-effect waves-light btn" v-on:click="sortclick(index)"><i class="material-icons right">expand_less</i></a>
							
							<a v-else class="waves-effect waves-light btn" v-on:click="sortclick(index)"><i class="material-icons right">expand_more</i></a>
						</th>
					</tr>
				</thead>
				<tbody :style="{height: tableHeight ? tableHeight : '100px'}">
					<tr v-for="(row, index) in rows"
						:key="index"
						v-on:click="selectRow(index)"
						v-on:keypress.arrow-up="selectRow(index)"
						v-on:keyup.page-down="selectRow(index)"
						:style="index === curentRow ? {'background-color': 'rgba(240, 93, 8, 0.952)' } : {'background-color': 'white' } "
					>	   
							<td>
								<p>
									<label>
										<input type="checkbox" class="filled-in" v-on:click.prevent="preventclick" :checked="index === curentRow ? 1 : 0"/>
										<span> </span>
									</label>
								</p>
							</td>
							<td v-for="(column, index) in tableColumns"
								:key="index"
							>	
								

								{{ row[ column.field ] }} 
								
							</td>

					</tr>
				</tbody>	

		</table>	
		<div class="table-footer">
			<p> Secelted row={{ curentRow }}  Это footer грида </p>
			
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			tableTitle: {
				type: String,
				required: true,
			},
			tableWidth: { 	type: String, 
							required: true
			},
			tableHeight: { 	type: String, 
							required: true
			},
			/**
			 * {
			 *   label: "Столбец 3",
             *   width: "auto",
			 *   
			 */
			tableColumns: {
				type: Array,
				required: true,
			},
			tableRows: {
				type: Array,
				required: true,
			},

		},
		emits: ['rowchanged'],
		data() {
			return {
				curentRow: 0,
				KeyField: '',
				rows: this.tableRows,
				sortOrder: 'asc',
				sortIndex: 0,
			};
		},
		methods: {
			/**
			 * Отрисовка текущей стрки контрастным курсором
			 * запоминиание  индекса текущей строки
			 * генерация события [rowchanged]  о смене строки 
			 */
			selectRow( rowindex ){
				this.curentRow = rowindex; 
				this.$emit('rowchanged', rowindex);
		
			},
			/**
			 * Сортировка колокни. Обратока клика на шапке
			 * сортировка по клику на заголовке колонки
			 */
			sortclick( idx ){
				if (idx===this.sortIndex){
					if ( this.sortOrder==='asc' ){
						this.sortOrder='desc';
					} else {
						this.sortOrder='asc';
					}

				} else {
					this.sortIndex=idx;
					this.sortOrder='asc';

				}	

				this.sortObject();
			},
			/**
			 * Сортировка колонки. Сортировка єлементов массива
			 * 
			 */
			sortObject(){
				//alert("sort row");
				var fieldname = this.tableColumns[this.sortIndex].field;
				var modif = 1;
				if (this.sortOrder==='desc'){
					modif = -1;
				}
				this.rows.sort( function(x1,x2) {
						if (x1.[fieldname] < x2.[fieldname]) return -1 * modif;
						if (x1.[fieldname] > x2.[fieldname]) return 1 * modif;
						return 0;
				});
			},
			/**
			 * Сделать текущей строкой строку по rowIndex
			 */
			setRow(rowIndex){
				this.selectRow(rowIndex);
			},
			/**
			 * Сделать текущей строкой строку по ключу (ключевому полю)
			 */
			setRowByKey( keyvalue ){
                let index = -1  
				let keyfield=this.findKeyField();
				//let that = this;
				console.log('Перебираю по масиву строк' + JSON.stringify( this.rows));

				this.rows.some(  function( item, i ) {
					
					console.log('Перебираю по масиву строк' + JSON.stringify(item));
					console.log('i=' + i);
					//console.log(item['key']);


					if ( item[keyfield] === keyvalue){
						index=i;
						console.log(index);
						
						return true;
					}
				});
				this.setRow(index); 			   
			
			},
			/**
			 * В массиве колокно найти ключевое поле
			 */
			findKeyField(){
				var result = -1;
				this.tableColumns.some(function (item, i) {
					if (item['key'] === true) {
						result = i;
						return true;
					} 	
				});	
                return this.tableColumns[ result ].field;
            },
		}
	}
</script>

<style scoped>
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

	.table-title {
		font-size: 20px;
		color: #000;
		
	}

	tbody {
	display: block;
	overflow: auto;
	}

table.highlight>tbody>tr:hover {
    background-color: rgba(240, 93, 8, 0.952) ;
}
table.highlight>tbody>tr {
    color: black; 
}

	thead, tbody tr {
	display: table;
	width: 100%;
	table-layout: fixed;
	border: 1px solid black;
	}

	td, th {
	border: 1px solid black;
	}

	thead {
	width: calc( 100% - 1em )
	}
	table {
	width: 100%;
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


</style>


