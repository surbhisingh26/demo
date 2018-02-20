casper.test.begin('The heading exists', 2, function suite(test) {
    casper.start('file:///C:/surbhi/demo.html', function() {
    	test.assertExists('h1.hello');
    	test.assertSelectorHasText('h1.hello', 'Hello surbhi');
    	
    }).run(function() {
        test.done();
    });
});