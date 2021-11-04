import axios from "axios";
//import query from "querystring" ;

//axios.defaults.withCredentials = true;

const BASE_URL = process.env.VUE_APP_BASE_URL;
//const BASE_URL = 'http://drorm-apigw-pvx-spaziorky-dev.apps.okd4-cl-03.openshift.pravex.ua';

export default {


      /**
       * Форматирует ошибку axios
       * return custom error object
       */
      format_axios_error( errobj ){
        let error = {
            type: "",
            status: "",
            headers: "",
            url: "",
            method: "",
            params: "",
            where: "",
            line: "",
            data: "",
            message: "",
            description: ""
        };

        // отделяем не axios  ошибки
        if(errobj.isAxiosError === undefined){
            error.type = "network";
            error.status = 520;
            error.message = errobj.message;
            error.description = 'Not axios error'
            return error;
            
        } else if (errobj.isAxiosError !== true){
            error.type = "network";
            error.status = 520;
            error.message = errobj.message;
            error.description = 'Not axios error.'
            return error;

        } else if ((errobj.isAxiosError === true) && ( errobj.response == undefined ) ){
            error.type = "network";
            error.status = 520;
            error.message = errobj.message;
            error.description = 'axios error.Probably CORSA'
            return error;            

        } else {
              //обработка axios ошибки

              error.type = "response";
              error.status = errobj.response.status;
              error.headers = errobj.response.headers;
              error.url = errobj.response.config.url;
              error.method = errobj.response.config.method;
              error.params = errobj.response.config.params;
              error.where = errobj.fileName;
              error.line = errobj.lineNumber;
              error.data = errobj.response.data;
              error.message = errobj.message ;
              //error.description = '[' + errobj.response.data.ErrorResponse.code + '] ' + errobj.response.data.ErrorResponse.description;
        }
        return error;

    },

    /**
     * Прочитать таблицу со списком сотрудников 
     * @param
     *   a_opts{ Object} парамтеры
     *   a_opts.batchsize {number} - максимальное число записей в пакете на подпсиь 
     * @returns 
     *    {}
     */
    readEmps(a_opts){
        return new Promise((resolve, reject) => {
          const url = `${BASE_URL}/api/v1/emps`;
          const lparams= { number: a_opts.batchsize} 
          let resultdata = {ok: false, status: null, data: null, error: null};
          axios({
            url: url,
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            params: lparams ,
             })
          .then( resp =>{
              resultdata.ok=true;
              resultdata.status=resp.status;
              resultdata.data=resp.data ;
              return resolve( resultdata ) ;
          })
          .catch( err=> {
              let error = this.format_axios_error(err);
              resultdata.ok=false;
              resultdata.status = error.status;
              resultdata.error= error ;
              return reject( resultdata );
          });


        });

    },

        /**
     * Прочитать одну запись
     * @param
     *   a_opts{ Object} парамтеры
     *   a_opts.tabnum {tabnum} - максимальное число записей в пакете на подпсиь 
     * @returns 
     *    {}
     */
         readEmp(a_opts){
          return new Promise((resolve, reject) => {
            const url = `${BASE_URL}/api/v1/emp/${a_opts.tabnum}`;
            //const lparams= { number: a_opts.batchsize} 
            let resultdata = {ok: false, status: null, data: null, error: null};
            axios({
              url: url,
              method: 'GET',
              headers: {"Content-Type": "application/json"},
              //params: lparams ,
               })
            .then( resp =>{
                resultdata.ok=true;
                resultdata.status=resp.status;
                resultdata.data=resp.data ;
                return resolve( resultdata ) ;
            })
            .catch( err=> {
                let error = this.format_axios_error(err);
                resultdata.ok=false;
                resultdata.status = error.status;
                resultdata.error= error ;
                return reject( resultdata );
            });
  
  
          });
  
      },
    /**
     * Обновить существующую запись 
     * @param
     *   a_opts{ Object} парамтеры
     *   a_opts.tabnum {tabnum} - максимальное число записей в пакете на подпсиь 
     *   a_opts.empdata  - структура для обновления данніх о сотруднике
     * @returns 
     *    {}
     */
             updateEmp(a_opts){
              return new Promise((resolve, reject) => {
                const url = `${BASE_URL}/api/v1/emp/${a_opts.tabnum}`;
                //const lparams= { number: a_opts.batchsize} 
                let resultdata = {ok: false, status: null, data: null, error: null};
                axios({
                  url: url,
                  method: 'POST',
                  headers: {"Content-Type": "application/json"},
                  data: a_opts.empdata
                  //params: lparams ,
                   })
                .then( resp =>{
                    resultdata.ok=true;
                    resultdata.status=resp.status;
                    resultdata.data=resp.data ;
                    return resolve( resultdata ) ;
                })
                .catch( err=> {
                    let error = this.format_axios_error(err);
                    resultdata.ok=false;
                    resultdata.status = error.status;
                    resultdata.error= error ;
                    return reject( resultdata );
                });
      
      
              });
      
          },

          /**
               * Создать новую запись
               * @param
               *   a_opts{ Object} парамтеры
               *   
               *   a_opts.empdata  - структура для обновления данніх о сотруднике
               * @returns 
               *    {}
               */
          createEmp(a_opts){
            return new Promise((resolve, reject) => {
              const url = `${BASE_URL}/api/v1/emp/`;
              let resultdata = {ok: false, status: null, data: null, error: null};
              axios({
                url: url,
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                data: a_opts.empdata
                //params: lparams ,
                })
              .then( resp =>{
                  resultdata.ok=true;
                  resultdata.status=resp.status;
                  resultdata.data=resp.data ;
                  return resolve( resultdata ) ;
              })
              .catch( err=> {
                  let error = this.format_axios_error(err);
                  resultdata.ok=false;
                  resultdata.status = error.status;
                  resultdata.error= error ;
                  return reject( resultdata );
              });


            });

          },
     /**
     * Удалить запись 
     * @param
     *   a_opts{ Object} парамтеры
     *   a_opts.tabnum {tabnum} - Табельный номер
     * @returns 
     *    {}
     */
      deleteEmp(a_opts){
        return new Promise((resolve, reject) => {
          const url = `${BASE_URL}/api/v1/emp/${a_opts.tabnum}`;
          //const lparams= { number: a_opts.batchsize} 
          let resultdata = {ok: false, status: null, data: null, error: null};
          axios({
            url: url,
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            //params: lparams ,
             })
          .then( resp =>{
              resultdata.ok=true;
              resultdata.status=resp.status;
              resultdata.data=resp.data ;
              return resolve( resultdata ) ;
          })
          .catch( err=> {
              let error = this.format_axios_error(err);
              resultdata.ok=false;
              resultdata.status = error.status;
              resultdata.error= error ;
              return reject( resultdata );
          });


        });

    },
    
    
};  //export default
