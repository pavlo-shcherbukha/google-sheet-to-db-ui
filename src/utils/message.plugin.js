
export default {
  install(app, options) {
    app.config.globalProperties.$message = function(html) {
      M.toast({ html: html, classes: "teal darken-1" })
    }

    app.config.globalProperties.$error = function(html) {
      var xhtml = html;
      M.toast({ html: xhtml, classes: 'deep-orange darken-1'})
    }
  }
}
