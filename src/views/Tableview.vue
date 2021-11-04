<template>
    <div class="container">
		<div class="card-content">
            <data-table 
                v-bind:tableTitle="tableTitle" 
                v-bind:tableColumns="tColumns"
                v-bind:tableRows="tRows"
                v-bind:tableHeight="tableHeight"
                v-bind:tableWidth="tableWidth"
            >
                <template v-slot:toolbar>
                    <a class="waves-effect waves-light btn" v-on:click="recordAdd">Добавить</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordEdit" ><i class="material-icons left">cloud</i>Редактровать</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordRetrieve"><i class="material-icons right">cloud</i>обновить</a>


                </template>


            </data-table>

		</div>
		<div class="card-content">
            <data-table 
                v-bind:tableTitle="tableTitle" 
                v-bind:tableColumns="tColumns"
                v-bind:tableRows="tRows"
                v-bind:tableHeight="tableHeight"
                v-bind:tableWidth="tableWidth"
            >
                <template v-slot:toolbar>
                    <a class="waves-effect waves-light btn" v-on:click="recordAdd">Добавить</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordEdit" ><i class="material-icons left">cloud</i>Редактровать</a>
                    <a class="waves-effect waves-light btn" v-on:click="recordRetrieve"><i class="material-icons right">cloud</i>обновить</a>


                </template>


            </data-table>
		</div>	

    
    </div>

                  

      
    
 
  
</template>

<script>

import DataTable from '@/components/PvxDataTable/DataTable';
export default {
    components: {
            DataTable,
		
    },
    computed: {
         

    },
    data: () => ({
        testmsg: 'TableView3',
        tableTitle: 'Это таблица',
        tableHeight: "200px",
        tableWidth: "800px",
        tColumns: [
            { 
                label: "Столбец 1",
                width: "auto",
                field: "brn"

            },
            { 
                label: "Столбец 2",
                width: "auto",
                field: "brnname"

            },
            { 
                label: "Столбец 3",
                width: "auto",
                field: "empname"

            },
            { 
                label: "Дата",
                width: "auto",
                field: "idt"

            },
        ],
        tRows: [
            {
				brn: "001",
				brnname: "Отделение цетральное",
				empname: "Петренко",
				idt: "2021-04-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},
            {
				brn: "002",
				brnname: "Отделение пляжное",
				empname: "Василенко",
				idt: "2021-06-21T14:23:32"
			},

        ],
    }),
    mounted() {

    },

    methods:{
        recordAdd(){
            alert('recordAdd');

        },
        recordEdit(){
            alert('recordEdit');

        },
        recordRetrieve(){
            alert('recordsRetrieve');
        },
    },
   
}
</script>

<style>

</style>
