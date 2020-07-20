// Dressup Vue app

var dressApp = new Vue({
	el: '#app',
	data: {
		layerNum: 1,
		popId: 'none',
    mouseOnPop: false
	},
	methods: {
		showPop: function(shortname) {
			console.log(' -- showPop')
			this.popId = shortname
		},
		hidePop: function() {
			console.log(' -- hidePop')
      // event.stopPropagation();
      if (!this.mouseOnPop) {
  			this.popId = 'none'
      }
		},
    onPop: function(truth) {
      console.log(' -- onPop: ' + truth)
      this.mouseOnPop = truth
      // this.popId = 'none'
    },
    leavePop: function() {
      console.log(' -- leavePop')
      // if (this.mouseOnPop) {
        this.popId = 'none'
        this.mouseOnPop = false

      // }
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
