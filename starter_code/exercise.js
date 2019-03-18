var exercise = {};

exercise.hello = function(){
    var str = 'Hello!';
    return str;
    // return 'Error: Question 01 not implemented';
};

exercise.numberArray = function(){
    var arr = [0, 1, 2];
    return arr;
    // return 'Error: Question 02 not implemented';
};

exercise.nameAndAge = function(){
    var obj = {
        name: 'Bensu',
        age: 24
    };
    return obj;
    // return 'Error: Question 03 not implemented';
};

exercise.objectArray = function(){
    var arr = [
        {},
        {},
        {}
    ];
    return arr;
    // return 'Error: Question 04 not implemented';
};

exercise.addProperty = function(someObject){
    someObject.name = 'Bensu';
    return someObject;
    // return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    var el = someArray[2];
    return el;
    // return 'Error: Question 06 not implemented';
};

exercise.concatenate = function(string1, string2, string3){
    var str = '';
    str = str.concat(string1, string2, string3);
    return str;
    // return 'Error: Question 07 not implemented';
};

exercise.greaterThanSix = function(someNumbers){
    var filt = someNumbers.filter(function(item){
        var res = (item>6);
        return res;
    });
    return filt;
    // return 'Error: Question 08 not implemented';
};

exercise.getNames = function(people){
    var arr = people.map(function(item){
        var res = item.name;
        return res;
    });
    return arr;
    // return 'Error: Question 09 not implemented';
};

exercise.getSalaryTotal = function(people){
    var sum = people.reduce(function(res, item){
        res += item.salary;
        return res;
    }, 0);
    return sum;
    // return 'Error: Question 10 not implemented';
};

exercise.sortNumbers = function(someNumbers){
    var sort = someNumbers.sort(function(a, b){
        var res = a - b;
        return res;
    });
    return sort;
    // return 'Error: Question 11 not implemented';
};

exercise.executeCallback = function(callback){
    callback();
    // return 'Error: Question 12 not implemented';
};

exercise.getPersonAndJob = function(payroll){
    var arr = [];
    payroll.forEach(function(item){
        arr.push([
            item[1],
            item[2]
        ]);
    });
    return arr;
    // return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    var sum = payroll.reduce(function(res, item){
        res += Number(item[3]);
        return res;
    }, 0);
    return sum;
    // return 'Error: Question 14 not implemented';
};

exercise.getEarningsAbove = function(payroll, target){
    var filt = payroll.filter(function(item){
        var res = (item[3]>target);
        return res;
    });
    var numb = filt.length;
    return numb;
    // return 'Error: Question 15 not implemented';
};

exercise.getNumberOfZipCodesWith = function(payroll, num){
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
    // return 'Error: Question 16 not implemented';
};

module.exports = exercise;