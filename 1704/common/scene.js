// Scene Vue app
// This does not follow the typical lightbox approach which uses
// mouseleave. Instead, the base image has a mouseover that sets
// to "none," which closes the popup and hightlight.

var sceneApp = new Vue({
  el: '#scene-app',
  data: {
    tabIndex: 0,
    scene: data
    // layerTitle: 'layer title',
    // shortName: 'none',
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
