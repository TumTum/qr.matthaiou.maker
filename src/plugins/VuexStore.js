import Vuex from 'vuex'

export default (Vue) => {
        Vue.use(Vuex)

        return new Vuex.Store({
            state: {
                qr_counts: 1,
                qr_itmes: 99,
                qr_info: [
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                ],
            },
            mutations: {
                oneQR(state) {
                    state.qr_counts = 1
                    state.qr_itmes = 99
                },
                twoQR(state) {
                    state.qr_counts = 2
                    state.qr_itmes = 45
                },
                treeQR(state) {
                    state.qr_counts = 3
                    state.qr_itmes = 27
                },
                fourQR(state) {
                    state.qr_counts = 4
                    state.qr_itmes = 18
                },
                eightQR(state) {
                    state.qr_counts = 8
                    state.qr_itmes = 9
                },
                loadVorlage(state, vorlage) {
                    state.qr_counts = vorlage.data.qr_counts
                    state.qr_itmes = vorlage.data.qr_itmes
                    vorlage.data.qr_info.map((qrinfo, index) => {
                        state.qr_info[index].url = qrinfo.url
                        state.qr_info[index].title = qrinfo.title
                        state.qr_info[index].legende = qrinfo.legende
                    });
                },
            }
        })
}
