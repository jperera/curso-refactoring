describe("QuixoteWriter", function() {

	var quixoteWriter;

	beforeEach(function() {
		quixoteWriter = new QuixoteWriter();
	});

	it("WriteA", function() {
		quixoteWriter.typeUpperCased('a');
		expect(quixoteWriter.getDisplayContent()).toEqual('A');
	});

	it("WriteBadLetter", function() {
		quixoteWriter.typeUpperCased('ö');
		expect(quixoteWriter.getDisplayContent()).toEqual('');
	});

});