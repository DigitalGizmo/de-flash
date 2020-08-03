// Dressup Vue app
// This does not follow the typical lightbox approach which uses
// mouseleave. Instead, the base image has a mouseover that sets
// to "none," which closes the popup and hightlight.

var dressApp = new Vue({
	el: '#app',
	data: {
		layerIndex: 0,
    layerTitle: 'layer title',
		shortName: 'none',
    audioObject: null,
    audioOn: false,
    personPath: '1660_wob_man',
    dressup: data
	},
	methods: {
		showPop: function(_shortName) {
			// console.log(' -- showPop')
      // Stop any playing sound
      if (this.audioObject != null) {
        this.audioObject.pause()
      }
			this.shortName = _shortName
      this.popIsOpen = true
      // Play audio, if on
      if (this.audioOn && this.shortName != 'none') {
        const audioFileName = 'html5/' +
          this.personPath + '/audio/' + this.shortName + '.mp3'
        console.log('  -- audio on, shortName none')
          console.log('  -- audioFileName:' + audioFileName)
        // if(audioFileName.exists()) {
        try {
          this.audioObject = new Audio(audioFileName);
          // this.audioObject.muted = false;;
          this.audioObject.play();          
        } catch (e) {
          alert(audioFileName + ' not found')
        }        
      }
		},
		prevLayer: function() {
			this.shortName = 'none'
      // Check whether prev.
      if (this.prevExists) {
  			this.layerIndex--
      }
		},
		nextLayer: function() {
      // Clear any popups.
			this.shortName = 'none'
      // Check whether next.
      if (this.nextExists) {
  			this.layerIndex++
      }
		},
    toggleAudio: function() {
      this.audioOn ? this.audioOn = false : this.audioOn = true
    }
	},
  computed: {
    nextExists () {
      if (this.layerIndex < (this.dressup.layers.length - 1)) {
        return true
      } else {
        return false
      }
    },
    prevExists () {
      if (this.layerIndex > 0) {
        return true
      } else {
        return false
      }
    }
  },
});
