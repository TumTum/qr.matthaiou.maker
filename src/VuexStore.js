import Vuex from 'vuex'

export default {
    init(Vue) {
        Vue.use(Vuex)

        return new Vuex.Store({
            state: {
                qr_counts: 1,
                qr_itmes: 99,
                qr_info: [
                    {url: '', title: '', legende: '', qr: {url: '', png: ''}}
                ],
            },
            mutations: {
                oneQR(state) {
                    state.qr_counts = 1
                    state.qr_itmes = 99
                    state.qr_info = [
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}}
                    ]
                },
                twoQR(state) {
                    state.qr_counts = 2
                    state.qr_itmes = 45
                    state.qr_info = [
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    ]
                },
                treeQR(state) {
                    state.qr_counts = 3
                    state.qr_itmes = 27
                    state.qr_info = [
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    ]
                },
                eightQR(state) {
                    state.qr_counts = 8
                    state.qr_itmes = 9
                    state.qr_info = [
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                        {url: '', title: '', legende: '', qr: {url: '', png: ''}},
                    ]
                },
            }
        })
    }
}
