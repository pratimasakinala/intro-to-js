var str1 = 'Hello World!';
console.log(str1);

// accessing words through array way
var str2 = str1.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1].split('!')[0]);

// using slice
console.log(str1.slice(6, str1.length - 1));

// charAt
console.log(str1.charAt(0)); // returns value at 0 index
console.log(str1.charAt(str1.length - 1));
// console.log(str1.charAt(0),str1.charAt(1),str1.charAt(2),str1.charAt(3),str1.charAt(4));

// substring
console.log(str1.substring(0));
console.log(str1.substring(0, 5)); // beginning index, end index
console.log(str1.substring(6, str1.length - 1));

// substr
console.log(str1.substr(0));
console.log(str1.substr(0, 5)); //beginning index, length from that index
console.log(str1.substr(6,str1.split(' ')[1].split('!')[0].length));


// text transform to upper case
console.log(str1.toUpperCase());
// text transform to lower case
console.log(str1.toLowerCase());