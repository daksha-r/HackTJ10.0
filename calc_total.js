const str = "TOTAL AMOUNT/n 12312";
const subs = "TOTAL";
const contains = str.includes(substring);
let sit = true;
let arr = ["0","1","2","3","4","5","6","7","8","9"]
if(contains == true){
    let ind = str.indexOf(subs);
 
    while(sit == true){
        if (arr.includes(str[ind])){
            sit = false;
        }
        ind += 1;
    }
    const sta = ind;
    sit = true;
    while(sit == true){
        if(arr.includes(str[ind]) == false){
            if(str[ind] == "." || str[ind] == ","){
                console.log("hi");
            } else {
                sit = false;
                break;
            }
        }
        ind += 1;
    }
    const num = str.substring(sta, ind);
    let fin = parseFloat(str.replace(/,/g, ""));
 
}
 
console.log(fin); 