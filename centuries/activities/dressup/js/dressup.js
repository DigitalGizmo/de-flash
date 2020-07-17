// Dressup Vue app

var dressApp = new Vue({
	el: '#app',
	data: {
		layerNum: 1,
		popId: 'none'
	},
	methods: {
		showPop: function(shortname) {
			console.log(' -- showPop')
			this.popId = shortname
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
