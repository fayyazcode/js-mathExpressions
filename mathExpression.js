//Q1 
// var a=5;
// var b=2;

// var result =a+b;
// document.write("Your Answer is : ",result);



//Q2 part b******************************************
    // var a=5;
    // var b=2;

    // var result=a-b;
    // document.write("Your Answer is : ",result);



//Q2 part c****************************************************

    // var a=5;
    // var b=2;

    // var result=a*b;
    // document.write("Multiplication : ",result);

//Q2 part d

// var a=4;
// var b=2;

// var result=a/b;
// document.write("Multiplication : ",result);


//Q 3 ***************************************************

// var a;
// document.write(" Value after variable declaration is :",a);
// a=5;
// document.write("<br /> initial value is :" ,a);
//  a++;
//  document.write("<br /> Value after increment is : ",a);
//  var a=a+7;
//  document.write("<br /> value after adding 7 : ",a);
//  a--;
//  document.write("<br /> value after decriment is : ",a)
//  a=a%3;
//  document.write("<br /> reminder when divided by 3 is : ",a)




//Q 4 *****************************************************

// var ticket=600;
// document.write("Cost of one movie ticket is :",ticket);

// var ticket5 =ticket*5;

// document.write("<br /> Cost of Five tickets is : ",ticket5);




//Q5 ****************************************************
// var multi = parseInt(prompt());
// document.write("Table of ",multi)
// for (var a=1; a<=10;a++){
//    var result = a * multi;
//    document.write("<br />",multi," *",a," = ",result);
// }



// Q6
    // var F = parseInt(prompt('Enter F'));
    // var C=(F-32)*5/9;
    // document.write(F,"<sup>0</sup>F is ",C,"<sup>0</sup>C")


    // var C = parseInt(prompt('Enter C'));
    // var F=(C*9/5)+32
    // document.write("</br>", C,"<sup>0</sup>C  is " ,F,"<sup>0</sup>F")


//Q7********************************

// var a =" Price of item 1 ";
// var b= "Price of item 2 ";
// var c= "Ordered quantity of item 1 ";
// var d= "Ordered Quantity of item 2 ";
// var e= "Shipping charges ";

// var pItem1= 650;
// var QuanItem1= 3;
// var pItem2= 100;
// var QuanItem2= 7;
// var shipCharg=100;

// var total=(pItem1*QuanItem1)+(pItem2*QuanItem2)+shipCharg;
// document.write(a+pItem1,"</br>",c+QuanItem1,"</br>",b+pItem2,"</br>",d+QuanItem2,"</br>",e+total);

//Q8**********************************

// var subject1=90;
// var subject2=80;
// var total=200;
// var marksgain=subject1+subject2;

// var percent=(marksgain/total)*100;
// document.write("Total marks ",total,"<br>")
// document.write("Marks gain ",marksgain,"<br>")
// document.write("Percentage ",percent,"<br>")


//Q9***************************


    // var us$=104.80;
    // var saudiR=28;

    // var convert$=us$*10;
    // var convertRiyal=saudiR*25;
    // var total=convert$+convertRiyal;
    // document.write("Total Currency in PKR "+total)


    //Q10********************************

//    var number=5;
//     var exp=((number+5)*10)/2; 

//Q11*********************




//12

// var radius=20;
// var circum=2*3.142*radius;
// var area=3.142*(radius*radius);
// document.write("Radius of circle : "+radius+"<br>");
// document.write("circumferrnce  of circle : "+circum+"<br>")
// document.write("Radius of circle : "+area+"<br>")




//Q13
// var fav="charryballs";
// var currentAge=22;
// var maxAge=80;
// var snakePerDay=2;

// var totalRIP=(maxAge-currentAge)*snakePerDay*365;
// document.write("snaks for life time "+totalRIP)



//chapter 6 to 9

    // Q1
     
    // var number=10;

    //     ++number;
    //     //now number is 11 by pre increment
      
    //     number++;
    //     //now number is 12 after post increment

    //     //decrement
    //     --number;

    //     number--;

    //     document.write(number);







    //Q2********************







// //  What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;

// //Result
// //  result=4;
// //first stage
// //pre decrement value of a is 1

// //second stage value of a (1) - value of b(0) result 1

// //third stage 1 +2 =3

// //4th stage 3+1 =4; the last valu of b is not decreased because its post decrement


// document.write("a is 1")

// document.write("b is 0")

// document.write("result is 4")





//Q3*************************



// var name =prompt("Enter your name");
// alert("Hello "+name)







//Q5************************


// var number=+prompt("Enter Number");
// document.write("Table of ",number);
// for (var a=1; a<=10;a++){
// if(number===NaN){
//    number=5;  
// }


//     var result = a * number; 
//     document.write("<br />",number," *",a," = ",result);
// }



//Q6***************
var one=prompt("Enter Subject name")
var two=prompt("Enter Subject name")
var three=prompt("Enter Subject name")
var tMarksOne=100;
var tMarksTwo=100;
var tMarksThree=100;

var ObtainOne=prompt("Enter marks Obtain in"+one)
var ObtainTwo=prompt("Enter marks Obtain in"+two)
var ObtainThree=prompt("Enter marks Obtain in"+three)
var percentOne=(ObtainOne/tMarksOne)*100;
var percentTwo=(ObtainTwo/tMarksTwo)*100;
var percentThree=(ObtainThree/tMarksThree)*100;
document.write("<tr> <td>Subject </td> <td> Total Marks</td> <td> Obtain Marks </td> <td> Percentage </td></tr> <br>")
document.write("<tr>","<td>",one,"</td> "," <td> ",tMarksOne," </td> "," <td> ",ObtainOne," </td> "," <td> ",percentOne," </td>","</tr>")
document.write("<tr>","<td>",two,"</td> "," <td> ",tMarksTwo," </td> "," <td> ",ObtainTwo," </td> "," <td> ",percentTwo," </td>","</tr>")
document.write("<tr>","<td>",three,"</td> "," <td> ",tMarksThree," </td> "," <td> ",ObtainThree," </td> "," <td> ",percentThree," </td>","</tr>")