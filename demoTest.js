casper.test.begin('The heading exists', 2, function suite(test) {
    casper.start('http://localhost:8080/demo/demo.jsp', function() {
    	test.assertExists('h1.hello');
    	test.assertSelectorHasText('h1.hello', 'Hello surbi');
    	
    }).run(function() {
        test.done();
    });
});