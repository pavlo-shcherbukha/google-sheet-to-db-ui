<template>
    <edit-table
        v-bind:title_oper="title_oper"
		v-bind:title_subj="etitle_subj"
		v-bind:open="isopen"
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
        title_oper: "Добавить запист",
        title_subj: "Данные о сотруднике",
        isVisible:  true,  
        theNewRowData: {    TABNUM: '',
                            FAM: '',
                            IM: '',
                            OTCH: '',
                            CODEBRN: '',
                            NAMEBRN: '',
                            ADRESS: '',
                            MSTATUS: '',
                            COUNTRY: '',
                            DS: '',
                            DF: ''
        }
    }),
    emits: ['addempclose'],
    methods:{

        async submitdata( submitvalue ){
            this.isVisible=false;
            if (submitvalue === 1){
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
                try {
                    var result=await api_be.createEmp(l_opts);
                    console.log('Save result' + JSON.stringify(result));

                } catch (err){
                    var err_msg= 'Ошибка при сохранении  данных по клиенту! ' + err.error.data.error.message + ' - ' + JSON.stringify(err.error.data.error.errordetails);
                    console.log(err_msg);
                    await error_message(
                        "Внимание",
                        "Ошибка при сохранении записи: " + + err.error.data.error.message + ' - ' + JSON.stringify(err.error.data.error.errordetails)
                    );
                }



                this.$emit( 'addempclose', submitvalue, this.theNewRowData.TABNUM);
            } else {
                this.$emit( 'addempclose', submitvalue);
            }
            


        }
    }


    


}
    
</script>
