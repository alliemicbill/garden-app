const loader = document.getElementById('loader');
results.classList.remove("hidden");
image.classList.add('hidden');

let answers =[];
answers = localStorage.getItem('answerArray');
var num1 = answers.split(',');
if((num1[0] === "1")||(num1[0] === "2")) {
   num1[0] = "1";
} else {
     num1[0] = "2";    
}
if (num1[1] === "4") {
    num1[1] = "3";
} 
if (num1[2] === "4") {
      num1[2] = "3";
} 

var num = num1.join(""); 
console.log(num);
function matchNum(obj) {
    var objects = [];
    var b = 0;
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        var a = (JSON.stringify(obj)).split('"},"');
        var check = a[b];
        console.log(check);
        if( check.includes(num)){
            
            var words = check.split('","');
            
            var chars1 = words[0].split('":"');
            var chars2 = words[1].split('":"');
            var chars3 = words[2].split('":"');
            var final1 =chars1[1].split('":"');
            var final2 =chars2[1].split('":"');
            var final3 =chars3[1].split('":"');
            console.log(final2);
            objects[0]= final1[0];
            objects[1]= final2[0];
            objects[2]= final3[0];
            
        }
        b++;
    }
    return objects;
}

fetch("plantlist.json")
.then(res => {
   return res.json();
})
.then(data => {
    let stuff = ["","",""];
    stuff=matchNum(data);
    loader.classList.add('hidden');
    names.innerHTML = stuff[0];
    console.log(stuff[1]);
    image.src = stuff[1];
    des.innerHTML = stuff[2];
    image.classList.remove('hidden');
    var look = stuff[0].split(" ");
    console.log(look[0]);
    if (look.length == 2){
    lookup.href = 'https://www.google.com/search?q="' + look[0] + '+' + look[1] +'"';
    } else {
        lookup.href = 'https://www.google.com/search?q="' + look[0] + '"'; 
    }
    
    
    
});
