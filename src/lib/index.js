import vueLfxTest from './vue-lfx-test.vue' // 导入组件
const test = {
    install (Vue, options) {
        Vue.component(vueLfxTest.name, vueLfxTest)
    }
}
export default test
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueLfxTest);
}