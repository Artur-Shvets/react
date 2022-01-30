let dialogs = [
	{
		name: 'Elon',
		pathName: 'elon',
		messages: ['Good morning chef', 'how many tasks i have?'],
		id: 1,
	},
	{
		name: 'Artur',
		pathName: 'artur',
		messages: ['hey bro!', 'heeeeeeey', 'Go to the gym', 'oooook'],
		id: 2,
	},
	{
		name: 'Dimych',
		pathName: 'dimych',
		messages: ['Whats Up', 'Im fine', 'End you?'],
		id: 3,
	},
	{
		name: 'Indra',
		pathName: 'indra',
		messages: ['Hi', 'What do you want', 'Ok'],
		id: 4,
	},
	{
		name: 'Saitama',
		pathName: 'saitama',
		messages: ['Hello', 'Im Here'],
		id: 5,
	},
];

export function getDialogs() {
	return dialogs;
}

export function getDialog(id) {
	return dialogs.find(dialog => dialog.id === id);
}
