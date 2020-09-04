// Scene Vue app
// This does not follow the typical lightbox approach which uses
// mouseleave. Instead, the base image has a mouseover that sets
// to "none," which closes the popup and hightlight.

var sceneApp = new Vue({
  el: '#scene-app',
  data: {
    scene: scene,
    tabIndex: 0,
    tabName: 'Overview',
    rollTexts: rollTexts,
    tabTexts: tabTexts,
    related: related,
    shortName: 'none',
    popText: 'none yet',
    relatedUp: [false, false, false, false],
    tabText: ''
  },
  created () {
    this.tabText = tabTexts[this.tabName]
  },
  methods: {
    showTab: function(_tabIndex) {
      // console.log(' -- showPop')
      this.tabIndex = _tabIndex
      this.tabName = this.scene.tabs[_tabIndex].tabName
      this.tabText = tabTexts[this.tabName]
      // this.popIsOpen = true
    },
    showPop: function(_shortName) {
      // console.log(' -- showPop rollText: ' + this.rollTexts[_shortName])
      // console.log(' -- showPop testText: ' + this.testText)
      this.shortName = _shortName
      this.popText = this.rollTexts[_shortName]
      // console.log(' -- showPop sn: ' + this.shortName)
      // this.popIsOpen = true
    },
    hidePop: function() {
      this.popText = ''
      this.shortName = 'none'
    },
    toggleRelated: function(relatedIndex) {
      if (this.relatedUp[relatedIndex]) { // this one is on
        this.relatedUp[relatedIndex] = false
      } else { // we're turning this one on
        this.closeAllRelated()
        this.relatedUp[relatedIndex] = true  
      }
      sceneApp.$forceUpdate();
    },
    closeAllRelated: function() {
      // console.log(" -- in closeAllRelated")
      // Don't know why, but I seem to need to use old for loop
      for (let i = 0; i < this.relatedUp.length; i++) {
        this.relatedUp[i] = false
      }
    },
    // Determine tab state
    getTabSuffix: function(_tabIndex) {
      if (scene.tabs[_tabIndex].enabled) {
        if (_tabIndex === this.tabIndex) {
          return '_f4'
        } else {
          return '_f2'
        }
      } else { // tab with this index not enabled
        return '_f5'
      }
    },
    tabAbbr: function (_tabName) {
      return _tabName.substring(0, 3)
    }
  },
  computed: {
  }
});
