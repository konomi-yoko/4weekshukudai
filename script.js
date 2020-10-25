// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
let hello = document.getElementsByTagName('p');
console.log(hello[2]);

// Q 2
let msg = document.getElementById('q2-text');
msg.textContent = '立つ鳥跡を濁さず';

// Q 3
let q3 = document.getElementById('q3-text');
q3.style.color = 'red';

// Q 4 (難)
// 「for of」を使います。
let q4 = document.querySelectorAll('.q4-text');
for (colo of q4) {
	colo.style.color = 'green';
}

// Q 5

let q5 = document.querySelectorAll('.q5-text');
for (colo of q5) {
	colo.style.backgroundColor = 'pink';
}
