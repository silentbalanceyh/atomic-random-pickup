
var DATA = {
    1:"张吉莲",
    2:"范文峻",
    3:"晏庆",
    4:"万莉莉",
    5:"黄永虹",
    6:"张焱",
    7:"任敏",
    8:"邱美君",
    9:"韦科乐",
    10:"曾会平",
    11:"墨莹",
    12:"唐安宁",
    13:"洪利",
    14:"张联",
    15:"罗卉邠",
    16:"余委",
    17:"邓培",
    18:"何冬",
    19:"王娟",
    20	:"李英",
    21	:"唐令春",
    22	:"张秀芸",
    23	:"袁洪梅",
    24	:"李廷丽",
    25	:"宋大琼",
    26	:"张春燕",
    27	:"汤静",
    28	:"袁强",
    29	:"廖静",
    30	:"吴建华",
    31	:"周燕",
    32	:"吴佳",
    33	:"刘锐",
    34	:"章静",
    35	:"熊祥静",
    36	:"苏亮",
    37	:"陈纲",
    38	:"景裕淋",
    39	:"胡嘉",
    40	:"马科",
    41	:"石渝",
    42	:"徐忆",
    43	:"马珂",
    44	:"潘曦琨",
    45	:"罗盛茹",
    46	:"杨索",
    47	:"张宏婕",
    48	:"张炯",
    49	:"邓红梅",
    50	:"杨灿",
    51	:"游畅",
    52	:"柏小亚",
    53	:"卢渝萍",
    54	:"张娟娟",
    55	:"刘炜",
    56	:"张波",
    57	:"邱爽",
    58	:"王茜",
    59	:"周名凤",
    60	:"熊熙",
    61	:"舒爽",
    62	:"易磊",
    63	:"陈媛",
    64	:"侯文俊",
    65	:"余倩",
    66	:"梁飞",
    67	:"甘露",
    68	:"何维",
    69	:"刘玉玲",
    70	:"陈璇",
    71	:"黄漪澜",
    72	:"陈星星",
    73	:"陈勖",
    74	:"胡雨菡",
    75	:"刘文焱",
    76	:"梁秋晴",
    77	:"刁云婷",
    78	:"李剑雯",
    79	:"罗娟",
    80	:"陈舒",
    81	:"饶康",
    82	:"许丽娜",
    83	:"刘中蜀",
    84	:"姜军国",
    85	:"彭永佳",
    86	:"刘婷婷",
    87	:"赖冰岚",
    88	:"傅晓姮",
    89	:"谢颖",
    90	:"唐振",
    91	:"季春静",
    92	:"杨欢",
    93	:"陆希",
    94	:"朱真沂",
    95	:"张铮",
    96	:"李红霞",
    97	:"李静",
    98	:"梁雅肖",
    99	:"陈娇",
    100	:"蒋利",
    101	:"郑然",
    102	:"赵长倩",
    103	:"余悦",
    104	:"张松涛",
    105	:"谭军",
    106	:"刘亭廷",
    107	:"罗悦天",
    108	:"杜阳",
    109	:"王凤娟",
    110	:"邹佳灵",
    111	:"刘畅",
    112	:"肖博文",
    113	:"杨美玲",
    114	:"樊彦君",
    115	:"黄澄澄",
    116	:"刘扬",
    117	:"邹谧",
    118	:"肖莉",
    119	:"王红兵",
    120	:"荣欣",
    121	:"成继华",
    122	:"柳庆妍",
    123	:"徐吉惠",
    124	:"周云霞"
};
var COLOR = {
    1:"#00CCCC",
    2:"#00CCFF",
    3:"#3300FF",
    4:"#33CC99",
    5:"#660033",
    6:"#6633CC",
    7:"#66CC66",
    9:"#9900CC",
    10:"#996633",
    11:"#9999CC",
    12:"#99FF99",
    13:"#CC0066",
    14:"#CC6633",
    15:"#CC9966",
    16:"#CCFF33",
    17:"#FF0066",
    18:"#336633",
    19:"#0000FF",
    20:"#CC00FF"
}
var selected;
var ref;
var picked = {};
var stop = true;
function onClear() {
    localStorage.removeItem("ITEM");
}
function addItem(number){
    var existing = localStorage.getItem("ITEM");
    if(existing){
        existing = JSON.parse(existing);
    }else{
        existing = [];
    }
    existing.push(DATA[number]);
    localStorage.setItem("ITEM",JSON.stringify(existing));
}
function readItem(){
    var existing = localStorage.getItem("ITEM");
    jQuery("#lstPicked").empty();
    if(existing){
        existing = JSON.parse(existing);
        existing.forEach(function(item){
            jQuery("#lstPicked").append("<li class='list-group-item'><span class='label label-success' style='font-size:18px;'>" + item + "</span></li>");
        })
    }
}

function onStart(){
    stop = false;
    jQuery("#btnEnd").attr("disabled",false);
    jQuery("#btnEnd").focus();
    jQuery("#btnStart").attr("disabled",true);
    ref = setInterval(function(){
        var number = parseInt(Math.random()* 124 + 1, 10);
        var color = parseInt(Math.random() * 20 + 1, 10);
        if(!picked[number]) {
            jQuery("#txtContent").text(DATA[number]);
            jQuery("#txtContent").css("color",COLOR[color]);
            jQuery("#hdSelect").val(number);
        }
    },40);
}

function onEnd(){
    stop = true;
    jQuery("#btnEnd").attr("disabled",true);
    jQuery("#btnStart").attr("disabled",false);
    jQuery("#btnStart").focus();
    jQuery("#txtContent").css("color","Green");
    clearInterval(ref);
    var data = parseInt(jQuery("#hdSelect").val());
    addItem(data);
    if(data){
        picked[data] = true;
    }
    jQuery("#lstPicked").append("<li class='list-group-item'><span class='label label-success' style='font-size:18px;'>" + DATA[data] + "</span></li>");
}

$(function(){
    jQuery("#btnEnd").attr("disabled",true);
    jQuery("#btnStart").focus();
    readItem();
    $("body").keydown(function(event){
        var ev = window.event || e;
        var code = ev.keyCode || ev.which;
        // ESC
        if(27 === code || 8 === code){
            console.info(code);
            onClear();
            readItem();
        }
        // Space
        if(32 === code){
            if(!jQuery("#btnStart").focus()){
                jQuery("#btnStart").focus();
            }else if(!jQuery("#btnEnd").focus()){
                jQuery("#btnEnd").focus();
            }
        }
    })
})
