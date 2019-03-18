var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    var str = 'Hello!';
    return str;
    // ----------------------------------------
    // return 'Error: Question 01 not implemented';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    var arr = [0, 1, 2];
    return arr;
    // ----------------------------------------
    // return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    var obj = {
        name: 'Bensu',
        age: 24
    };
    return obj;
    // ----------------------------------------
    // return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    var arr = [
        {},
        {},
        {}
    ];
    return arr;
    // ----------------------------------------
    // return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    someObject.name = 'Bensu';
    return someObject;
    // ----------------------------------------
    // return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    var el = someArray[2];
    return el;
    // ----------------------------------------
    // return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    var str = '';
    str = str.concat(string1, string2, string3);
    return str;
    // ----------------------------------------
    // return 'Error: Question 07 not implemented';
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    var filt = someNumbers.filter(function(item){
        var res = (item>6);
        return res;
    });
    return filt;
    // ----------------------------------------
    // return 'Error: Question 08 not implemented';
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //   ['peter','bruce','clark','diana']
    var arr = people.map(function(item){
        var res = item.name;
        return res;
    });
    return arr;
    // ----------------------------------------
    // return 'Error: Question 09 not implemented';
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   You should return
    //   10000
    var sum = people.reduce(function(res, item){
        res += item.salary;
        return res;
    }, 0);
    return sum;
    // ----------------------------------------
    // return 'Error: Question 10 not implemented';
};

exercise.sortNumbers = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descending.
    var sort = someNumbers.sort(function(a, b){
        var res = a - b;
        return res;
    });
    return sort;
    // ----------------------------------------
    // return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    callback();
    // ----------------------------------------
    // return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    var arr = [];
    payroll.forEach(function(item){
        arr.push([
            item[1],
            item[2]
        ]);
    });
    return arr;
    // ----------------------------------------
    // return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    var sum = payroll.reduce(function(res, item){
        res += Number(item[3]);
        return res;
    }, 0);
    return sum;
    // ----------------------------------------
    // return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll, target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    var filt = payroll.filter(function(item){
        var res = (item[3]>target);
        return res;
    });
    var numb = filt.length;
    return numb;
    // ----------------------------------------
    // return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function(payroll, num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    var filt = payroll.filter(function(item){
        var res = false;
        var len = item[4].length;
        for(var i=0; i<len; i++){
            if(item[4].charAt(i) == num){
                res = true;
            };
        };
        return res;
    });
    var numb = filt.length;
    return numb;
    // ----------------------------------------
    // return 'Error: Question 16 not implemented';
};

module.exports = exercise;