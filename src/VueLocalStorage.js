import StoragePlugin from 'vue-web-storage';

export default (Vue) => {
    Vue.use(StoragePlugin, {
        prefix: 'qrmaker_',
        drivers: 'local',
    });
}
