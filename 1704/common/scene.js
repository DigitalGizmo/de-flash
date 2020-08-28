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
      this.relatedUp[relatedIndex] ? this.relatedUp[relatedIndex] = false : this.relatedUp[relatedIndex] = true
      sceneApp.$forceUpdate();
    },
    tabAbbr: function (_tabName) {
      return _tabName.substring(0, 3)
    }
  },
  computed: {
  }
});
