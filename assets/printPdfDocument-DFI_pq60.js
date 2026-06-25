import{p as a}from"./react-pdf.browser-C226WNTP.js";const l=t=>String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),p=async(t,n="Preparing document")=>{if(!t)throw new Error("The PDF document is not available for printing.");const e=window.open("","_blank");if(!e)throw new Error("Please allow pop-ups for Smartbooks to print this PDF.");const r=l(n);e.document.open(),e.document.write(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${r}</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0; min-height: 100vh; display: grid; place-items: center;
            background: #07111f; color: #dbe7f5; font-family: Arial, sans-serif;
          }
          div { display: flex; align-items: center; gap: 12px; font-size: 14px; }
          i {
            width: 20px; height: 20px; border: 2px solid rgba(35, 207, 190, .25);
            border-top-color: #23cfbe; border-radius: 50%; animation: spin .75s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        </style>
      </head>
      <body><div><i></i><span>${r}…</span></div></body>
    </html>
  `),e.document.close();try{const o=await a(t).toBlob(),i=URL.createObjectURL(o);e.location.replace(i),window.setTimeout(()=>{try{e.focus(),e.print()}catch{}},1200),window.setTimeout(()=>URL.revokeObjectURL(i),6e4)}catch(o){throw e.close(),o}};export{p};
