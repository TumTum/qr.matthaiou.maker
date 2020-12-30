import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faSave, faSyncAlt, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default (Vue) => {

    library.add(faAngleDown, faSave, faSyncAlt, faTrash)

    Vue.component('font-awesome-icon', FontAwesomeIcon)
}
