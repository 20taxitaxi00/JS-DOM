// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
let q1 = document.querySelector('#q1-text');
console.log(q1.textContent);


// Q 2
let q2 = document.querySelector('#q2-text');
console.log(q2.textContent);
q2.textContent = "変更されておりまっす";


// Q 3
let q3 = document.querySelector('#q3-text');
console.log(q3.textContent);
document.querySelector('#q3-text').style.color = "red";


// Q 4 (難)
// 「for of」を使います。
let q4 = document.querySelectorAll('.q4-text');
console.log(q4);
for (Q4 of q4){
	Q4.style.color = "blue";
}


// Q 5
let q5 = document.querySelectorAll('.q5-text');
console.log(q5);
for (Q5 of q5){
	Q5.style.backgroundColor = "green";
}


// Q 6
let q6 = document.getElementById('q6-text');
// q6.onclick = function(){
// 	q6.style.color = "yellow";
// }
q6.addEventListener("click",function(){
	this.style.color = "yellow";
});


// Q 7
let q7 = document.getElementById('q7-text');
q7.addEventListener("mouseover",function(){
	this.style.color = "white";
	this.style.backgroundColor = "black";
});


// Q 8
let q8 = document.getElementById('q8-text');
q8.addEventListener("mouseover",function(){
	this.style.color = "white";
	this.style.backgroundColor = "black";
});
q8.addEventListener("mouseout",function(){
	this.style.color = "black";
	this.style.backgroundColor = "white";
});



// Q 9
let q9name = document.getElementById('q9-input');
let q9btn = document.getElementById('q9-btn');
let q9result = document.getElementById('q9-result');
// q9btn.onclick = function(){
// 	q9result.textContent = q9name.value;
// }
q9btn.addEventListener("click",function(){
	q9result.textContent = q9name.value;
});


// Q 10
let q10num = document.getElementById('q10-input');
let q10btn = document.querySelector('.q10-btn');
let q10result = document.getElementById('q10-result');
// q10btn.onclick = function(){
// 	if(q10num.value < 20){
// 		q10result.textContent = "20歳未満の方の利用は禁止です。";
// 	} else {
// 		q10result.textContent = q10num.value;
// 	}
// }
q10btn.addEventListener("click",function(){
	if(q10num.value < 20){
		q10result.textContent = "20歳未満の方の利用は禁止です。";
	} else {
		q10result.textContent = q10num.value;
	}
});


// Q 11
let q11name = document.getElementById('q11-input-name');
let q11age = document.getElementById('q11-input-age');
let q11btn = document.querySelector('.q11-btn');
let q11resultname =document.getElementById('q11-result-name');
let q11resultage = document.getElementById('q11-result-age');

q11btn.addEventListener("click",function(){
	if(!q11name.value && !q11age.value){
		q11resultname.textContent = "※名前と年齢を入力してください。";
	} else if(!q11name.value){
		q11resultname.textContent = "※名前が空欄です。";
		q11resultname.style.color = "red";
	} else if(!q11age.value){
		q11resultage.textContent = "※年齢が空欄です。";
	} else if(q11age.value < 20){
 		q11resultage.textContent = "20歳未満の方の利用は禁止です。";
	}　else{
		q11resultname.textContent = q11name.value;
 		q11resultage.textContent = q11age.value;
	}
});


// Q 12
let q12btn = document.querySelector('.q12-btn');
let q12result = document.querySelector('.q12-result');
// q12btn.onclick = function(){
// 	if(!q12result.hasChildNodes()){
// 		let p = document.createElement("p");
// 		let text = document.createTextNode("Google");
// 		p.appendChild(text);
// 		q12result.appendChild(p);
// 	}
// }
q12btn.addEventListener("click",function(){
	let p = document.createElement("p");
	q12result.appendChild(p);
	p.textContent = "Google";
});


// Q 13
// 飛ばしていいです。


// Q 14
let q14btn = document.querySelector('.q14-btn');
let li = document.getElementById('chicken');
q14btn.addEventListener("click",function(){
	li.remove(li);
});


// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。
let q15btn = document.querySelectorAll(".q15-btn");
let q15link = document.querySelector(".q15-link-list");
console.log(q15btn);
console.log(q15btn[0].textContent);

// q15btn.addEventListener("click",function(){
// 	if(q15btn[0].textContent === "Google"){
// 		var a = document.createElement("a");
// 		a.textContent = "Google";
// 		q15link.appendChild(a);
// 		a.href = 'https://google.com';
// 	} 
// 	else if (q15btn[1].textContent == "YouTube"){
// 		var a = document.createElement("a");
// 		a.textContent = "YouTube";
// 		q15link.appendChild(a);
// 		a.href = 'https://youtube.com';
// 	} else if(q15btn[2].textContent == "Amazon"){
// 		var a = document.createElement("a");
// 		a.textContent = "Amazon";
// 		q15link.appendChild(a);
// 		a.href = 'https://amazon.com';
// 	}
// });





// q15btn.onclick = function(){
// 	if(q15btn[0].textContent === 'Google'){
// 		let	a =document.createElement("a");
// 		let text = document.createTextNode("Google");
// 		a.appendChild(text);
// 		q15link.appendChild(a);
// 		let link = document.querySelector("a");
// 		link.href = 'https://google.com';
// 	} else if (q15btn[1].textContent === 'YouTube'){
// 		let	a =document.createElement("a");
// 		let text = document.createTextNode("YouTube");
// 		a.appendChild(text);
// 		q15link.appendChild(a);
// 		let link = document.querySelector("a");
// 		link.href = 'https://youtube.com';
// 	} else (q15btn[2].textContent === 'Amazon')
// 		let	a =document.createElement("a");
// 		let text = document.createTextNode("Amazon");
// 		a.appendChild(text);
// 		q15link.appendChild(a);
// 		let link = document.querySelector("a");
// 		link.href = 'https://amazon.com';
// }


// switch(q15btn.textContent){
// 		case 'Google':
// 			var	a =document.createElement("a");
// 			var text = document.createTextNode("Google");
// 			a.appendChild(text);
// 			q15link.appendChild(a);
// 			var link = document.querySelector("a");
// 			link.href = 'https://google.com';
// 			break;
// 		case 'YouTube':
// 			var	a =document.createElement("a");
// 			var text = document.createTextNode("YouTube");
// 			a.appendChild(text);
// 			q15link.appendChild(a);
// 			var link = document.querySelector("a");
// 			link.href = 'https://youtube.com';
// 			break;
// 		case 'Amazon':
// 			var	a =document.createElement("a");
// 			var text = document.createTextNode("Amazon");
// 			a.appendChild(text);
// 			q15link.appendChild(a);
// 			var link = document.querySelector("a");
// 			link.href = 'https://amazon.com';
// 			break;
// 	}


