// API
//import api_client from "@/axios/api_requests/clients.js";
// LIBS
//import { filterGridByField } from "@/libs/common/dataGridFilters.js";

//import { DataGrid } from "@/classes/dataGrids/dataGrid.js";
import api_be from '@/axios/api_be';

export default class EmpGrdDsc {
    constructor() {
      this.tableTitle='Список сотрудников';
      this.tableHeight="300px";
      this.tableWidth="1200px";
      this.tableColumns = [];
      this.tableRows = [];
      this.currentIndex=1;
      this.keyfield = null;

      console.log('Заполняем шапку таблицы'); 
      this.setHeader();
    }

    

    //----------------------------

    async loadData() {
        
        try {
            let l_opts = {};
            l_opts.batchsize = 100;
            this.tableRows.splice(0,this.tableRows.length);
            let l_records = await api_be.readEmps(l_opts);
            let ltRows = l_records.data.response;
            ltRows.forEach((element) => {
                this.tableRows.push(element);

            });

            console.log( JSON.stringify( this.tableRows ) , 'readEmps')
            console.log( '=====================' , 'readEmps')
        } catch (err){
            console.log(err.message, 'readEmps');
            alert(err.message);
        }	
        

    }
    async loadDataWithParm(  keyvalue ) {

        console.log('this.loadData start  ' + keyvalue);
        await this.loadData();
        console.log('this.loadData finish');
        var keyindex=this.getIndexByKey(keyvalue);
        console.log('Индекс по ключу =' + keyindex);
        return keyindex ;

    }

    get KeyFieldName(){
      return this.keyfield;
    }
    get Rows(){
      return this.tableRows;
    }
    
    get CurrentIndex(){
        return this.currentIndex;
    }

    get Header(){
      return this.tableColumns;
    }
   
    setHeader() {
      this.tableColumns = [
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
          ];
      this.keyfield = this.findKeyField();
      console.log( '------------------------>>>>>>>>>>'+ this.keyfield);
    }
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
    }

    /**
	* Найти индекс троки строкой  по ключу (ключевому полю)
	*/
	getIndexByKey( keyvalue ){
        let index = -1  
        let keyfield=this.KeyFieldName;
        //let that = this;
        console.log('Перебираю по масиву строк' + JSON.stringify( this.tableRows));

        this.tableRows.some(  function( item, i ) {
            
            console.log('Перебираю по масиву строк' + JSON.stringify(item));
            console.log('i=' + i);
            //console.log(item['key']);


            if ( item[keyfield] === keyvalue){
                index=i;
                console.log(index);
                
                return true;
            }
        });
        return index; 			   
			
	}



}
