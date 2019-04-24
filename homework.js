

//1
const summation =function(num){
    //const sum=[];
    let sum=0;
    for (let i = 0; i <= num; i++) {
        sum+=i;//1
        
        
    }
    console.log(sum);
    }

//2
const summationOfEven =function(num){
    //const sum=[];
    let sum=0;
    for (let i = 0; i <= num; i++) {
    if(i%2==0)
        sum+=i;//1
        
        
    }
    console.log(sum);
    }

//3

const calculateAvrage = function(avg){
    // const avg =[8,2,2,4];
     let sum=0;
 for (let i = 0; i < avg.length; i++) {
     sum=sum+avg[i];
 //console.log(sum)
     
 }
 console.log(sum)
     let avrage=sum/avg.length;
 return avrage;
 }

 //4
 const reverse=function(str){
    const arr=[];
        for(let i=0;i<str.length;i++){
    arr[i]=str[i];
        }
    let strRev=arr.reverse();
    return strRev.join("");
    }

//5
const addDashes=function(words){
    //  for (let i = 0; i < words.length; i++) {
       let wordDash =words.join('-');
    //console.log(sum)
        
    return wordDash;
   }
//6
const countUpAndDown=function(num){
    let i=1;
    let j=0;
    let str=" ";
    const arr =[];
    while(i<=num){
    
     str +=" "+i;
    //console.log(str);
    arr[j]=i;
    i++;
    j++
    }
    arr.pop();
    let strRev =arr.reverse().join(" ");
    
    
    console.log(str+" "+strRev);
    
    }
//7
const wordsWithA = function(animal){
    const newArr=[];
    for(let i=0;i<animal.length;i++){
    if(animal[i].indexOf('a')!= -1){
    newArr.push(animal[i]);
    
    }
    
    }
    return newArr;
        }//close
//8
const wordsWithLetter = function(letter,animal){
    const newArr=[];
    for(let i=0;i<animal.length;i++){
    if(animal[i].indexOf(letter)!= -1){
    newArr.push(animal[i]);
    
    }
    
    }
    return newArr;
        }//close
//9
const longestWord = function(str){
    let newStr=str.split(" ");
    let longestStr="";
    
    for(let i=0;i<newStr.length;i++){
   
         if(newStr[i].length>longestStr.length){
     longestStr=newStr[i];
   // console.log("1")
    }else{
    longestStr=longestStr;
    //console.log("2")
    }
    
    }
    return longestStr;
        }//close
//10
const largestEvenNumber = function(arrayNum){
    let largestNum=0;
    let evenArr=[];
    for(let i=0;i<arrayNum.length;i++){
    if(arrayNum[i]%2==0){ 
    
    evenArr.push(arrayNum[i]);}
    
    
    }//checkforeven
    console.log(evenArr);
    for(let i=0;i<evenArr.length;i++){
    
      if(evenArr[i]>largestNum){
         largestNum=evenArr[i];
       
        }else{
        largestNum=largestNum;
       
        }
    
    }//forloop for the even arr
        
    
    
    return largestNum;
        }//close