// Vanilla JavaScript for links in tab text
// @click doesn't work in dynamically added content
document.addEventListener('click', function (event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('.open-link')) return;
  // Don't follow the link
  event.preventDefault();
  // Log the clicked element in the console
  const hrefs = event.target.getAttribute('href').split("/");
  console.log("- hrefs[0]: " + hrefs[0]);
  // Forward
  // openLink(linkType, shortName, anchorName)
  openLink(hrefs[0], hrefs[1], hrefs[2])

}, false);

// Scene Vue app
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
    // tabText: '',
    tabTitles: ['Overview', 'English Perspective', 'French Perspective', 
      'Kanienkehaka Perspective', 'Wendat Perspective', 'W&ocirc;banaki Perspective'],
    popMenuTitles: ['People', 'Artifacts', 'Explanations', 'Maps'],
    popMenuKeys: ['people', 'artifacts', 'background', 'maps']
  },
  // created () {
  //   this.tabText = tabTexts[this.tabName]
  // },
  methods: {
    showTab: function(_tabIndex) {
      // console.log(' -- showPop')
      // Only if enabled
      if (this.scene.tabs[_tabIndex].enabled) {
        this.tabIndex = _tabIndex
        this.tabName = this.scene.tabs[_tabIndex].tabName
        // this.tabText = tabTexts[this.tabName]
      }
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
      console.log(" -- in closeAllRelated")
      // Don't know why, but I seem to need to use old for loop
      for (let i = 0; i < this.relatedUp.length; i++) {
        this.relatedUp[i] = false
      }
      sceneApp.$forceUpdate();
    },
    closeRelatedIfOut: function(event) {
      // console.log(" -- in closeRelatedIfOut. " + event.target)
      if (!event.target.matches('.pop-link')) {
        // console.log(" -- on pop link! -- not")
        this.closeAllRelated()
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
    // Lose pointer over diabled tabs
    cursorState: function(_tabIndex) {
      if (this.scene.tabs[_tabIndex].enabled) {
        if (_tabIndex === this.tabIndex) { // no pointer for current
          return "no-pointer"
        } else {
          return "pointer"
        }
      } else { // disabled
        return "no-pointer"
      }
    },
    getTabState: function(_tabIndex) {
      if (_tabIndex === this.tabIndex) {
        return "tab-selected"
      } else { // disabled
        return "tab"
      }
    },
    // textLink: function(linkType, _shortName, anchorName) {
    // textLink: function() {
    //   // console.log(" -- linkType, shortName, anchorName: " + linkType + _shortName + anchorName)
    //   console.log(" -- linkType, shortName, anchorName: ")
    // },
    tabAbbr: function (_tabName) {
      return _tabName.substring(0, 3)
    }
  },
});
