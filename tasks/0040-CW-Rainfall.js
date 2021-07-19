funcion parseNumber (n) {
  return n.replace(/[^0-9-.,]/g,'')
 }
 function mean(town, string) {
string = string.split("\n")
for (let i = 0; i <string.length;i++){
 if(string[i].substring(0,string[i].indexOf(":"))==town){
 string[i] = parseNumber(string[i])
string[i]=string[i].split(",")
 return string[i].reduce(function(a, b) {return Number(a) + Number(b)})/12
}

}
   return -1
}
 function variance(town, string) {
     data = string
  string =String( string).split("\n")
 for (let i = 0; i <string.length;i++){
 if(string[i].substring(0,string[i].indexOf(":"))==town){
 string[i] = parseNumber(string[i])
 string[i]=string[i].split(",")
     let sum = 0
 for(let j = 0; j <string[i].length; j++){
sum +=(string[i][j] - mean (town, data))**2
}
return sum/12
}

 }   
   return -1
}t
