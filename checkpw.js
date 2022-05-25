async function checkPassword() {
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	
	var MD5;(()=>{"use strict";var r={d:(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o:(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},n={};(()=>{r.r(n),r.d(n,{MD5:()=>d,generate:()=>e});var t=function(r){r=r.replace(/\r\n/g,"\n");for(var n="",t=0;t<r.length;t++){var e=r.charCodeAt(t);e<128?n+=String.fromCharCode(e):e>127&&e<2048?(n+=String.fromCharCode(e>>6|192),n+=String.fromCharCode(63&e|128)):(n+=String.fromCharCode(e>>12|224),n+=String.fromCharCode(e>>6&63|128),n+=String.fromCharCode(63&e|128))}return n};function e(r){var n,e,o,d,l,C,h,v,S,m;for(n=function(r){for(var n,t=r.length,e=t+8,o=16*((e-e%64)/64+1),u=Array(o-1),a=0,f=0;f<t;)a=f%4*8,u[n=(f-f%4)/4]=u[n]|r.charCodeAt(f)<<a,f++;return a=f%4*8,u[n=(f-f%4)/4]=u[n]|128<<a,u[o-2]=t<<3,u[o-1]=t>>>29,u}(t(r)),h=1732584193,v=4023233417,S=2562383102,m=271733878,e=0;e<n.length;e+=16)o=h,d=v,l=S,C=m,h=a(h,v,S,m,n[e+0],7,3614090360),m=a(m,h,v,S,n[e+1],12,3905402710),S=a(S,m,h,v,n[e+2],17,606105819),v=a(v,S,m,h,n[e+3],22,3250441966),h=a(h,v,S,m,n[e+4],7,4118548399),m=a(m,h,v,S,n[e+5],12,1200080426),S=a(S,m,h,v,n[e+6],17,2821735955),v=a(v,S,m,h,n[e+7],22,4249261313),h=a(h,v,S,m,n[e+8],7,1770035416),m=a(m,h,v,S,n[e+9],12,2336552879),S=a(S,m,h,v,n[e+10],17,4294925233),v=a(v,S,m,h,n[e+11],22,2304563134),h=a(h,v,S,m,n[e+12],7,1804603682),m=a(m,h,v,S,n[e+13],12,4254626195),S=a(S,m,h,v,n[e+14],17,2792965006),h=f(h,v=a(v,S,m,h,n[e+15],22,1236535329),S,m,n[e+1],5,4129170786),m=f(m,h,v,S,n[e+6],9,3225465664),S=f(S,m,h,v,n[e+11],14,643717713),v=f(v,S,m,h,n[e+0],20,3921069994),h=f(h,v,S,m,n[e+5],5,3593408605),m=f(m,h,v,S,n[e+10],9,38016083),S=f(S,m,h,v,n[e+15],14,3634488961),v=f(v,S,m,h,n[e+4],20,3889429448),h=f(h,v,S,m,n[e+9],5,568446438),m=f(m,h,v,S,n[e+14],9,3275163606),S=f(S,m,h,v,n[e+3],14,4107603335),v=f(v,S,m,h,n[e+8],20,1163531501),h=f(h,v,S,m,n[e+13],5,2850285829),m=f(m,h,v,S,n[e+2],9,4243563512),S=f(S,m,h,v,n[e+7],14,1735328473),h=i(h,v=f(v,S,m,h,n[e+12],20,2368359562),S,m,n[e+5],4,4294588738),m=i(m,h,v,S,n[e+8],11,2272392833),S=i(S,m,h,v,n[e+11],16,1839030562),v=i(v,S,m,h,n[e+14],23,4259657740),h=i(h,v,S,m,n[e+1],4,2763975236),m=i(m,h,v,S,n[e+4],11,1272893353),S=i(S,m,h,v,n[e+7],16,4139469664),v=i(v,S,m,h,n[e+10],23,3200236656),h=i(h,v,S,m,n[e+13],4,681279174),m=i(m,h,v,S,n[e+0],11,3936430074),S=i(S,m,h,v,n[e+3],16,3572445317),v=i(v,S,m,h,n[e+6],23,76029189),h=i(h,v,S,m,n[e+9],4,3654602809),m=i(m,h,v,S,n[e+12],11,3873151461),S=i(S,m,h,v,n[e+15],16,530742520),h=c(h,v=i(v,S,m,h,n[e+2],23,3299628645),S,m,n[e+0],6,4096336452),m=c(m,h,v,S,n[e+7],10,1126891415),S=c(S,m,h,v,n[e+14],15,2878612391),v=c(v,S,m,h,n[e+5],21,4237533241),h=c(h,v,S,m,n[e+12],6,1700485571),m=c(m,h,v,S,n[e+3],10,2399980690),S=c(S,m,h,v,n[e+10],15,4293915773),v=c(v,S,m,h,n[e+1],21,2240044497),h=c(h,v,S,m,n[e+8],6,1873313359),m=c(m,h,v,S,n[e+15],10,4264355552),S=c(S,m,h,v,n[e+6],15,2734768916),v=c(v,S,m,h,n[e+13],21,1309151649),h=c(h,v,S,m,n[e+4],6,4149444226),m=c(m,h,v,S,n[e+11],10,3174756917),S=c(S,m,h,v,n[e+2],15,718787259),v=c(v,S,m,h,n[e+9],21,3951481745),h=u(h,o),v=u(v,d),S=u(S,l),m=u(m,C);return g(h)+g(v)+g(S)+g(m)}function o(r,n){return r<<n|r>>>32-n}function u(r,n){var t,e,o,u,a;return o=2147483648&r,u=2147483648&n,a=(1073741823&r)+(1073741823&n),(t=1073741824&r)&(e=1073741824&n)?2147483648^a^o^u:t|e?1073741824&a?3221225472^a^o^u:1073741824^a^o^u:a^o^u}function a(r,n,t,e,a,f,i){return r=u(r,u(u(function(r,n,t){return r&n|~r&t}(n,t,e),a),i)),u(o(r,f),n)}function f(r,n,t,e,a,f,i){return r=u(r,u(u(function(r,n,t){return r&t|n&~t}(n,t,e),a),i)),u(o(r,f),n)}function i(r,n,t,e,a,f,i){return r=u(r,u(u(function(r,n,t){return r^n^t}(n,t,e),a),i)),u(o(r,f),n)}function c(r,n,t,e,a,f,i){return r=u(r,u(u(function(r,n,t){return n^(r|~t)}(n,t,e),a),i)),u(o(r,f),n)}function g(r){var n,t="",e="";for(n=0;n<=3;n++)t+=(e="0"+(r>>>8*n&255).toString(16)).substr(e.length-2,2);return t}var d={generate:e}})(),MD5=n})();
	
	var pwhash = MD5.generate(password);
	
	let myResponse = await fetch("login.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({username: username, pwhash: pwhash})
	});
	
	let result = await myResponse.json();
    let output = JSON.stringify(result)
	
	if (output == '{"info":true}'){
		window.location.replace('home.html');
	} else if (output == '{"info":false}'){
		document.getElementById('error').innerHTML = "</br>Incorrect username or password!";
	} else {
		document.getElementById('error').innerHTML = "User does not exist!";
	}
}