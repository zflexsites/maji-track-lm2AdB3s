import{b as S,_ as $}from"../js/app.js";const B=window.zflexEventBus||window.zflexEventBus===void 0&&(window.zflexEventBus=new EventTarget);function D(t,n,o="error"){B.dispatchEvent(new CustomEvent("dialog:show",{detail:{title:t,message:n,variant:o}}))}function u(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function N(t){try{if(!t)return new Date;if(typeof t=="string"){const o=new Date(t);if(!isNaN(o.getTime()))return o;const r=Number(t);return isNaN(r)?new Date:new Date(r)}if(typeof t=="number")return t>1e12?new Date(t):t>1e9?new Date(t):new Date(t*1e3);if(t instanceof Date)return t;if(t&&typeof t.toDate=="function")try{return t.toDate()}catch{}const n=new Date(t);if(!isNaN(n.getTime()))return n}catch{}return new Date}function U(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function C(t,n=160){if(!t)return null;try{if(window.QRCode){const r=window.QRCode;if(typeof r.toDataURL=="function")return await new Promise((a,d)=>r.toDataURL(t,{width:n},(e,c)=>e?d(e):a(c)));if(typeof r.toCanvas=="function")return await new Promise((a,d)=>{try{const e=document.createElement("canvas");r.toCanvas(e,t,{width:n},c=>c?d(c):a(e.toDataURL("image/png")))}catch(e){d(e)}})}const o=await $(()=>import("./browser-BXdiCFWD.js").then(r=>r.b),[]).catch(()=>null);if(o){const r=o.toDataURL||o.default&&o.default.toDataURL;if(typeof r=="function")return await r(t,{width:n})}}catch(o){console.warn("[QR] génération échouée:",o)}return null}function A(t,n){var f,w,h;const r=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),a=Array.isArray(t.items)&&t.items.length?t.items.map(l=>{const b=l.quantity||1,E=l.title||l.id||"Produit",x=typeof l.price=="object"?Number(l.price.amount||0):Number(l.price||0),I=typeof l.price=="object"?l.price.currency||t.currency||"":t.currency||"",R=(x*b).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:14px;line-height:1.2">
                    <div style="max-width:65%;overflow-wrap:break-word">${u(`${b} × ${E}`)}</div>
                    <div style="white-space:nowrap">${u(R)} ${u(I)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:var(--text-muted-color, #6b7280)">Aucun item disponible</div>',d=(typeof t.total=="object"?Number(t.total.amount||0):Number(t.total||0)).toFixed(2),e=(typeof t.total=="object"?t.total.currency:t.currency)||"",c=((f=t.store)==null?void 0:f.logoUrl)||null,p=c&&U(c),g=t.store&&t.store.name&&String(t.store.name).trim().charAt(0)||"B",s=`
    :root{
      --bg-color: #ffffff;
      --text-color: #111827;
      --primary-color: #000000;
      --secondary-color: #6B7280;
      --card-bg-color: #ffffff;
      --card-border-color: #E5E7EB;
      --text-muted-color: #6B7280;
      --font-family: Inter, Arial, Helvetica, sans-serif;
    }
    html,body{margin:0;padding:0;font-family:var(--font-family);background:var(--bg-color);color:var(--text-color)}
    .receipt{box-sizing:border-box;width:600px;padding:28px;background:var(--card-bg-color);color:var(--text-color);border:1px solid var(--card-border-color);border-radius:8px}
    .header{text-align:center;margin-bottom:8px}
    .meta{display:flex;justify-content:space-between;margin:18px 0;color:var(--text-muted-color)}
    .items{margin-bottom:18px}
    .footer{display:flex;justify-content:space-between;align-items:center}
    .qrbox{width:140px;height:140px;display:flex;align-items:center;justify-content:center;border:1px solid var(--card-border-color);border-radius:8px;background:var(--card-bg-color)}
    .logo-sq{display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:8px;font-weight:700;color:var(--card-bg-color);background:var(--primary-color);font-size:22px;margin-bottom:4px}
    .logo-img{max-height:40px;object-fit:contain;margin-bottom:4px}
    .items .title{font-size:14px}
  `,i=`
    (function() {
      try {
        // list of vars we care about (extendable)
        const vars = [
          '--bg-color',
          '--text-color',
          '--primary-color',
          '--secondary-color',
          '--card-bg-color',
          '--card-border-color',
          '--text-muted-color',
          '--font-family'
        ];
        const parentStyle = window.parent && window.parent.getComputedStyle
          ? window.parent.getComputedStyle(window.parent.document.documentElement)
          : null;
        if (!parentStyle) return;
        vars.forEach(k => {
          const v = parentStyle.getPropertyValue(k);
          if (v) document.documentElement.style.setProperty(k, v.trim());
        });
      } catch (e) {
        // ignore cross-origin or other issues
      }
    })();
  `,y=p?`<img class="logo-img" src="${u(c)}" alt="${u(((w=t.store)==null?void 0:w.name)||"")}">`:`<div class="logo-sq" aria-hidden="true">${u(g)}</div>`,m=n?`<img src="${n}" alt="QR" style="width:120px;height:120px;object-fit:contain"/>`:'<div style="font-size:12px;color:var(--text-muted-color)">QR indisponible</div>',v=u(((h=t.store)==null?void 0:h.name)||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${i}<\/script>
  <style>${s}</style>
</head>
<body>
  <div class="receipt" id="receipt-root" role="document" aria-label="Récapitulatif de commande">
    <div class="header">
      ${y}
      <h2 style="margin:0 0 6px 0;font-size:20px">Récapitulatif de commande</h2>
      <div style="font-size:12px;color:var(--text-muted-color)">${v}</div>
    </div>

    <div class="meta">
      <div>
        <div style="font-size:12px;color:var(--text-muted-color)">Commande N°</div>
        <div style="font-weight:700">${u(t.id||"")}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:var(--text-muted-color)">Date</div>
        <div>${u(r)}</div>
      </div>
    </div>

    <div class="items">${a}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:12px;color:var(--text-muted-color)">Total</div>
        <div style="font-weight:700;font-size:18px">${u(d)} ${u(e)}</div>
      </div>
      <div class="qrbox">${m}</div>
    </div>
  </div>
</body>
</html>`}async function L(t,n={}){const{timeoutMs:o=15e3,html2canvasCdn:r="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=n;return new Promise((a,d)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let c=!1;const p=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}c=!0},g=setTimeout(()=>{c||(p(),d(new Error("Timeout: génération du récapitulatif trop longue.")))},o),s=t.replace("</body>",`<script src="${r}"><\/script></body>`);e.srcdoc=s,e.onload=async()=>{if(!c)try{const i=e.contentWindow,y=e.contentDocument,m=Date.now(),v=100;await new Promise((b,E)=>{const x=setInterval(()=>{if(c)return clearInterval(x),E(new Error("Aborted"));if(i.html2canvas)return clearInterval(x),b();if(Date.now()-m>Math.min(o,8e3))return clearInterval(x),E(new Error("html2canvas not loaded in iframe"))},v)});const w=y.getElementById("receipt-root")||y.body;if(!w)return p(),clearTimeout(g),d(new Error("No receipt node inside iframe"));const l=(await i.html2canvas(w,{backgroundColor:"#ffffff"})).toDataURL("image/png");p(),clearTimeout(g),a(l)}catch(i){p(),clearTimeout(g),d(i)}}})}function z(t){const n=document.getElementById("order-id");n&&(n.textContent=t.id||"");const o=document.getElementById("qrcode-container");o&&(o.innerHTML="",(async()=>{const r=await C(t.id,160);if(r){const a=document.createElement("img");a.src=r,a.alt="QR Code",a.style.width="160px",a.style.height="160px",o.appendChild(a)}else{const a=document.createElement("span");a.textContent=t.id||"",a.style.fontSize="12px",a.style.color="var(--text-muted-color, #6b7280)",o.appendChild(a)}})())}async function q(){var a,d;const t=document.getElementById("loading-state"),n=document.getElementById("success-state"),o=document.getElementById("error-state"),r=document.getElementById("error-message");try{const c=new URLSearchParams(window.location.search).get("id");if(!c)throw new Error("ID de commande manquant dans l'URL.");const p=document.getElementById("zflex-data");if(!p)throw new Error("Tunnel de data introuvable.");const g=JSON.parse(p.textContent||"{}"),s=await S(c,g.storeId);if(!(s!=null&&s.valid)||!(s!=null&&s.order))throw new Error((s==null?void 0:s.message)||"Commande invalide ou déjà traitée.");const i=s.order,y={id:i.id,items:Array.isArray(i.items)?i.items:[],createdAt:N(i.createdAt)||new Date,total:typeof i.total=="object"?i.total:{amount:Number(i.total||0),currency:i.currency||""},currency:i.currency||"",store:{name:((a=i.store)==null?void 0:a.name)||g.storeName||"Boutique",logoUrl:((d=i.store)==null?void 0:d.logoUrl)||null},customer:i.customer||{name:"Client"}};z(y);const m=document.getElementById("download-receipt-btn");m&&m.addEventListener("click",async()=>{m.disabled=!0;const v=m.textContent;m.textContent="Génération...";try{const f=await C(y.id,300),w=A(y,f),h=await L(w),l=document.createElement("a");l.href=h,l.download=`recap-commande-${y.id}.png`,document.body.appendChild(l),l.click(),l.remove()}catch(f){console.error("Erreur génération:",f),D("Erreur",(f==null?void 0:f.message)||"Impossible de générer","error")}finally{m.disabled=!1,m.textContent=v||"Télécharger le récapitulatif"}}),t&&(t.style.display="none"),n&&n.classList.remove("hidden")}catch(e){console.error("[OrderSuccess] Erreur:",e),r&&(r.textContent=(e==null?void 0:e.message)||"Impossible de récupérer la commande."),t&&(t.style.display="none"),o&&o.classList.remove("hidden"),D("Commande",(e==null?void 0:e.message)||"Erreur commande","error")}}export{q as initOrderSuccess};
