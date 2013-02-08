describe("BirthDay", function() {

  var birthDay;

  beforeEach(function() {
    birthDay = new BirthDay();
  });

  it("No party for people born in july", function() {   
    expect(birthDay.isThereAPartyReadyForMe('Adrian','19/07/1987')).toEqual('No party for you');
  });

  it("No party for people born in December", function() {   
    expect(birthDay.isThereAPartyReadyForMe('Alma','19/12/1987')).toEqual('No party for you');
  });

  it("Party for people born in May", function() {   
    expect(birthDay.isThereAPartyReadyForMe('Teo','19/05/1987')).toEqual('Party!!!');
  });

  it("Always party for Xavi", function() {   
    expect(birthDay.isThereAPartyReadyForMe('Xavi','19/12/1987')).toEqual('Party!!!');
  });

});
