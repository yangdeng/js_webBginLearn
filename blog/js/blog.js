//针对log页面定义一个队形
var log={
    tartdt:"2019-8-5",
    enddt:"2019-9-5",
    updatadt:"2018-8-5",
    author:"tgrong"
}

//有对象派生业务逻辑
log.submit={
    check:function(v){ //验证某个值是否为空
        var _v = (v=="")?true:false;
        return _v;
    },
    autohide:function(obj){ //自动隐藏
        setTimeout(function(){
            obj.hide();
        },2000)
    }
}

//定义一个验证内容是否为空的函数
function checkvalue(){
    //获取元素对象并保存在变量中
    var $form = $("form");
    var $btn = $(".btn>input");
    var $username = $("#username");
    var $password = $("#password");
    var $err1 = $("#err1");
    var $err2 = $("#err2");
    if( !log.submit.check($username.val()) && !log.submit.check($password.val()) )
    {
        return true;
    }
    else
    {
        if ($username.val() == "")
        {
            $err1.show();
            //2秒后自动隐藏
            log.submit.autohide($err1);
            return false;
        }
        else
        {
            $err2.show();
            log.submit.autohide($err2);
            return false;
        }
    }
}

//绑定按钮的单击事件,表单提交时触发
$(function(){ 

})

//定义一个基于列表页的业务逻辑
var lst = {
    template:function(t,u,p,p2){
        var _html = "";
        _html+='<div class="item">';
        _html+='<div class="title">';
        _html+='   <h3>'+t+'</h3>';
        _html+=' </div>';
        _html+='<div class="con">';
        _html+='   <div class="cleft">';
        _html+='       <img src="'+u+'" alt="">';
        _html+='   </div>';
        _html+='   <div class="cright">';
        _html+='       <p class="ptop">';
        _html+='           '+p;
        _html+='       </p>';
        _html+='       <p class="pbottom">';
        _html+='           '+p2;
        _html+='     </p>';
        _html+='   </div>';
        _html+='</div>';
        _html+='</div>';
        return _html;
    }
}
//使用数组保存展示的数据
var arrData = [
    {
        t:'Python语言优势',
        u:'imgs/b.jpg',
        p:'本文探讨了Python语言在AI领域的优势与运用，谁会成为AI和大数据时代的第一开发语言？',
        p2:'皮皮虾 学无止境 2020-8-15 34567阅读 99'
    },{
        t:'Web开发优势',
        u:'imgs/b.jpg',
        p:'本文探讨了Python语言在AI领域的优势与运用，谁会成为AI和大数据时代的第一开发语言？',
        p2:'皮皮虾 学无止境 2020-8-15 34567阅读 99'  
    },{
        t:'javaScript优势',
        u:'imgs/toppic01.jpg',
        p:'本文探讨了Python语言在AI领域的优势与运用，谁会成为AI和大数据时代的第一开发语言？',
        p2:'皮皮虾 学无止境 2020-8-15 34567阅读 99' 
    }]

//遍历数组，获取每一项元素对象，将获取的元素对象填充到模板中，向页面元素追加模板内容
for(var i = 0; i < arrData.length; i++ )
{
    var _HTML = lst.template(arrData[i].t,arrData[i].u,arrData[i].p,arrData[i].p2);
    //将数据追加到列表中
    $(".lst").append(_HTML);
}

// //通过模板生成新的列表数据
// var _HTML = lst.template("","",
// "","");

// 定义一个基于我的图片的业务逻辑
var pics={
    template:function(u,n,t){
        var _html = "";
        _html += '<div class="item">';
        _html += '<div class="imgs">';
        _html += '    <img src="'+u+'" alt="">';
        _html += '    <div class="tip">喜欢 | '+n+'</div>';
        _html += '</div>';
        _html += '<div class="title">';
        _html += '    <h3>'+t+'</h3>';
        _html += '</div>';
        _html += '</div>';
        return _html;
    }
}
//定义一个包含三个对象内容的图片数组
var arrPIcs=[
    {
        u:'imgs/b.jpg',
        n:'223',
        t:'Python中打开txt报错！'
    },{
        u:'imgs/b04.jpg',
        n:'260',
        t:'web开发重要性！'
    },{
        u:'imgs/banner01.jpg',
        n:'200',
        t:'javaScript开发重要性！'
    }
]

for (var j = 0; j < arrPIcs.length; j++)
{
    //填充内容
    var _HTML1 = pics.template(arrPIcs[j].u,arrPIcs[j].n,arrPIcs[j].t);
    //将模板追加到页面元素中
    $("#pics").append(_HTML1);
}
