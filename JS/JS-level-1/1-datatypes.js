console.log('-- Data types ---');

/*
Data types 

1. Primitive data types
2. Object level data types

1. Primitive data types
--------------------------------
1. Number
2. String
3. Undefined
4. null

*/


// 1. Number

var a=10;
var b=65.32;

//2. String

var s1='Abc';
var s2="Xyz";

var name='Praveen';

var msg="Your name is "+name;

// String interpolation

var msg1= `
             Welcome to my app
             You name is ${name}

          `

// 3. Undefined

var ename;

// 4. null

var s3='Praveen';
console.log('Name is '+s3);
s3=null;
console.log('Name is '+s3);

s3='Cognizant';


var s4=parseInt('343');
var s5=parseFloat('45.43');

// -----------------------------------------------------

// 2. Referenced / Object level data types

// How to create an object in java script
// 2 ways 
// way -1 - using new operator 

var emp=new Object();

emp.empId=10;
emp.empName='Praveen';
emp.salary=877333;

// way - 2 - using literal style

var student={   // JSON - > Java Scfript Object Notation
    rno:1024,
    sname:'James',
    marks:8773
};

student.rno=1111;
// expandable

student.sub1='English';
student.sub2='Maths';

// Built in Objects

// 1. Array

var numbers=new Array();
numbers.push(10);
numbers.push(666);
numbers.push('Abc');

numbers[4]='Kolkata';

var now=new Date();




















