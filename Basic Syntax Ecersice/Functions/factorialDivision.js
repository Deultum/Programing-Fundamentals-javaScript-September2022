function factorialDivision(num1, num2) {
    
        
        
        function factorialize(num) {
            if (num === 0 || num === 1)
              return 1;
            for (var i = num - 1; i >= 1; i--) {
              num *= i;
            }
            return num;
          }
          factorialize(num1);
          function factorializeNum2 (num) {
            if (num === 0 || num === 1)
            return 1;
          for (var i = num - 1; i >= 1; i--) {
            num *= i;
          }
          return num;
        } factorializeNum2 (num2)
        console.log((factorialize(num1) / factorializeNum2(num2)).toFixed(2));
          }


     factorialDivision(5, 2);
