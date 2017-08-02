import vueLfxTest from './vue-lfx-test.vue'
export default {
	install (Vue, options) {
        Vue.component(vueLfxTest.name, vueLfxTest)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueLfxTest);
}