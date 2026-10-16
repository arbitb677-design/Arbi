const CONFIG = {
  signupUrl: "",
  whatsapp: "",
  telegram: "",
  goatcounter: "",
  productUrl: "",
  productPrice: ""
};
(function(){
  var d=document, main=d.querySelector("#faq")||d.body;
  function sec(id,html){if(!d.querySelector("#faq"))return;var s=d.createElement("section");s.className="section";s.id=id;s.innerHTML='<div class="wrap">'+html+'</div>';main.parentNode.insertBefore(s,main);}
  sec("more",'<h2>الأسابيع والمقالات</h2><div class="cta"><a class="btn" href="week-1.html">الأسبوع 1</a> <a class="btn" href="week-2.html">2</a> <a class="btn" href="week-3.html">3</a> <a class="btn" href="week-4.html">4</a> <a class="btn" href="articles.html">مقالات</a></div>');
  sec("tracker",'<h2>تتبّع تقدّمك</h2><p>عندنا صفحة تعلّم فيها شنوة كملت كل يوم.</p><div class="cta"><a class="btn primary" href="tracker.html">حل المتتبّع</a></div>');
  if(CONFIG.productUrl) sec("buy",'<h2>المخطط الكامل (PDF)</h2><p>30 يوم، خطوات مفصّلة ونصائح، جاهز للطباعة.'+(CONFIG.productPrice?' السعر: <b>'+CONFIG.productPrice+'</b>':'')+'</p><div class="cta"><a class="btn primary" href="'+CONFIG.productUrl+'" target="_blank" rel="noopener">اشري التو</a></div>');
  if(CONFIG.signupUrl) sec("gift",'<h2>هدية مجانية</h2><p>سجّل إيميلك وتوصلك أول أسبوع من المخطط مجانًا.</p><div class="cta"><a class="btn primary" href="'+CONFIG.signupUrl+'" target="_blank" rel="noopener">ابعثلي الهدية</a></div>');
  if(CONFIG.whatsapp||CONFIG.telegram){var b='';
    if(CONFIG.whatsapp)b+='<a class="btn" href="'+CONFIG.whatsapp+'" target="_blank" rel="noopener">WhatsApp</a> ';
    if(CONFIG.telegram)b+='<a class="btn" href="'+CONFIG.telegram+'" target="_blank" rel="noopener">Telegram</a>';
    sec("community",'<h2>ادخل للمجموعة</h2><p>نشاركو التصاميم ونتعاونو.</p><div class="cta">'+b+'</div>');}
  if(CONFIG.productUrl){var bar=d.createElement("a");bar.href=CONFIG.productUrl;bar.target="_blank";bar.rel="noopener";bar.textContent="اشري المخطط"+(CONFIG.productPrice?" — "+CONFIG.productPrice:"");bar.style.cssText="position:fixed;bottom:14px;left:14px;z-index:9;background:#15182b;color:#fff;padding:10px 16px;border-radius:999px;font:600 14px sans-serif;text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.25)";d.body.appendChild(bar);}
  if(CONFIG.goatcounter){var s=d.createElement("script");s.async=true;s.dataset.goatcounter="https://"+CONFIG.goatcounter+".goatcounter.com/count";s.src="https://gc.zgo.at/count.js";d.head.appendChild(s);}
})();
