var a = 1;
var b = 2;
var c = 100;
var d = 300;
var e = 6000;
console.log('integer variables: ', a, b, c, d, e);

var str1 = 'String 1';
var str2 = 'String 2';
var str3 = 'String 3';
var str4 = 'String 4';
var str5 = 'String 5';
console.log('string variables: ', str1, str2, str3, str4, str5);

var bool1 = true;
var bool2 = false;
console.log('boolean variables: ', bool1, bool2);

var arr1 = [];
var arr2 = [04, 25, 2019];
var arr3 = ['Pratima', 'Sakinala'];
var arr4 = ['Thursday', 'April', 25];
var arr5 = ['Yellow', 'Blue', null];
console.log('array variables: ', arr1, arr2, arr3, arr4, arr5);

var empty = {};
var date = {
    month: 4,
    date: 25,
    year: 2019
};
var user = {
    firstName: 'Pratima',
    lastName: 'Sakinala'
};
var date2 = {
    day: 'Thursday',
    month: 'April',
    date: 25
};
var colors = {
    primary: 'red',
    secondary: 'orange'
};
console.log('object variables: ', empty, date, user, date2, colors);

console.log(typeof null);
var xyz;
console.log(typeof xyz);