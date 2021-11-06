<template>
    <edit-table
        v-bind:title_oper="title_oper"
		v-bind:title_subj="title_subj"
		v-bind:open="isopen"
    >

                <template v-slot:data>
					<form class="col s12">
                        <div class="row">
                           <div class="input-field col s6">
								<label for="xbrn" class="active">Табельный номер </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theRowData.TABNUM">
                               
                            </div>
                        </div>
                        <div class="row"><HR/></div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theRowData.FAM">
                                <label for="empname" class="active">Фамилия </label>
                            </div>
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theRowData.IM">
                                <label for="empname" class="active">ИМЯ </label>
                            </div>
                            <div class="input-field col s12">
                                <input id="empname" type="text" class="validate" v-model="theRowData.OTCH">
                                <label for="empname" class="active">Отчество </label>
                            </div>

                        </div>
                        <div class="row"><HR/></div>


                        <div class="row">
                            <div class="input-field col s6">
								<label for="xbrn" class="active">Branch code </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theRowData.CODEBRN">
                               
                            </div>
							<div class="input-field col s6">
                                <input id="brnname" type="text" class="validate" v-model="theRowData.NAMEBRN">
                                <label for="brnname" class="active">Наименование отделения </label>
                            </div>
                        </div>
                        <div class="row"><HR/></div>
                            
                        <div class="row">
                            <div class="input-field col s6">
								<label for="xbrn" class="active">Принят </label>
                                <input placeholder="Placeholder" id="xbrn" type="text" class="validate" v-model="theRowData.DS">
                               
                            </div>
							<div class="input-field col s6">
                                <input id="brnname" type="text" class="validate" v-model="theRowData.DF">
                                <label for="brnname" class="active">Уволен </label>
                            </div>
                        </div>
                    </form>

				</template>

				<template v-slot:menu>
					<a class="waves-effect waves-light btn" v-on:click="submitdata(1)"><i class="material-icons right">cloud</i>Сохранить</a>
					<a class="waves-effect waves-light btn" v-on:click="submitdata(2)"><i class="material-icons right">cloud</i>Закрыть</a>
				</template>


    </edit-table>
</template>
<script>
import api_be from '@/axios/api_be';
import EditTable from '@/components/emps/EditTable';
import { error_message, /*confirmation_message*/  } from "@/lib/messages.js";
export default {
    components: {
        'edit-table': EditTable,
    },
    props: {
        
        isopen: {
				type: Boolean,
				required: true,
		},
    },
    data: ()=>({
        title_oper: "Редактироать запись",
        title_subj: "Данные о сотруднике",
        isVisible:  true,  
        key: null,
        theRowData: {},
    }),
    emits: ['edtempclose'],
    
    methods:{

       async submitdata( submitvalue ){
            this.isVisible=false;
            if (submitvalue === 1){
     
                let l_opts = {};
                l_opts.tabnum = this.key;
                l_opts.empdata= {
                            CODEBRN: this.theRowData.CODEBRN, 
                            NAMEBRN: this.theRowData.NAMEBRN, 
                            FAM:     this.theRowData.FAM, 
                            IM:      this.theRowData.IM, 
                            OTCH:    this.theRowData.OTCH, 
                            ADRESS:  this.theRowData.ADRESS, 
                            MSTATUS: this.theRowData.MSTATUS,
                            COUNTRY: this.theRowData.COUNTRY, 
                            DS:      this.theRowData.DS.substr(0,10),
                            DF:      this.theRowData.DF
                };
                try {
                    //this.p_record = [];
                    let l_data = await api_be.updateEmp(l_opts);
                    console.log( JSON.stringify( l_data ) );
                    this.$emit( 'edtempclose', submitvalue, this.key);
                    return true;
                    
                } catch (err){
                    console.log(err.message,  );
                    //alert(err.message);
                    await error_message(
                        "Внимание",
                        "Ошибка при сохранении записи: " + + err.error.data.error.message + ' - ' + JSON.stringify(err.error.data.error.errordetails)
                    );
                    this.$emit( 'edtempclose', submitvalue);
                    return false;
                }	


            } else {
                this.$emit( 'edtempclose', submitvalue);
            }
            


        },
        async readRecordByKey(  keyvalue ){
            this.key=keyvalue;
            let l_opts = {};
			l_opts.tabnum = this.key;
			try {
				//this.p_record = [];
				let l_data = await api_be.readEmp(l_opts);
				let l_record = l_data.data.response;
				console.log( JSON.stringify( l_record[0] ) , 'readEmp:' + l_opts.tabnum);
				this.theRowData=l_record[0];
                this.theRowData.DS=this.theRowData.DS.substr(0,10);
                console.log( JSON.stringify(this.theRowData) );
				
				
			} catch (err){
				console.log(err.message, 'readEmp'  + l_opts.tabnum );
                await error_message(
                        "Внимание",
                        "Ошибка при сохранении записи: " + + err.error.data.error.message + ' - ' + JSON.stringify(err.error.data.error.errordetails)
                );
				return null;
			}	



        }
        
    }


    


}
    
</script>
