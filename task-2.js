const inventory = {
	items: [ 'Knife', 'Gas mask', 'Gas' ],
	add(itemName) {
		console.log(`Adding ${itemName} to inventory`);
		this.items.push(itemName);
	},
	remove(itemName) {
		console.log(`Removing ${itemName} from inventory`);

		this.items = this.items.filter((item) => item !== itemName);
	}
};

const invokeInventoryAction = function(itemName, action) {
	action(itemName);
	console.log(`Invoking action on--${itemName}--`);
};

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));

console.log(inventory.items); // ['Knife', 'Medkit']

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
