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
			// console.log(' -- showPop')
			this.popId = shortname
      this.popIsOpen = true
		},
    // Looks like this is triggered when you're on pop and you move?
    // Hint: leavePop will set mouseOnPop to false
		hidePop: function() {
			// console.log(' -- hidePop, mouseOnPop = ' + this.mouseOnPop)
      // The timeout prevents single flash of pop on transition
      // from hotspot to popup. Also fixes flicker on Safari
      setTimeout(() => {
        // if I'm not on the popup
        if (!this.mouseOnPop) {
          // console.log(' -- hidePop - not on pop')
    			this.popId = 'none'
        }
      }, 200);
		},
    onPop: function(truth) {
      // console.log(' -- onPop: ' + truth)
      this.mouseOnPop = truth
      // this.popId = 'none'
    },
    leavePop: function() {
      // console.log(' -- leavePop')
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
