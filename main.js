let arr=[];
function solve(eq){
arr= eq.split(/([+\-\*\/])/).reverse().join("");
return arr;
}