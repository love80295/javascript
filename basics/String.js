 // "" string can be declare by this as well and '' by this as well 
 const s1 = "love";
 const age = 21;
 console.log(s1+age+" this is my ......."); // this is the old method


 //                ........... new method..........

 console.log(`my name is ${s1} and my age is ${age}`); // this is new method
 const s2 = new String('AGRAWAL'); // declare as a object
 console.log(s1[0]);
 console.log(s2[0]);
 console.log(s1.length); // gives length of a string
 console.log(s1.toUpperCase()); // converts string to upper case , it does not change the original string
 console.log(s1.charAt(3)); // gives character at aperticular location
 console.log(s1.indexOf('l')) // retuurns the index of a character
 const news1 = s1.substring(0 , 1); // 1 is excluded
 console.log(news1);
 const nns1 = s1.slice(-2 , 2); // -ve also included
 console.log(nns1);
 const news = "     loegfvwqjgvfgregbjw";
 console.log(news.trim()); // it removes the extra spaces it works only white spaces
 const url = " techibars.com";
 console.log(url.replace('.com' , 'djnbfs')); // replace function replace the text with given text
 console.log(url.includes('love')) ; // it gives weather the url contains the ggiven keyword or not 
 const s123 = " i am founder of techibars";
 console.log(s123.split(' ')); // it splits the string on the basis of ggiven keyword into array
 