// Vanilla JavaScript for links in tab text
// @click doesn't work in dynamically added content
document.addEventListener('click', function (event) {
  // If the click wan't on text open-link, bail
  // if (event.target.matches('.hotspot') || 
  //   event.target.matches('.rollLink')) {
  //   console.log(" - clicked on hotspot")
  // } else 
  // if (!event.target.matches('.open-link')) {
    // return;
    if (!event.target.matches('.open-link')) return;
  // } else { // we must have clicked on open-link
    // Don't follow the link
    event.preventDefault();
    // Log the clicked element in the console
    const hrefs = event.target.getAttribute('href').split("/");
    console.log("- hrefs[0]: " + hrefs[0]);
    // Forward
    // openLink(linkType, shortName, anchorName)
    openLink(hrefs[0], hrefs[1], hrefs[2])
  // }
}, false);

// Scene Vue app
var sceneApp = new Vue({
  el: '#scene-app',
  data: {
    scene: scene,
    tabIndex: 0,
    tabName: 'Overview',
    tabTexts: tabTexts,
    tabTitles: ['Overview', 'English Perspective', 'French Perspective', 
      'Kanienkehaka Perspective', 'Wendat Perspective', 'W&ocirc;banaki Perspective'],
    tabHovers: [false, false, false, false, false, false],
    rollTexts: rollTexts,
    rollName: 'none',
    rollText: 'none yet',
    rollLinks: rollLinks,
    related: related,
    outlinesOn: false,
    // tabText: '',
    relatedUp: [false, false, false, false],
    relatedMenuTitles: ['People', 'Artifacts', 'Explanations', 'Maps'],
    relatedMenuKeys: ['people', 'artifacts', 'background', 'maps'],
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
    showPop: function(_rollName) {
      // console.log(' -- showPop rollText: ' + this.rollTexts[_rollName])
      // console.log(' -- showPop testText: ' + this.testText)
      this.rollName = _rollName
      this.rollText = this.rollTexts[_rollName]
      // console.log(' -- showPop sn: ' + this.rollName)
      // this.popIsOpen = true
    },
    hidePop: function() {
      this.rollText = ''
      this.rollName = 'none'
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
    toggleOutlines: function() {
      if (this.outlinesOn) { // They're on
        this.outlinesOn = false
      } else { // They're off
        this.outlinesOn = true  
      }
      sceneApp.$forceUpdate();
    },
    closeAllRelated: function() {
      console.log(" -- closing AllRelated")
      // Don't know why, but I seem to need to use old for loop
      for (let i = 0; i < this.relatedUp.length; i++) {
        this.relatedUp[i] = false
      }
      sceneApp.$forceUpdate();
    },
    closeRelatedIfOut: function(event) {
      // console.log(" -- in closeRelatedIfOut. " + event.target)
      // Close unless click was on a related link
      // This has nothing to do with whether hotspot link works?
      // Need to include not on hotspot for mobile
      //  && !event.target.matches('.hotspoton')
      if (!event.target.matches('.related-link')) {
        // console.log(" -- on pop link! -- not")
        this.closeAllRelated()
      }
    },
    // Determine tab state
    getTabSuffix: function(_tabIndex) {
      if (scene.tabs[_tabIndex].enabled) { // is enabled
        if (_tabIndex === this.tabIndex) { // tab selected
          return '_f4'
        } else { // enabled, but not selected
          if (this.tabHovers[_tabIndex]) { // hovering
            return '_f3'
          } else { // not hovering
            return '_f2'
          }
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
    hoverTab: function(_tabIndex) {
      // console.log(" - hovering over: " + _tabIndex)
      this.tabHovers[_tabIndex] = true
      sceneApp.$forceUpdate();
    },
    unHoverTab: function(_tabIndex) {
      this.tabHovers[_tabIndex] = false
      sceneApp.$forceUpdate();
    },
    tabAbbr: function (_tabName) {
      return _tabName.substring(0, 3)
    },
    showRollLink: function() {
      console.log(" - show rollText for: " + this.rollName)
      // Forward
      // openLink(linkType, shortName, anchorName)
      openLink(this.rollLinks[this.rollName][0], 
        this.rollLinks[this.rollName][1], 
        this.rollLinks[this.rollName][2])
    }
  },
  computed: {
    largerUrl: function() {
      return "illustrations/" + this.scene.scenewide.sceneName + ".html"
    }
  }
});
