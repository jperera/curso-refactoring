describe("HumanMetabolism", function() {

  var metabolism;

  beforeEach(function() {
    metabolism = new HumanMetabolism();
  });

  it("needs calories based in complexion", function() {   
    metabolism.setComplexion(1);    
    expect(metabolism.getDailyCalories()).toEqual(3000);
    
    metabolism.setComplexion(3);    
    expect(metabolism.getDailyCalories()).toEqual(500);
    
  });


});
