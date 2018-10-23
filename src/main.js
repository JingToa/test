// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import router from './router'
import store from './store/index'

if(window.esapp) {
    window.esapp.add_path(router.routes, store.name, store.obj)
} else {
  console.log('添加路由失败')
}
