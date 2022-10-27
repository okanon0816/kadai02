
// 十の位を決める
let tensPlace =""; //十の位の箱
$("#wa").on("click" , function(){
    tensPlace = "1";
});

$("#you").on("click" , function(){
    tensPlace = "2";
});

$("#cyu").on("click" , function(){
    tensPlace = "3";
});

//一の位を決める
let onesPlace=""; //一の位の箱

$("#ie").on("click" , function(){
    onesPlace = "1";
});

$("#soto").on("click" , function(){
    onesPlace = "2";
});

//ボタン押したらへこませる処理
$(".btn").on("click" , function(){
    $(this).toggleClass("btn_none");
});

//選ばれたら文字で料理名が出てきて、連動した動画も表示される
var ieWasyoku = ['至高の豚汁','至高の豚キムチ','至高の焼きそば','カレー','肉玉ライス'];
var ieWasyokuMov = [
    "https://www.youtube.com/embed/OL8o03u8l2Y", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/embed/kDHVcnykE0Q",
    "https://www.youtube.com/embed/q3ui4ZPPIPI",
    "https://www.youtube.com/embed/BcKNwo7bzJ4",
    "https://www.youtube.com/embed/ZHf_8s3CSso"

];

var ieYousyoku = ['至高のオムライス', '至高のぺペロンチーノ','悪魔のペッパーライス','ナスミートグラタン','ビーフストロガノフ'];
var ieYousyokuMov = [
    "https://www.youtube.com/embed/Au-XRzpEjuA",
    "https://www.youtube.com/embed/Jx-tqntWPCM",
    "https://www.youtube.com/embed/nwJlMGMbmpw",
    "https://www.youtube.com/embed/_jnX6F4vqhs",
    "https://www.youtube.com/embed/fE4iRsS6H24"
];

var ieCyuka = ['冷やし中華', '餃子パーティ','キムチチャーハン','ホットプレートビビンバ','チンジャオロース','中華丼'];
var iecyukaMov = [ 
    "https://www.youtube.com/embed/RNYUCIt4Fi0",
    "https://www.youtube.com/embed/sWuDwn5_8KE",
    "https://www.youtube.com/embed/GJSmXL9_oHY",
    "https://www.youtube.com/embed/tZ7jMvvnSsk",
    "https://www.youtube.com/embed/VR7eXKNvrbA",
    "https://www.youtube.com/embed/FCunErpzif0"
];

var sotoWasyoku = ['焼肉' , 'お寿司' , '海鮮', '居酒屋ランチ','カレー'];
var sotoWasyokuUrl = [
    "https://tabelog.com/tokyo/A1313/A131303/13227050/",
    "https://tabelog.com/tokyo/A1313/A131307/13026915/",
    "https://tabelog.com/tokyo/A1313/A131303/13264944/",
    "https://tabelog.com/tokyo/A1313/A131307/13245708/",
    "https://tabelog.com/tokyo/A1313/A131307/13054801/"
];
var sotoYousyoku =['サイゼリヤ', "お外でマック" ,'オイスター','ピザ','ハワイアン'];
var sotoYousyokuUrl = [
    "https://tabelog.com/tokyo/A1313/A131303/13121463/",
    "https://tabelog.com/tokyo/A1313/A131303/13091906/",
    "https://tabelog.com/tokyo/A1313/A131303/13185772/",
    "https://tabelog.com/tokyo/A1313/A131307/13030783/",
    "https://tabelog.com/tokyo/A1313/A131307/13245322/"
];

var sotoCyuka = ['日高屋','王将','タイガー餃子','バーミヤン','永利'];
var sotoCyukaUrl = [
    "https://tabelog.com/tokyo/A1313/A131303/13040987/",
    "https://tabelog.com/tokyo/A1313/A131303/13166405/",
    "https://tabelog.com/tokyo/A1313/A131303/13172776/",
    "https://tabelog.com/tokyo/A1313/A131307/13099324/",
    "https://tabelog.com/tokyo/A1313/A131307/13044025/"
]

$("#lunchBtn").on("click" , function(){
    //ピカチュウがあらわれて消える
    $(".loader").show( );
    setTimeout(function(){
        $(".loader").fadeOut()
    },1500);

    let number = tensPlace + onesPlace; //箱の番号を決める
    const random = Math.floor(Math.random()*ieWasyoku.length);//配列の何番目を取り出すか決める
    let randomMov = document.getElementById("mov"); //movの属性を取り出す
    const showMov = $ ("#mov").show();

    if(number == 11 ){ //和食で家が選ばれたら
        setTimeout(function(){
        $("#lunchMessage").html(ieWasyoku[random]);
        showMov;
        randomMov.src = (ieWasyokuMov[random]); //movで取り出した属性を書き換える;
        number = 0;},1000);
    
    } else if(number == 21) { //洋食で外が選ばれたら
        $("#lunchMessage").html(ieYousyoku[random]);
        showMov;
        randomMov.src = (ieYousyokuMov[random]);
        number = 0;

    } else if(number == 31) { //中華で家が選ばれたら
        $("#lunchMessage").html(ieCyuka[random]);
        showMov;
        randomMov.src = (iecyukaMov[random]);
        number = 0;

    } else if(number == 12) {
        $("#lunchMessage").html(sotoWasyoku[random]);
        //3秒後にお店の食べログにとぶ
        $("#mov").css("display" , "none");
        $("#imgArea").html('<img src="img/pikabui.png" alt="">');
        setTimeout(function(){
        open(sotoWasyokuUrl[random], "_blank");},3000); 
        number = 0;

    } else if(number == 22) {
        $("#lunchMessage").html(sotoYousyoku[random]);
        $("#mov").css("display" , "none");
        $("#imgArea").html('<img src="img/pikabui.png" alt="">');
        setTimeout(function(){
        open(sotoYousyokuUrl[random], "_blank");},3000); 
        number = 0;

    } else if (number == 32) {
        $("#lunchMessage").html(sotoCyuka[random]);
        $("#mov").css("display" , "none");
        $("#imgArea").html('<img src="img/pikabui.png" alt="">');
        setTimeout(function(){
        open(sotoCyukaUrl[random], "_blank");},3000); 
        number = 0;
    
    } else if(number === 0) {
        alert("選択しなおしてください");

    } else {
        alert("ボタンは2つ押してください");
    }

    $('.btn').removeClass('btn_none'); 

});

