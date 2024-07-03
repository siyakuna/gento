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
    console.log('ok')
  }
let skillDate =[//技能値
    {name:"回避",point:62,syoki:32,syoku:30,syumi:0,hosei:0},
    {name:"スピアガン",point:76,syoki:20,syoku:0,syumi:56,hosei:0},
    {name:"応急手当",point:60,syoki:30,syoku:30,syumi:0,hosei:0},
    {name:"聞き耳",point:70,syoki:25,syoku:45,syumi:0,hosei:0},
    {name:"忍び歩き",point:60,syoki:10,syoku:50,syumi:0,hosei:0},
    {name:"精神分析",point:60,syoki:1,syoku:0,syumi:59,hosei:0},
    {name:"図書館",point:60,syoki:25,syoku:0,syumi:35,hosei:0},
    {name:"目星",point:70,syoki:25,syoku:45,syumi:0,hosei:0},
    {name:"水泳",point:80,syoki:25,syoku:5,syumi:0,hosei:50},
    {name:"芸術(カリンバ)",point:60,syoki:5,syoku:55,syumi:0,hosei:0},
]
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