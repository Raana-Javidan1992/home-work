
const fs = require('fs');


fs.readFile('./name.txt' , 'utf-8' , function(err,data){

    fs.readFile('./pNumber.txt' , 'utf-8' , function(err2,data2){
        
        let arr1 =  data
        .split('\r\n', 3)
        .toString()
        .split('-')
        .toString()
        .split(',')
        // console.log(arr1);

        let arr2 =  data2
        .split('\r\n', 3)
        .toString()
        .split('-')
        .toString()
        .split(',');
        // console.log(arr2);
        
        let str= [];
        for(let i=0; i<arr1.length; i++){
            str.push(`${arr1[i]} : ${arr2[i]} \n`) 
            // str[0].split('\n')           
        }
        let a = []
        a = str[0].split(" \n", 2)
        console.log(a);
       
        let arr2= data2.split('\r\n');
        let str = [];
        for (let i = 0; i <arr1.length; i++){
            str.push(`${arr1[i]} number is ${arr2[i]} \n`)
        }
        console.log(str);
        fs.writeFile('./result.txt' , str.join('') , function(){});        
    })
})
