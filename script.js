const loader=document.querySelector('#loader'), bar=document.querySelector('#progressBar'), number=document.querySelector('#progressNumber'), text=document.querySelector('#loadText'), main=document.querySelector('#mainContent');
const lines=['Locating the birthday girlie...','Loading premium memories...','Calculating meows per minute...','Applying pink sparkles...','Birthday universe ready ✦'];let p=0;
const loading=setInterval(()=>{p+=Math.ceil(Math.random()*7);if(p>100)p=100;bar.style.width=p+'%';number.textContent=p+'%';text.textContent=lines[Math.min(Math.floor(p/23),4)];if(p===100){clearInterval(loading);setTimeout(()=>{loader.style.opacity=0;setTimeout(()=>{loader.remove();main.classList.remove('hidden');observe();typeLetter()},750)},450)}},85);

function observe(){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>ob.observe(el))}

const letter=`Baki sab thikee, Happiiestt bdayy meoww meoww, abhi just it was 11.11 some mins ago, thank you for always being there, likhneko bahot kuch hainn, i will call wo baat alag hainn😅, bhetuya...[`;
function typeLetter(){const target=document.querySelector('#typedLetter');let i=0;const io=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!target.dataset.started){target.dataset.started='1';const timer=setInterval(()=>{target.textContent+=letter[i++]||'';if(i>=letter.length)clearInterval(timer)},19)}},{threshold:.3});io.observe(target)}

// Original browser-generated ambient melody. No external or copyrighted audio file is used.
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();

        musicBtn.classList.add("playing");

        musicLabel.textContent = "pause the vibe";

    } else {

        bgMusic.pause();

        musicBtn.classList.remove("playing");

        musicLabel.textContent = "play the vibe";

    }

});
document.querySelectorAll('#choices button').forEach(btn=>btn.addEventListener('click',()=>{const result=document.querySelector('#quizResult');if(btn.dataset.correct==='true'){result.textContent='Correct. The research is conclusive. ✦';burst(40)}else{result.textContent='Interesting theory. Unfortunately, the answer is Meow Meow.'}}));
document.querySelector('#surpriseBtn').addEventListener('click',e=>{e.target.style.display='none';document.querySelector('#finalMessage').classList.remove('hidden');burst(160)});
function burst(count){const colors=['#ff6fa5','#ffd166','#cab7ff','#fff8f2','#f04484'];for(let i=0;i<count;i++){const c=document.createElement('i');c.className='confetti';c.style.left=Math.random()*100+'vw';c.style.width=5+Math.random()*9+'px';c.style.height=7+Math.random()*12+'px';c.style.background=colors[Math.floor(Math.random()*colors.length)];c.style.animationDuration=2.5+Math.random()*3+'s';c.style.animationDelay=Math.random()*.5+'s';document.body.appendChild(c);setTimeout(()=>c.remove(),6500)}}

const canvas=document.querySelector('#sparkleCanvas'),ctx=canvas.getContext('2d');let stars=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight;stars=Array.from({length:Math.min(100,innerWidth/10)},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.6+.2,a:Math.random(),v:Math.random()*.015+.004}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);stars.forEach(s=>{s.a+=s.v;if(s.a>1||s.a<.15)s.v*=-1;ctx.globalAlpha=s.a;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,7);ctx.fill()});requestAnimationFrame(draw)}addEventListener('resize',resize);resize();draw();


// Tap the paw button to create small original emoji-cat cameos.
const catBtn=document.querySelector('#catBtn');
function releaseCats(amount=9){
  const cats=['🐈','🐈‍⬛','🐱','😸','😼','🙀','✨','💗','⭐'];
  for(let i=0;i<amount;i++){
    const cat=document.createElement('span');
    cat.className='pop-cat';
    cat.textContent=cats[Math.floor(Math.random()*cats.length)];
    cat.style.left=(4+Math.random()*88)+'vw';
    cat.style.bottom=(-10-Math.random()*18)+'vh';
    cat.style.animationDelay=(Math.random()*.65)+'s';
    cat.style.animationDuration=(2.1+Math.random()*1.6)+'s';
    document.body.appendChild(cat);
    setTimeout(()=>cat.remove(),4300);
  }
  if(navigator.vibrate) navigator.vibrate([45,35,45]);
}
catBtn.addEventListener('click',()=>releaseCats(12));


// Live countdown to 3 October 2026 in the visitor's local time.
const birthdayTarget=new Date(2026,9,3,0,0,0);
function updateCountdown(){
  const now=new Date(),diff=birthdayTarget-now;
  if(diff<=0){
    document.querySelector('#countdownTitle').textContent='The Birthday Era is officially here! 🎂';
    ['days','hours','minutes','seconds'].forEach(id=>document.querySelector('#'+id).textContent='00');
    return;
  }
  const d=Math.floor(diff/86400000),h=Math.floor(diff/3600000)%24,m=Math.floor(diff/60000)%60,s=Math.floor(diff/1000)%60;
  document.querySelector('#days').textContent=String(d).padStart(2,'0');document.querySelector('#hours').textContent=String(h).padStart(2,'0');document.querySelector('#minutes').textContent=String(m).padStart(2,'0');document.querySelector('#seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);

// Original cat drum sounds generated by Web Audio.
document.querySelectorAll('.drum').forEach((drum,index)=>drum.addEventListener('click',()=>{
  if(!audioCtx){audioCtx=new(window.AudioContext||window.webkitAudioContext)();master=audioCtx.createGain();master.connect(audioCtx.destination)}
  audioCtx.resume();const osc=audioCtx.createOscillator(),gain=audioCtx.createGain(),now=audioCtx.currentTime;osc.type=index?'triangle':'sine';osc.frequency.setValueAtTime(Number(drum.dataset.note),now);osc.frequency.exponentialRampToValueAtTime(70,now+.22);gain.gain.setValueAtTime(.22,now);gain.gain.exponentialRampToValueAtTime(.001,now+.3);osc.connect(gain).connect(master);osc.start(now);osc.stop(now+.32);
  const cat=document.querySelector('#drumCat');const cls=index?'beat-right':'beat';cat.classList.remove(cls);void cat.offsetWidth;cat.classList.add(cls);document.querySelector('#beatCaption').textContent=index?'midnight meow beat ✦':'pink birthday beat ♡';burst(12);
}));

// Paw prints appear lightly while scrolling or touching.
let pawLock=false;function makePaw(x,y){if(pawLock)return;pawLock=true;const p=document.createElement('span');p.className='paw-print';p.textContent='🐾';p.style.left=x+'px';p.style.top=y+'px';document.querySelector('#pawTrail').appendChild(p);setTimeout(()=>p.remove(),2300);setTimeout(()=>pawLock=false,180)}
addEventListener('pointermove',e=>{if(e.pointerType==='mouse')makePaw(e.clientX,e.clientY)});addEventListener('touchmove',e=>{const t=e.touches[0];if(t)makePaw(t.clientX,t.clientY)},{passive:true});

// Interactive gift reveal.
document.querySelector('#giftBox').addEventListener('click',e=>{const box=e.currentTarget;box.classList.add('open');setTimeout(()=>{box.style.display='none';document.querySelector('#giftReveal').classList.remove('hidden');releaseCats(15);burst(100);if(navigator.vibrate)navigator.vibrate([80,40,100])},750)});
