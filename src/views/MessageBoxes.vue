<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <form class="col s3">
      <div class="row">
            <div>
                <msg-basev :show="bd_show" :title="bd_title" @close="msgbasev_close">
                <p>  {{ bd_msg }}</p>
                </msg-basev>

            </div> 
      </div>
    <div class="row">
            <div>
                <error-msg :show="err_show" :title="err_title" @close="error_close">
                <p>  {{ err_msg }}</p>
                </error-msg>

            </div> 
      </div>
         <div class="row">
            <div>
                <info-msg :show="inf_show" :title="inf_title" @close="inform_close">
                <p>  {{ inf_msg }}</p>
                </info-msg>

            </div> 
      </div>
      <div class="row">
            <div>
                <confirm-msg :show="conf_show" :title="conf_title" @closeOK="confirm_OK" @closeCANCEL="confirm_CANCEL">
                <p>  {{ conf_msg }}</p>
                </confirm-msg>

            </div> 
      </div>
      <div class="row">
            <div>
                <confirm-msg :show="conf_show" :title="conf_title" @closeconfirm="confirm_OK">
                <p>  {{ conf_msg }}</p>
                </confirm-msg>

            </div> 
      </div>
     <div class="row">
            <div>
                <confirm-msg :show="conf2_show" :title="conf2_title" @close="confirm2_close">
                <p>  {{ conf2_msg }}</p>
                <template v-slot:actions>
                 
                        <a class="waves-effect waves-light btn" v-on:click="confirm2_close(1)">Ok-OK</a>
                        <a class="waves-effect waves-light btn" v-on:click="confirm2_close(2)">Cancel-Cancel</a>
                        <a class="waves-effect waves-light btn" v-on:click="confirm2_close(3)">Continue</a>

                </template>
                </confirm-msg>

            </div> 
      </div>
      <div class="row">
            <div class="card-action">
                <a class="waves-effect waves-light btn" v-on:click="msgbasev_show">Простой box</a>
                <a class="waves-effect waves-light btn" v-on:click="error_show" ><i class="material-icons left">cloud</i>Error</a>
                <a class="waves-effect waves-light btn" v-on:click="inform_show"><i class="material-icons right">cloud</i>Информационное</a>
                <a class="waves-effect waves-light btn" v-on:click="confirm_show" ><i class="material-icons left">cloud</i>OK-Cancel</a>
                <a class="waves-effect waves-light btn" v-on:click="confirm2_show"><i class="material-icons right">cloud</i>Confirm дизайн.</a>
            </div>
      </div>

    </form>
 
  </div>    


</template>

<script>
import MsgBasev from '@/components/messageboxes/MsgBasev';
import ErrorMsg from '@/components/messageboxes/ErrorMsg';
import InformationMsg from '@/components/messageboxes/InformationMsg';
import ConfirmationMsg from '@/components/messageboxes/ConfirmationMsg';

export default {
    metaInfo() {
        return {
        
        }
    },
    components: {
        "msg-basev": MsgBasev,
        "error-msg": ErrorMsg,
        "info-msg": InformationMsg,
        "confirm-msg": ConfirmationMsg,
    },
    data: () => ({
        title: 'Тестирование различных messagebox',
        bd_show: false,
        bd_title: 'Внимание',
        bd_msg: 'Простой messagebox',
        err_show: false,
        err_title: 'Error Title',
        err_msg: 'Error messagebox',
        inf_show: false,
        inf_title: 'Information Title',
        inf_msg: 'Inforamtion messagebox',
        conf_show: false,
        conf_title: 'Confirmation Title',
        conf_msg: 'Confirmation OK-Cancel messagebox',
        conf_ok: 0,
        conf2_show: false,
        conf2_title: 'Confirmation Title 3 BUTON',
        conf2_msg: 'Confirmation OK-Cancel messagebox',
    }),
    methods: {
        msgbasev_show(){
            this.bd_show=true;
        },
        msgbasev_close(){
            this.bd_show = false;
            
        },
        error_show(){
            this.err_show=true;
        },
        error_close(){
            this.err_show = false;
            
        },
        inform_show(){
            this.inf_show=true;
        },
        inform_close(){
            this.inf_show = false;
            
        },
        confirm_show(){
            this.conf_show=true;
        },
        confirm_OK(value){
            alert('нажата кнопка: ' + value);
            this.conf_show = false;
            this.conf_ok = 1;
            this.conf_cancel = 0;
            
        },

         confirm2_show(){
            this.conf2_show=true;
        },
        confirm2_close(value){
            alert("Нажата кнопка = " + value);
            this.conf2_show = false;
        }


    }
}

</script>

<style scoped>
    a {margin-left: 20px;}
</style>