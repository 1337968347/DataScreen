class t{constructor(t,a){this.x=t,this.y=a}}const a=(t,a,r,n,s)=>{const c=M(t.y,a.y,r.y,n.y,s);return h(t.x,a.x,r.x,n.x,c[0])},h=(t,a,h,M,r)=>r*(3*a*Math.pow(r-1,2)+r*(-3*h*r+3*h+M*r))-t*Math.pow(r-1,3),M=(t,a,h,M,n)=>r((M-=n)-3*(h-=n)+3*(a-=n)-(t-=n),3*h-6*a+3*t,3*a-3*t,t).filter(t=>t>=0&&t<=1),r=(t,a,h,M)=>{if(0===t)return((t,a,h)=>{const M=a*a-4*t*h;return M<0?[]:[(-a+Math.sqrt(M))/(2*t),(-a-Math.sqrt(M))/(2*t)]})(a,h,M);const r=(3*(h/=t)-(a/=t)*a)/3,n=(2*a*a*a-9*a*h+27*(M/=t))/27;if(0===r)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-r),-Math.sqrt(-r)];const s=Math.pow(n/2,2)+Math.pow(r/3,3);if(0===s)return[Math.pow(n/2,.5)-a/3];if(s>0)return[Math.pow(-n/2+Math.sqrt(s),1/3)-Math.pow(n/2+Math.sqrt(s),1/3)-a/3];const c=Math.sqrt(Math.pow(-r/3,3)),e=Math.acos(-n/(2*Math.sqrt(Math.pow(-r/3,3)))),o=2*Math.pow(c,1/3);return[o*Math.cos(e/3)-a/3,o*Math.cos((e+2*Math.PI)/3)-a/3,o*Math.cos((e+4*Math.PI)/3)-a/3]};export{t as P,a as g}