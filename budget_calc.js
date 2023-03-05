var hous = document.getElementById("#housing_budget");
var trans = document.getElementById("#transportation_budget");
var foo = document.getElementById("#food_budget");
var insu = document.getElementById("#insurance_budget");
var pho = document.getElementById("#phone_internet_budget");

let monthly_income = document.getElementById("monthly_income");
const categories = ["housing", "transportation", "food", "insurance","phone + internet"];
const nums = [30, 15, 12.5, 17.5, 7.5]
const cur = [hous,trans,foo,insu,pho]
let change = [false, false, false,false,false];
let totSav = [0,0,0,0,0]


let perc;
let saving = 0;
for(let i=0; i<5; i++){
    perc = (cur[i]/monthly_income)*100;
    if(perc > nums[i]){
        saving += (cur[i] - monthly_income*(nums[i]/100));
        totSav[i] += (cur[i] - monthly_income*(nums[i]/100));
        change[i] = true;
    }
}
for(let i=0; i<5; i++){
    if(change[i] == true){
        var output = "Reccomended price to " + categories[i] + " " +  totSav[i];
    }
} 
console.log("Total Savings: " + saving);