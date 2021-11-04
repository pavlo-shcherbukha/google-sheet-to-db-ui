# google-sheet-to-db-ui
Продолжние google-sheet-to-db. К rest-api  добавил vue.js ui

Для запуска локально нужно создать файл настройки env переменных: 

.env.development 

с примерно таким содержимым:

```text
 # just a flag
ENV = 'development'

# base api
VUE_APP_BASE_URL=http://nodesrv-pashakx-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com
VUE_APP_USEPROXY=true
VUE_APP_PROXYPORT=3128
# vue-cli uses the VUE_CLI_BABEL_TRANSPILE_MODULES environment variable,
# to control whether the babel-plugin-dynamic-import-node plugin is enabled.
# It only does one thing by converting all import() to require().
# This configuration can significantly increase the speed of hot updates,
# when you have a large number of pages.
# Detail:  https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/babel-preset-app/index.js

VUE_CLI_BABEL_TRANSPILE_MODULES = true


```

параметр VUE_APP_BASE_URL указывает на url rest api 