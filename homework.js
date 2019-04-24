

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