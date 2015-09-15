var myModule = {
	name: 'Chris',
	age: '25',
	sayName: function() {
		alert(this.name);
	},
	setName: function(newName) {
		this.name = newName;
	}
}