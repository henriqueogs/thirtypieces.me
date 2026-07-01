(function(){
  // ── overlay dos depoimentos (independe do GSAP) ──
  const overlay=document.getElementById("overlay");
  const content=document.getElementById("depo-content");
  function open(card){
    const depo=card.querySelector(".deposition");
    if(!depo) return;
    content.innerHTML=depo.innerHTML;
    overlay.classList.add("open");
  }
  function close(){ overlay.classList.remove("open"); }
  document.querySelectorAll(".card").forEach(c=>c.addEventListener("click",()=>open(c)));
  overlay.addEventListener("click",e=>{
    if(e.target===overlay||e.target.classList.contains("depo-close")) close();
  });
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") close(); });

  // ── animações ──
  if(!window.gsap || !window.ScrollTrigger){
    var bc=document.querySelector(".bootcover"); if(bc) bc.style.display="none";
    console.warn("GSAP não carregou."); return;
  }
  gsap.registerPlugin(ScrollTrigger);
  const reduce=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  if(reduce) document.body.classList.add("reduced");

  // assinatura de movimento: foco emergindo do desfoque, suave (clima melancólico)
  const TA="play none none reverse";
  function bin(o){ o=o||{}; return {
    opacity:0,
    y:reduce?0:(o.y!=null?o.y:34),
    filter:reduce?"none":("blur("+(o.blur!=null?o.blur:13)+"px)"),
    duration:reduce?0.01:(o.duration||1.25),
    ease:o.ease||"power2.out",
    stagger:(o.stagger!=null?o.stagger:0.16)
  };}
  function reveal(sel,start,o){
    o=o||{};
    gsap.from(sel, Object.assign(bin(o), {
      scrollTrigger:{ trigger:o.trigger||sel, start:start||"top 82%", toggleActions:TA }
    }));
  }

  // abertura: fade do preto + hero saindo do desfoque
  const cover=document.querySelector(".bootcover");
  gsap.to(cover,{opacity:0,duration:reduce?.01:1.3,ease:"power2.out",
    onComplete:()=>{ if(cover) cover.style.display="none"; }});
  if(!reduce) gsap.from("#hero-frame",{filter:"blur(22px)",duration:1.6,ease:"power2.out"});
  gsap.from("#hero .hero-copy > *", Object.assign(bin({y:28,blur:14,duration:1.4,stagger:.18}),{delay:reduce?0:.45}));

  // textos de todos os blocos
  reveal("#silver .weight-copy > *","top 72%",{stagger:.16});
  reveal("#gallery .gallery-intro > *","top 78%",{stagger:.18,duration:1.5});
  gsap.utils.toArray("#turn .reveal").forEach(el=> reveal(el,"top 85%",{stagger:0,duration:1.3}));
  gsap.utils.toArray("#echo .reveal").forEach(el=> reveal(el,"top 88%",{stagger:0,duration:1.3}));

  if(!reduce){
    // hero: zoom lento + texto se desfaz ao sair
    gsap.fromTo("#hero-frame",{scale:1.12},{scale:1,ease:"none",
      scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:.9}});
    gsap.to("#hero .hero-copy",{yPercent:-14,opacity:0,filter:"blur(8px)",ease:"none",
      scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:.9}});

    // bloco 2: clip-wipe + parallax
    gsap.fromTo("#silver .frame",{clipPath:"inset(0 0 0 100%)"},{clipPath:"inset(0% 0% 0% 0%)",
      duration:1.2,ease:"power3.inOut",scrollTrigger:{trigger:"#silver",start:"top 72%",toggleActions:TA}});
    gsap.fromTo("#silver .frame",{scale:1.1},{scale:1,ease:"none",
      scrollTrigger:{trigger:"#silver",start:"top bottom",end:"bottom top",scrub:.9}});

    // corredor: timeline rolável + pausa no último card
    const track=document.getElementById("track");
    if(track){
      const cards=gsap.utils.toArray(".card");
      const vw=window.innerWidth;
      const amount=Math.max(0,track.scrollWidth-vw);
      const hold=Math.round(window.innerHeight*0.65); // dwell de saída: segura o último card (o beijo)
      const enter=Math.round(hold*0.6); // dwell de entrada no primeiro card, proporcional ao de saída — troque 0.6 por 1 pra espelhar
      // foco dinâmico (profundidade de campo): nítido no centro, desfoca conforme se afasta — segue o scroll
      const focusX=vw*0.5, dead=vw*0.2, range=vw*0.5, maxB=6;
      function focus(){
        cards.forEach(c=>{
          const r=c.getBoundingClientRect();
          const d=Math.abs(r.left+r.width/2-focusX);
          const b=d>dead?Math.min(maxB,((d-dead)/range)*maxB):0;
          c.style.filter=b>0.1?("blur("+b.toFixed(2)+"px)"):"none";
        });
      }
      const tl=gsap.timeline({onUpdate:focus});
      tl.to({},{duration:enter});                           // dwell no primeiro card antes de arrancar
      tl.to(track,{x:-amount,ease:"none",duration:amount}); // varredura horizontal
      tl.to({},{duration:hold});                            // dwell no último card antes de soltar
      ScrollTrigger.create({animation:tl,trigger:".corridor",pin:true,scrub:.8,
        end:"+="+(enter+amount+hold),invalidateOnRefresh:true,onRefresh:focus});
      focus(); // estado inicial
    }

    // virada: o segredo emerge do escuro
    gsap.fromTo("#turn .frame",{opacity:0,scale:1.14},{opacity:.18,scale:1,duration:1.8,ease:"power2.out",
      scrollTrigger:{trigger:"#turn",start:"top 68%",toggleActions:TA}});

    // eco: zoom lento e contínuo, despedida
    gsap.fromTo("#echo .frame",{scale:1},{scale:1.1,ease:"none",
      scrollTrigger:{trigger:"#echo",start:"top bottom",end:"bottom top",scrub:1.1}});
  }
  window.addEventListener("load",()=>ScrollTrigger.refresh());
})();
