import vueLfxTest from './vue-lfx-test.vue'
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueLfxTest);
}
export default {
	install (Vue, options) {
        Vue.component(vueLfxTest.name, vueLfxTest)
    }
}