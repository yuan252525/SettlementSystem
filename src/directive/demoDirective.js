export default {
    bind: function() {
        console.log('demo bound!')
    },
    update: function(value) {
        this.el.innerHTML =
      'name - ' + this.name + '<br>' +
      'expression - ' + this.expression + '<br>' +
      'argument - ' + this.arg + '<br>' +
      'modifiers - ' + JSON.stringify(this.modifiers) + '<br>' +
      'value - ' + value
    }
}
