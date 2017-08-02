import vueLfxTest from './vue-lfx-test.vue'
const component = {
    install(Vue, options) {
        Vue.component(vueLfxTest.name, vueLfxTest)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(component);
}
export default component