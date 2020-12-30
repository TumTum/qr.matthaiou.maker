<template>
  <div class="vorlagen">
    <div class="dropdown-background" v-if="dropdownShow" @click="triggerDropdown" :style="{'min-height': dropdownBackgroundHeigth + 'px'}"></div>
    <div class='dropdown is-right' :class="{'is-active': dropdownShow}">
      <div class="dropdown-trigger" @click="triggerDropdown">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
          <span>Vorlage</span>
          <span class="icon is-small">
            <font-awesome-icon icon="angle-down" />
          </span>
        </button>
      </div>
      <div class="dropdown-menu " role="menu">
        <div class="dropdown-content">

          <div class="dropdown-item">

            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="Speicher Titel ..." v-model="vorlagenName" v-on:keyup.enter="saveVorlagen">
              </div>
              <div class="control">
                <button class="button" :disabled="disableSaveButton" @click="saveVorlagen">
                      <span class="icon">
                        <font-awesome-icon icon="save" />
                      </span>
                </button>
              </div>
            </div>
          </div>
          <hr class="dropdown-divider">

          <div class="dropdown-item has-text-grey" v-if="vorlagenList.length === 0">
            <p style="white-space: nowrap;">keine Vorlagen gespeichert</p>
          </div>

          <a class="dropdown-item"
             v-for="item in vorlagenList"
             :key="item.key"
             @click="loadVorlage(item.key)"
             :class="{'is-active': activeVorlage === item.key}"
          >
            <div class="is-flex is-justify-content-space-between is-align-items-baseline">
              <div class="vorlagen-name">{{item.title}}</div>
              <button class="button is-small" @click.stop="updateVorlage(item.key)" v-if="item.key === activeVorlage" title="Aktualisieren">
                    <span class="icon is-small"><font-awesome-icon icon="sync-alt"/></span>
              </button>
              <button class="button is-small" @click.stop="removeVorlage(item.key)" v-if="item.key !== activeVorlage" title="Löschen">
                    <span class="icon is-small"><font-awesome-icon icon="trash"/></span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MD5 from 'md5.js';

export default {
  name: 'Vorlage',
  data() { return {
    activeVorlage: '',
    dropdownShow: false,
    vorlagenName: '',
    disableSaveButton: true,
    vorlagenList: [],
    dropdownBackgroundHeigth: 100,
  }},
  watch: {
    dropdownShow(isOpen) {
      if (isOpen) {
        this.dropdownBackgroundHeigth = window.innerHeight;
      }
    },
    vorlagenName(value) {
      this.disableSaveButton = (value === '')
    }
  },
  methods: {
    triggerDropdown() {
      this.dropdownShow = !this.dropdownShow
    },

    loadVorlage(key) {
      let vorlage = this.$localStorage.get(key);
      this.$store.commit('loadVorlage', vorlage)

      this.activeVorlage = key

      this.triggerDropdown()
      this.$nextTick(() => {
        this.$parent.$emit('printpage-top')
      })
    },

    reloadVorlagen() {
      this.vorlagenList = this.$localStorage.keys()
          .map((storageKey) => {
            return {
              key: storageKey,
              title: this.$localStorage.get(storageKey).title,
            }
          })
          .sort((a, b) => a.title.localeCompare(b.title))
    },

    updateVorlage(key) {
      let vorlageName = this.$localStorage.get(key).title
      this._saveIntoLocalStorage(vorlageName, key)
      this.reloadVorlagen()
      this.triggerDropdown()
    },

    saveVorlagen() {
      if (this.vorlagenName === '') return;

      let key = new MD5().update(this.vorlagenName).digest('hex');
      this._saveIntoLocalStorage(this.vorlagenName, key);

      this.activeVorlage = key
      this.vorlagenName = ''
      this.reloadVorlagen()
      this.triggerDropdown()
    },

    _saveIntoLocalStorage(vorlageName, key) {
      this.$localStorage.set(
          key,
          {
            title: vorlageName,
            data: {
              qr_counts: this.$store.state.qr_counts,
              qr_itmes: this.$store.state.qr_itmes,
              qr_info: this.$store.state.qr_info.map((item) => {
                return {url: item.url, title: item.title, legende: item.legende}
              }),
            }
          }
      )
    },

    removeVorlage(key) {
      this.$localStorage.remove(key);
      this.reloadVorlagen();
    },
  },
  mounted() {
    this.$nextTick(() => this.reloadVorlagen())
  },
}
</script>

<style scoped>

.dropdown {
  z-index: 20;
}

.dropdown-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}

a.dropdown-item {
  padding-right: 1rem;
}

.dropdown-item .vorlagen-name {
  margin-right: .345rem;
}

</style>
