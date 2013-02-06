describe("Persona", function() {

  var persona;

  beforeEach(function() {
    persona = new Persona();
  });

  it(" has dni", function() {
    expect(function(){persona.setDNI('29172168a');}).not.toThrow();
    expect(function(){persona.setDNI('29172168b');}).toThrow();
    expect(persona.getDNI()).toEqual('29172168a');
  });

  it(" compute letter", function() {
	var aDNI = new DNI('29172168a');
	expect(persona.computeLetter(aDNI)).toEqual('a');
  });

  it(" has nie", function() {
	expect(function(){persona.setDNI('x9172168b');}).not.toThrow();
  });
 
});