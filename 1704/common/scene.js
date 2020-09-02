// Scene Vue app
// This does not follow the typical lightbox approach which uses
// mouseleave. Instead, the base image has a mouseover that sets
// to "none," which closes the popup and hightlight.

var sceneApp = new Vue({
  el: '#scene-app',
  data: {
    tabIndex: 0,
    tabName: 'Overview',
    scene: scene,
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
    showTab: function(_tabName) {
      // console.log(' -- showPop')
      this.tabName = _tabName
      this.tabText = tabTexts[_tabName]
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
    tabAbbr: function (_tabName) {
      return _tabName.substring(0, 3)
    }
  },
  computed: {
  }
});
