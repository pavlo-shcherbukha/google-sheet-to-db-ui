 /**
       * Форматирует ошибку axios
       * return custom error object
       */
  function format_axios_error( errobj ) {
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

}

module.exports.format_axios_error = format_axios_error;