const o={"+":2,"-":2,"*":3,"#":3,"/":3,"**":4,"^":5,"^2":5,"^3":5};function u(p){return p==="("?0:o[p]||1}const m={"+":"l","-":"l","*":"l","#":"l","/":"l"};function $(p){return m[p]||"r"}const z=["+","-","*","#","/","^","("];function n(p){return!z.includes(p)}function g(p){p=p.toLowerCase();const t=[];let s=!1;for(;;){let l;if(p.length===0)break;p[0]==="$"||p[0]==="@"?p=p.slice(1):(l=p.match(/^\d+(?:\.\d+)?/))||!s&&(l=p.match(/^-\d+(?:\.\d+)?/))?(s&&t.push("**"),s=!0,t.push(+l[0]),p=p.slice(l[0].length)):(l=p.match(/^(sin|cos|tan|exp|log|abs|min|max)/))?(s&&t.push("**"),s=!1,t.push(l[0]),p=p.slice(l[0].length)):(l=p.match(/^(pi|pz|ppz|sz|e|i|c|z|p|m|t|fx|fy)/))?(s&&t.push("**"),s=!0,t.push(l[0]),p=p.slice(l[0].length)):(l=p.match(/^\.[xy]/))||(l=p.match(/^\^[23]/))?(s=!0,t.push(l[0]),p=p.slice(l[0].length)):((l=p.match(/^[-+*#\/^()]/))&&(s&&l[0]==="("&&t.push("**"),s=!1,l[0]===")"&&(s=!0),t.push(l[0])),p=p.slice(1))}const e=[],c=[];let f;for(;f=t.shift();)if(typeof f=="number"||f.match(/^(pi|pz|ppz|sz|e|i|c|z|fx|fy)$/))e.push(f);else if(f.match(/^\.[xy]$/))e.push(f);else if(f===")"){for(;c[c.length-1]!=="(";){const h=c[c.length-1];if(!h)return["z"];c.pop(),e.push(h)}if(c.pop()!=="(")return["z"];const l=c[c.length-1];if(!l)continue;n(l)&&(c.pop(),e.push(l))}else if(f==="("||n(f))c.push(f);else{const l=f;let h;for(;(h=c[c.length-1])&&h!=="(";){const i=u(l),r=u(h);if(!(r>i||i===r&&$(l)==="l"))break;e.push((c.pop(),h))}c.push(l)}for(;f=c.pop();){if(f==="("||f===")")return["z"];e.push(f)}return e}function v(p){var t;try{const s=[];for(let e of p)if(typeof e=="number")s.push(`vec2(${e}, 0)`);else if(e==="i")s.push("vec2(0, 1)");else if(e==="pi")s.push("vec2(3.141592653589793, 0)");else if(e==="e")s.push("vec2(2.718281828459045, 0)");else if(e==="t")s.push("vec2(time, 0)");else if(e==="m"||e==="p")s.push("mouse");else if(e==="fx")s.push("vec2(1, -1)");else if(e==="fy")s.push("vec2(-1, 1)");else if(e.match(/^(pz|ppz|sz|c|z)$/))s.push(e);else if(e==="+"||e==="-"||e==="#"){const c=s.pop(),f=(t=s.pop())!=null?t:"";s.push(`${f} ${e==="#"?"*":e} ${c}`)}else if(e==="^2")s.push(`sqr(${s.pop()})`);else if(e==="^3")s.push(`cube(${s.pop()})`);else if(e==="*"||e==="**"||e==="/"||e==="^"||e==="min"||e==="max"){e==="/"?e="div":e==="^"?e="cx_pow":(e==="*"||e==="**")&&(e="mult");const c=s.pop(),f=s.pop();s.push(`${e}(${f}, ${c})`)}else e==="abs"?s.push(`abs(${s.pop()})`):e==="sin"||e==="cos"||e==="tan"||e==="exp"||e==="log"?s.push(`cx_${e}(${s.pop()})`):(e===".x"||e===".y")&&s.push(`vec2((${s.pop()})${e}, 0)`);return s.length!==1?"z":s[0]}catch{return"z"}}function x(p){return v(g(p))}export{x as g};
