describe('getDigit()', function() {
   var inputs  = 123;

  it('should print correct digits', function() {
      var digits = getDigit(inputs);
      var expectDigits = [1,2,3];
      expect(digits).toEqual(expectDigits);
  });
});

// describe('stringDigits()',function(){
//       it('get stringDigits',function(){
//           var stringDigits = stringDigits();
//           expectStringDigits = []
//
//       });
//
//
// });

describe('stringTransform()',function(){
    var digits = [2,0];
    var allStringDigits = [{digit:0,string:['._.','|.|','|_|']},
                           {digit:2,string:['._.','._|','|_.']}];
    it('should get stringDigits',function(){
       var stringDigits = digitsTransform(digits,allStringDigits);
        expectStringDigits = [['._.','._|','|_.'],['._.','|.|','|_|']];
        expect(stringDigits).toEqual(expectStringDigits);
    });
});

describe(' printStringDigits()',function(){
   var stringDigits = [['._.','._|','|_.'],['._.','|.|','|_|']];
    it('should get tempArray',function(){
        var tempArray = printStringDigits(stringDigits);
        var expectTempArray = ['._. ._. ','._| |.| ','|_. |_| '];
        expect(tempArray).toEqual(expectTempArray);

    });




});


describe(' IcdDigits()',function(){
    var inputs  = 20;
     it('should get correct stringDigits',function(){
         spyOn(console, 'log');
         IcdDigits(inputs);

         var expectResult =  '\n'+ '._.' + ' ' + '._.' + ' ' + '\n'
                                 + '._|' + ' ' + '|.|' + ' ' + '\n'
                                 + '|_.' + ' ' + '|_|' + ' ' + '\n' ;

         expect(console.log).toHaveBeenCalledWith(expectResult);
     });
});
