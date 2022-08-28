function a(t){const e=[...t];let n=e.length,r;for(;n!==0;)r=Math.floor(Math.random()*n),n--,[e[n],e[r]]=[e[r],e[n]];return e}export{a as s};
