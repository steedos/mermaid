Package.describe({
	name: 'steedos:mermaid',
	summary: 'Markdownish syntax for generating flowcharts, sequence diagrams, class diagrams and gantt charts.',
	version: '7.0.0',
	git: 'https://github.com/steedos/mermaid/'
});

Package.onUse(function(api) {

	api.addFiles([
		'dist/mermaid.js',
		'dist/mermaid.css'
	], 'client');

});
