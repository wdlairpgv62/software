function loginOut(){
	$.get("/keen/loginOut", function (data){
		localStorage.local_ln_keen="";
		localStorage.local_pwd_keen="";
		window.location.href='./login.html';
	})
}
function getStar(data){
	var str='';
	if(data=='1'){
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
	}else if(data=='2'){
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
	}else if(data=='3'){
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
	}else if(data=='4'){
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
	}else if(data=='5'){
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #fd397a;"></i>';
	}else if(data=='0'){
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
		str+='<i class="flaticon-star" style="font-size: 1rem;color: #ebedf2;"></i>';
	}
	return str;
}
function getGreenCheck(){
	var str="";
	str+="<label   class='kt-checkbox kt-checkbox--tick kt-checkbox--success'>";
	str+="<input type='checkbox' checked='checked'  disabled='disabled'>";
	str+="<span></span></label>";
	return str;
}
function getRedCheck(){
	var str="";
	str+="<label   class='kt-checkbox kt-checkbox--tick kt-checkbox--danger'>";
	str+="<input type='checkbox' checked='checked'  disabled='disabled'>";
	str+="<span></span></label>";
	return str;
}
function getDisCheck(){
	var str="";
	str+="<label   class='kt-checkbox kt-checkbox--tick'>";
	str+="<input type='checkbox' checked=''  disabled='disabled'>";
	str+="<span></span></label>";
	return str;
}
var sy=[];
function dataRefresh(data){
	
	var jc;
	if(xbc_switch){
		jc=data.xbc;
	}else{
		jc=data.sbc;
	}
	var js=data.js;
	
	
	var str='';
	var str_js='';
	var bfflag=false;
	$.each(jc,function(i,val){
		
			if(val.level=="2"&&!zfx_switch){
			}else if(val.level=="1"&&!gfx_switch){
			}else{
				
				if(sy.indexOf(val.vs)==-1){
					sy.push(val.vs);
					bfflag=true;
				}
				
				str+="<tr>";
				str+="<td >"+val.ss+"</td>";
				str+="<td >"+val.time+"</td>";
				str+="<td >"+val.vs+"<img src='/public/keen/assets/img/zd2.gif' style='margin-left:4px;'></img></td>";
				if(xbc_switch){
					str+="<td >65'</td>";
				}else{
					str+="<td >20'</td>";
				}
				str+="<td >"+getGreenCheck()+"</td>";
				str+="<td >"+getStar(val.wxxs)+"</td>";
				
				if(val.level=="2"){
						str+="<td >"+getRedCheck()+"</td>";
						str+="<td >"+getDisCheck()+"</td>";
				}else if(val.level=="3"){
						str+="<td >"+getDisCheck()+"</td>";
						str+="<td >"+getDisCheck()+"</td>";
				}else{
						str+="<td >"+getRedCheck()+"</td>";
						str+="<td >"+getRedCheck()+"</td>";
				}
				str+="</tr>";
			}
			
	})
	
	if(bfflag&&sound_switch){
		var audio= new Audio("/public/base/common/mp3/ts.mp3");
		audio.play();
	}
	if(jc==null||jc.length==0){
		str='';
		str+='<tr>';
		str+='<td class="pl-0" colspan="8" align="center">未检测到提示信息</td>';
		str+='</tr>';
	}
	
	
	$("#jc").empty();
	$("#jc").append(str);
	
	
	str='';
	if(JSON.stringify(js) == JSON.stringify({})){
		str+='<ul class="kt-menu__nav ">';
		str+='<li class="kt-menu__section kt-menu__section--first">';
			str+='<h4 class="kt-menu__section-text">未检测到比赛信息</h4>';
			str+='<i class="kt-menu__section-icon flaticon-more-v2"></i>';
		str+='</li>';
		str+='</ul>';
	}
	
	$.each(js,function(key,val){
		str+='<ul class="kt-menu__nav ">';
		str+='<li class="kt-menu__section kt-menu__section--first">';
		str+='<h4 class="kt-menu__section-text">'+key+'</h4>';
		str+='<i class="kt-menu__section-icon flaticon-more-v2"></i>';
		str+='</li>';
		$.each(val,function(k,bs){
			str+='<li class="kt-menu__item" aria-haspopup="true" >'
			str+='<a  href="javascript:void(0);" class="kt-menu__link "><span class="kt-menu__link-text">'
			str+=bs+'<img src="/public/future/assets/img/zd.gif" style="margin-left:4px;"></img>'
			str+='</span></a></li>';
		})
		str+='</ul>';
	})
	$("#kt_aside_menu").empty();
	$("#kt_aside_menu").append(str);
	
}

var refresh=true;
var interval_keen;
var xbc_switch=true,zfx_switch=true,gfx_switch=true,sound_switch=true;
var Index = function () {
	
	var initSwitch = function() {
		
		$("#xbc_switch").click(function (e) {
			xbc_switch=true;
			refresh_Init_First();
		})
		$("#sbc_switch").click(function (e) {
			xbc_switch=false;
			refresh_Init_First();
		})
		$("#zfx_switch").click(function (e) {
			if(zfx_switch){
				zfx_switch=false;
				$("#zfx").hide();
			}else{
				zfx_switch=true;
				$("#zfx").show();
			}
			refresh_Init_First();
		})
		$("#gfx_switch").click(function (e) {
			if(gfx_switch){
				gfx_switch=false;
				$("#gfx").hide();
			}else{
				gfx_switch=true;
				$("#gfx").show();
			}
			refresh_Init_First();
		})
		$("#sound_switch").click(function (e) {
			if(sound_switch){
				sound_switch=false;
			}else{
				sound_switch=true;
			}
		})
	}

	return {
		init: function () {
			loginValid();
			initSwitch();
			clearInterval(interval_keen);
			interval_keen=setInterval("refresh_Init_time()",70*1000);
		}
	}

}();

function warnOut(){
	swal.fire({
		title: "<label  style='color:red;'>帐号会员服务已过期 </label>",
		text: "请您充值续费后继续使用!",
		type: "error",
		confirmButtonText: "确定",
	}).then(function (e) {
		window.location.href='./login';
	});
}

var keen_init_flag=true;
function refresh_Init_First(){
	if(keen_init_flag){
		keen_init_flag=false;
		$.get("/keenData/getWalkData", function (data){
			dataRefresh(data);
			keen_init_flag=true;
		})
	}
}
function refresh_Init_time(){
	if(keen_init_flag){
		keen_init_flag=false;
		$.get("/keenData/getWalkData", function (data){
			dataRefresh(data);
			keen_init_flag=true;
		})
	}else{
		keen_init_flag=true;
	}
}

function loginValid(){
	$.get("/keenData/getGQ", function (data){
		if(data==-2){
			swal.fire({
				title: "<label  style='color:red;'>您的会话已过期 </label>",
				text: "请您重新登录!",
				type: "error",
				confirmButtonText: "确定",
			}).then(function (e) {
				window.location.href='./login';
			});
		}else if(data==0){
			$.get("/keen/loginOut", function (data){
				warnOut();
			})
		}else if(data==-1){
			$.get("/keen/loginOut", function (data){
				warnOut();
			})
		}else{
			refresh_Init_First();
			$("#login_day").text("会员时长："+data+"天");
		}
	});
	$("#login_phone").html(localStorage.local_ln_keen);
	if(localStorage.local_ln_keen===undefined||localStorage.local_ln_keen===null||localStorage.local_ln_keen==""){
		window.location.href='./login.html';
		$("#login_phone").html("请登录！");
	}
}

jQuery(document).ready(function() {
	Index.init();
});