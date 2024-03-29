
var DATA = {
    1:"陈芳馨",
    2:"陈纲",
    3:"陈娇",
    4:"陈舒",
    5:"陈帅",
    6:"陈星星",
    7:"陈勖",
    8:"陈媛",
    9:"陈璇",
    10:"邓红梅",
    11:"邓培",
    12:"刁云婷",
    13:"杜阳",
    14:"樊彦君",
    15:"范文峻",
    16:"傅晓姮",
    17:"甘露",
    18:"郭楠馨",
    19:"韩媛",
    20:"何斌彬",
    21:"何冬",
    22:"何维",
    23:"洪利",
    24:"侯文俊",
    25:"胡嘉",
    26:"胡雨菡",
    27:"黄澄澄",
    28:"黄永虹",
    29:"黄漪澜",
    30:"季春静",
    31:"姜军国",
    32:"蒋利",
    33:"景裕淋",
    34:"赖冰岚",
    35:"李红霞",
    36:"李剑雯",
    37:"李静",
    38:"李廷丽",
    39:"李英",
    40:"梁飞",
    41:"梁秋晴",
    42:"梁雅肖",
    43:"廖静",
    44:"刘畅",
    45:"刘柳",
    46:"刘锐",
    47:"刘亭廷",
    48:"刘文焱",
    49:"刘扬",
    50:"刘玉玲",
    51:"刘中蜀",
    52:"刘婷婷",
    53:"刘炜",
    54:"卢影",
    55:"卢渝萍",
    56:"陆希",
    57:"罗卉邠",
    58:"罗娟",
    59:"罗盛茹",
    60:"罗月",
    61:"罗悦天",
    62:"罗中怡",
    63:"马科",
    64:"马梦露",
    65:"马珂",
    66:"墨莹",
    67:"潘曦琨",
    68:"彭永佳",
    69:"秦启铃",
    70:"邱爽",
    71:"冉漫",
    72:"石兴娅",
    73:"石渝",
    74:"舒爽",
    75:"宋大琼",
    76:"苏亮",
    77:"谭军",
    78:"谭晓芳",
    79:"汤杰",
    80:"唐安宁",
    81:"唐令春",
    82:"唐振",
    83:"田由梅",
    84:"万莉莉",
    85:"万施华",
    86:"王凤娟",
    87:"王佳佳",
    88:"王娟",
    89:"王莉苹",
    90:"覃琴",
    91:"魏杉",
    92:"吴佳",
    93:"吴建华",
    94:"肖博文",
    95:"肖莉",
    96:"谢颖",
    97:"熊熙",
    98:"熊祥静",
    99:"徐忆",
    100:"徐芮",
    101:"许丽娜",
    102:"严诗涵",
    103:"杨灿",
    104:"杨欢",
    105:"杨美玲",
    106:"杨索",
    107:"杨燕",
    108:"易磊",
    109:"游雅兰",
    110:"余悦",
    111:"余倩",
    112:"袁洪梅",
    113:"袁强",
    114:"章静",
    115:"张波",
    116:"张春燕",
    117:"张宏婕",
    118:"张炯",
    119:"张娟娟",
    120:"张联",
    121:"张玲",
    122:"张松涛",
    123:"张秀芸",
    124:"张园园",
    125:"张焱",
    126:"张铮",
    127:"赵长倩",
    128:"郑然",
    129:"周名凤",
    130:"周燕",
    131:"朱真沂",
    132:"邹佳灵",
    133:"邹谧",
    134:"蔺沿七",
    135:"晏庆",
    136:"杨雅茹",
    137:"陈鹏",
    138:"丁俊玥",
    139:"黄欣月",
    140:"罗娅",
    141:"秦琴",
    142:"陶斯汀",
    143:"谢宛芸",
    144:"叶宗鑫",
    145:"张丽",
    146:"周思言",
    147:"周杨",
    148:"邓佳佳",
    149:"段玉莓",
    150:"高静",
    151:"姜格格",
    152:"蒋沁纱",
    153:"李昕奕",
    154:"刘桂伶",
    155:"欧常春",
    156:"秦婷",
    157:"徐莹然",
    158:"曾宇娇",
    159:"向珊",
    160:"刘小莉",
    161:"陈美霞",
    162:"冯陶",
    163:"梁星",
    164:"陆玥",
    165:"王明清",
    166:"吴媛媛",
    167:"夏国丹",
    168:"许莉",
    169:"晏露",
    170:"尹炳洪",
    171:"周鑫洪",
    172:"徐吉惠",
    173:"晏杰",
    174:"任敏",
    175:"柳庆妍",
    176:"周云霞",
    177:"谈宗明",
    178:"余委"
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
    readItem();
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
