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
	},
	methods: {
		showPop: function(_popId) {
			// console.log(' -- showPop')
			this.popId = _popId
      this.popIsOpen = true
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
		}
	}
});
