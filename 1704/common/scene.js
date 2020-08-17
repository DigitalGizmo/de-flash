// Scene Vue app
// This does not follow the typical lightbox approach which uses
// mouseleave. Instead, the base image has a mouseover that sets
// to "none," which closes the popup and hightlight.

var sceneApp = new Vue({
  el: '#scene-app',
  data: {
    tabIndex: 0,
    scene: data,
    shortName: 'none',
    popText: 'none yet',
    // layerTitle: 'layer title',
  },
  created () {
    // this.personPath = this.dressup.info.personPath
  },
  methods: {
    showTab: function(_tabIndex) {
      // console.log(' -- showPop')
      this.tabIndex = _tabIndex
      // this.popIsOpen = true
    },
    showPop: function(_popIndex) {
      console.log(' -- showPop popText: ' + 
        this.scene.tabs[this.tabIndex].popItems[_popIndex].blurb)
      this.popText = this.scene.tabs[this.tabIndex].popItems[_popIndex].blurb
      this.shortName = this.scene.tabs[this.tabIndex].popItems[_popIndex].shortName
      console.log(' -- showPop sn: ' + this.shortName)
      // this.popIsOpen = true
    },
    hidePop: function() {
      this.popText = ''
      this.shortName = 'none'
    },
    // prevLayer: function() {
    //   this.shortName = 'none'
    //   // Check whether prev.
    //   if (this.prevExists) {
    //     this.layerIndex--
    //   }
    // },
    // nextLayer: function() {
    //   // Clear any popups.
    //   this.shortName = 'none'
    //   // Check whether next.
    //   if (this.nextExists) {
    //     this.layerIndex++
    //   }
    // },
  },
  computed: {
    // nextExists () {
    //   if (this.layerIndex < (this.dressup.layers.length - 1)) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    // prevExists () {
    //   if (this.layerIndex > 0) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  },
});
