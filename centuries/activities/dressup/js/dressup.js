// Dressup Vue app
// This does not follow the typical lightbox approach which uses
// mouseleave. Instead, the base image has a mouseover that sets
// to "none," which closes the popup and hightlight.

var dressApp = new Vue({
	el: '#app',
	data: {
		layerNum: 1,
    layerTitle: 'layer title',
		popId: 'none',
    audioObject: null,
    audioOn: false,
    personPath: '1660_wob_man'
	},
	methods: {
		showPop: function(_popId) {
			// console.log(' -- showPop')
      // Stop any playing sound
      if (this.audioObject != null) {
        this.audioObject.pause()
      }
			this.popId = _popId
      this.popIsOpen = true
      // Play audio, if on
      if (this.audioOn && this.popId != 'none') {
        const audioFileName = 'html5/' +
          this.personPath + '/audio/' + this.popId + '.mp3'
        console.log('  -- audio on, popId none')
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
			this.popId = 'none'
			// this.layerNum = this.layerNum++
			this.layerNum = 1
		},
		nextLayer: function() {
			this.popId = 'none'
			// this.layerNum = this.layerNum++
			this.layerNum = 2
		},
    toggleAudio: function() {
      this.audioOn ? this.audioOn = false : this.audioOn = true
    }
    // playSound (audioFileName) {
    //   console.log(' -- audioFileName: ' + audioFileName)
    //   if(this.audioOn && audioFileName) {
    //     this.audioObject = new Audio(audioFileName);
    //     this.audioObject.play();
    //   }
    // }

	}
});
