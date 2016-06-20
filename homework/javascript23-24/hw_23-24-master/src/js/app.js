requirejs.config({
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.12.4.min',
		'template': 'lib/template',
		'model': 'app/model',
		'view': 'app/view',
		'controller': 'app/controller'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'template': {
			exports: 'template'
		}
	}
});

require(
	['jquery', 'template', 'model', 'view', 'controller'],
	function ($, template, model, view, controller) {
		var iniToDoList = ['Write ToDoList', 'Mark first item as checked', 'Go get rest'];
		var model = new model(iniToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	}
);
