const dialogs = [
	{
		id: 1,
		name: 'Elon',
		messages: ['Good morning chef', 'how many tasks i have?'],
	},
	{
		id: 2,
		name: 'Artur',
		messages: ['hey bro!', 'heeeeeeey', 'Go to the gym', 'oooook'],
	},
	{
		id: 3,
		name: 'Dimych',
		messages: ['Whats Up', 'Im fine', 'End you?'],
	},
	{
		id: 4,
		name: 'Indra',
		messages: ['Hi', 'What do you want', 'Ok'],
	},
	{
		id: 5,
		name: 'Saitama',
		messages: ['Hello', 'Im Here'],
	},
];

export function getDialogs() {
	return dialogs;
}

export function getDialogItem(id) {
	return dialogs.find(dialog => dialog.id === id);
}

const posts = [
	{ id: 1, message: 'Hello tratata', likesCount: 12 },
	{ id: 2, message: 'Whatsup!!!!!', likesCount: 2 },
	{ id: 3, message: 'O la la', likesCount: 6 },
	{ id: 4, message: 'Hello World', likesCount: 255 },
	{ id: 5, message: 'Best practice', likesCount: 9 },
];

export function getPosts() {
	return posts;
}
