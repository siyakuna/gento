const cursor = document.getElementById('mouse');
document.addEventListener('mousemove', function (e) {
    //マウスポインターの座標位置を取得
    const x = e.clientX;
    const y = e.clientY;
    //マウスポインター要素のcssを書き換える用
    cursor.style.opacity = "0.75";
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
  });
  document.getElementById('bgm').volume = 0.13
  document.getElementById('bgm').pause()

document.querySelectorAll(".menu-tag").forEach(v => v.addEventListener("change", (e) => {
    document.getElementById('page-sound').currentTime = 0; //連続クリックに対応
    document.getElementById('page-sound').play(); //クリックしたら音を再生
  }));
  document.querySelectorAll("#supoira").forEach(v => v.addEventListener("change", (e) => {
    document.getElementById('bgm').volume = 0.13
    document.getElementById('bgm').play(); //クリックしたら音を再生
  }));
  let volRan = document.getElementById("volume-ber");
  document.querySelectorAll("#mute").forEach(v => v.addEventListener("change", (e) => {
    if(document.getElementById('mute').checked){
        document.getElementById('bgm').volume = 0;
        document.getElementById('page-sound').volume = 0;
        document.getElementById('volume-ber').disabled = true;
    }else{
        document.getElementById('volume-ber').disabled = false;
        document.getElementById('bgm').volume = volRan.value/100;
        document.getElementById('page-sound').volume =volRan.value/100;
    }
  }));
  function copyPc(){//ココフォリア駒コピー
    navigator.clipboard.writeText(`
      {"kind":"character","data":{"name":"蓮吟 玄兎 (れんぎん　げんと)","memo":"","initiative":16,"externalUrl":"https://iachara.com/view/9147049","status":[{"label":"HP","value":12,"max":12},{"label":"MP","value":14,"max":14},{"label":"SAN","value":70,"max":70}],"params":[{"label":"STR","value":"6"},{"label":"CON","value":"14"},{"label":"POW","value":"14"},{"label":"DEX","value":"16"},{"label":"APP","value":"11"},{"label":"SIZ","value":"10"},{"label":"INT","value":"15"},{"label":"EDU","value":"12"}],"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/370437c4928e42d488143d655d1e6077435e14268dfcf3ff2f45fb5b9532a971","faces":[{"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/370437c4928e42d488143d655d1e6077435e14268dfcf3ff2f45fb5b9532a971","label":"でふぉ"},{"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/e3004e83673b99941de0fb51b244a3008cd6c616d8eb0f2cfcf14e33fa8f3ff8","label":"笑顔"},{"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/e4924c83abf6f6d119512431b7a9619ce77524a33bb8b0f1ad741d2c470cc841","label":"おびえ"},{"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/4690b4170d2e0324308fe2489e348638de286d93d73995e124c2ce7fe3d77c8b","label":"ばなな"},{"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/d72d906aaee020dda58dc751765576a6f4f3cb0ec1d350e7dc7e5082a31d2232","label":"でふぉ-パーカー無し"},{"iconUrl":"https://storage.ccfolia-cdn.net/users/0NOfcmmsyHQICpldAPvVKZ7r4qp1/files/ec26a185fc2f82bdfcda65aa169091a0fecdde9c03c7d4267ad4ab0559c3e5fe","label":"笑顔ーパーカー無し"}],"x":-278,"y":37,"angle":0,"width":6,"height":6,"active":true,"secret":false,"invisible":false,"hideStatus":false,"color":"#888888","commands":"1d100<={SAN} 【正気度ロール】\nCCB<=75 【アイデア】\nCCB<=70 【幸運】\nCCB<=60 【知識】\nCCB<=70 【目星】\nCCB<=70 【聞き耳】\nCCB<=60 【図書館】\nCCB<=62 【回避】\nCCB<=50 【こぶし（パンチ）】\nCCB<=30 【スピアガン】\nCCB<=60 【応急手当】\nCCB<=60 【忍び歩き】\nCCB<=60 【精神分析】\nCCB<=80 【水泳】\nCCB<=60 【芸術（カリンバ）】\nCCB<=51 【芸術(工作)】\n1d3-1D4 【ダメージ判定】\n1d4-1D4 【ダメージ判定】\n1d6-1D4 【ダメージ判定】\nCCB<={STR}*5 【STR × 5】\nCCB<={CON}*5 【CON × 5】\nCCB<={POW}*5 【POW × 5】\nCCB<={DEX}*5 【DEX × 5】\nCCB<={APP}*5 【APP × 5】\nCCB<={SIZ}*5 【SIZ × 5】\nCCB<={INT}*5 【INT × 5】\nCCB<={EDU}*5 【EDU × 5】\n","owner":""}}
      `);
    alert('コピーしました')
  }
  let supoira = true
  function supoiraBtn(){
    if(supoira){
      document.getElementById('supoirabtn').style.backgroundImage = "url(Rock2.PNG)"
      document.getElementsByClassName('mail')[0].style.display = "block"
      document.getElementById('eye').innerHTML = '瞳の色:ドブのような濁った瞳 <br>END:1'
      supoira = false
    }else{
      document.getElementById('supoirabtn').style.backgroundImage = "url(Rock.PNG)"
      document.getElementsByClassName('mail')[0].style.display = "none"
      document.getElementById('eye').innerHTML = '瞳の色:海を写したかのような美しい青い眼'
      supoira = true
    }
  }
  function mail(){
    document.getElementsByClassName('mail')[0].style.zIndex = "-15"
    document.getElementsByClassName('tegami')[0].style.display = ""
  }
let skillDate =[//技能値
    {name:"回避",point:62,syoki:32,syoku:30,syumi:0,hosei:0},
    {name:"スピアガン",point:30,syoki:20,syoku:0,syumi:10,hosei:0},
    {name:"応急手当",point:60,syoki:30,syoku:30,syumi:0,hosei:0},
    {name:"聞き耳",point:70,syoki:25,syoku:45,syumi:0,hosei:0},
    {name:"忍び歩き",point:60,syoki:10,syoku:50,syumi:0,hosei:0},
    {name:"精神分析",point:60,syoki:1,syoku:0,syumi:59,hosei:0},
    {name:"図書館",point:60,syoki:25,syoku:0,syumi:35,hosei:0},
    {name:"目星",point:70,syoki:25,syoku:45,syumi:0,hosei:0},
    {name:"水泳",point:80,syoki:25,syoku:5,syumi:0,hosei:50},
    {name:"芸術(工作)",point:51,syoki:5,syoku:0,syumi:46,hosei:0},
    {name:"芸術(カリンバ)",point:60,syoki:5,syoku:55,syumi:0,hosei:0},
]
let random = Math.floor(Math.random() * 101);
let gentoMsg = "それだけ"
if(!sessionStorage.getItem('newload')){
  random = 100
}
if(random <= 5){
  document.getElementsByClassName('tatie-img')[0].src = "tatiebanana.PNG"
  gentoMsg = "バナナ"
}else{
  if(random <= 30){
    document.getElementsByClassName('tatie-img')[0].src = "tatieegao.PNG"
  gentoMsg = "ほらね"
}
}
sessionStorage.setItem("newload", "true");
for(i = 0;i < skillDate.length; i++){//技能表示
    let new_element = document.createElement('div');
    new_element.insertAdjacentHTML("beforeend",`
    <span class="skillName">${skillDate[i].name}:${skillDate[i].point}</span> <span class="skill-info">${'初期:'+skillDate[i].syoki+'職業:'+skillDate[i].syoku+'興味:'+skillDate[i].syumi+'その他:'+skillDate[i].hosei}</span>
    `)
    document.getElementById('skill-list').append(new_element)
}
volRan.addEventListener(`input`, function () {
	document.getElementById('bgm').volume = volRan.value/100;
    document.getElementById('page-sound').volume = volRan.value/ 100;
});

window.addEventListener('DOMContentLoaded', function(){
  
  // 0.5秒ごとに実行
  setInterval(() => {
    if(document.getElementById("main-p").scrollTop > 1500){
      document.getElementById("backimg").classList.add('backPcimg-pr')
    } else{
      document.getElementById("backimg").classList.remove('backPcimg-pr')
    }
  }, 50);
});




console.log(
  `%c蓮吟 玄兎%c:どうしたの？\n%c蓮吟 玄兎%c:ここには何もないよ\n%c蓮吟 玄兎%c:...\n%c蓮吟 玄兎%c:そうだなぁ\n%c蓮吟 玄兎%c:あ、特別に教えてあげる\n%c蓮吟 玄兎%c:このページを再読み込みすると確率で僕の立ち絵が変わるようになってるよ\n%c蓮吟 玄兎%c:...${gentoMsg}`
  ,'color: rgb(99, 180, 255);',"",'color: rgb(99, 180, 255);',"",'color: rgb(99, 180, 255);',"",'color: rgb(99, 180, 255);',"",'color: rgb(99, 180, 255);',"",'color: rgb(99, 180, 255);',"",'color: rgb(99, 180, 255);',""
)
if(gentoMsg === "バナナ")document.getElementsByClassName('info-memo')[0].innerText = "バナナ"
