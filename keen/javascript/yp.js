function initTableData(data){
	$("#tb").empty();
	var ls=data.ls_all.split(",");
	var bf=data.bf_all.split(",");
	var str='';
	str+='﻿<tr>';
	str+='	  	<th scope="row">主队</th>';
	str+='	  	<td>'+data.qd1+'</td>';
	str+='	  	<td rowspan="2">'+data.ss+'</td>';
	str+='	  	<td rowspan="2">'+data.time+'</td>';
	if(ls[5].trim()==""){
		str+='	  	<td>暂无数据</td>';
		str+='	  	<td>暂无数据</td>';
		str+='	  	<td>暂无数据</td>';
		str+='	  	<td>暂无数据</td>';
	}else{
		str+='	  	<td>'+ls[1]+'</td>';
		str+='	  	<td>'+ls[2]+'</td>';
		str+='	  	<td>'+ls[3]+'</td>';
		str+='	  	<td>'+ls[4]+'</td>';
	}
	if(data.bf_all==""){
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2" >暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
	}else{
		str+='	  	<td rowspan="2">'+bf[6]+'</td>';
		str+='	  	<td rowspan="2">'+bf[7]+'</td>';
		str+='	  	<td rowspan="2">'+bf[8]+'</td>';
		str+='	  	<td rowspan="2" >'+bf[3]+'</td>';
		str+='	  	<td rowspan="2">'+bf[4]+'</td>';
		str+='	  	<td rowspan="2">'+bf[5]+'</td>';
	}
	str+='	</tr>';
	str+='	<tr>';
	str+='		<th scope="row">客队</th>';
	str+='	  	<td>'+data.qd2+'</td>';
	if(ls[14].trim()==""){
		str+='	  	<td>暂无数据</td>';
		str+='	  	<td>暂无数据</td>';
		str+='	  	<td>暂无数据</td>';
		str+='	  	<td>暂无数据</td>';
	}else{
		str+='	  	<td>'+ls[10]+'</td>';
		str+='	  	<td>'+ls[11]+'</td>';
		str+='	  	<td>'+ls[12]+'</td>';
		str+='	  	<td>'+ls[13]+'</td>';
	}
	str+='	</tr>';
	$("#tb").append(str);
}
function initChart(data){
	var e = {
            type: "doughnut",
            data: {
           	 datasets: [{
                    data: [data.cp_dq, data.cp_xq],
                    backgroundColor: [KTApp.getStateColor("warning"), KTApp.getStateColor("brand")]
                }],
                labels: ["让胜", "让负"]
            },
            options: {
                cutoutPercentage: 75,
                responsive: !0,
                maintainAspectRatio: !1,
                legend: {
                    display: !1,
                    position: "top"
                },
                title: {
                    display: !1,
                    text: "Technology"
                },
                animation: {
                    animateScale: !0,
                    animateRotate: !0
                },
                tooltips: {
                    enabled: !0,
                    intersect: !1,
                    mode: "nearest",
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10,
                    caretPadding: 0,
                    displayColors: !1,
                    backgroundColor: KTApp.getStateColor("brand"),
                    titleFontColor: "#ffffff",
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        },
        a = document.getElementById("kt_widget_technologies_chart_1").getContext("2d");
        new Chart(a, e)
        e = {
            type: "doughnut",
            data: {
           	 datasets: [{
                    data: [data.lc_dq, data.lc_xq],
                    backgroundColor: [KTApp.getStateColor("warning"), KTApp.getStateColor("brand")]
                }],
                labels: ["让胜", "让负"]
            },
            options: {
                cutoutPercentage: 75,
                responsive: !0,
                maintainAspectRatio: !1,
                legend: {
                    display: !1,
                    position: "top"
                },
                title: {
                    display: !1,
                    text: "Technology"
                },
                animation: {
                    animateScale: !0,
                    animateRotate: !0
                },
                tooltips: {
                    enabled: !0,
                    intersect: !1,
                    mode: "nearest",
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10,
                    caretPadding: 0,
                    displayColors: !1,
                    backgroundColor: KTApp.getStateColor("brand"),
                    titleFontColor: "#ffffff",
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        },
        a = document.getElementById("kt_widget_technologies_chart_2").getContext("2d");
        new Chart(a, e)
        e = {
            type: "doughnut",
            data: {
           	 datasets: [{
                    data: [data.bf_dq, data.bf_xq],
                    backgroundColor: [KTApp.getStateColor("warning"), KTApp.getStateColor("brand")]
                }],
                labels: ["让胜", "让负"]
            },
            options: {
                cutoutPercentage: 75,
                responsive: !0,
                maintainAspectRatio: !1,
                legend: {
                    display: !1,
                    position: "top"
                },
                title: {
                    display: !1,
                    text: "Technology"
                },
                animation: {
                    animateScale: !0,
                    animateRotate: !0
                },
                tooltips: {
                    enabled: !0,
                    intersect: !1,
                    mode: "nearest",
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10,
                    caretPadding: 0,
                    displayColors: !1,
                    backgroundColor: KTApp.getStateColor("brand"),
                    titleFontColor: "#ffffff",
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        },
        a = document.getElementById("kt_widget_technologies_chart_3").getContext("2d");
        new Chart(a, e)
        
        
        $("#chart1_1").removeClass();
        $("#chart1_2").removeClass();
        $("#chart1_1").addClass("kt-widget-19__bar-"+getPercentageBar(data.cp_xq,data.cp_dq));
        $("#chart1_2").addClass("kt-widget-19__bar-"+getPercentageBar(data.cp_dq,data.cp_xq)+" kt-bg-warning");
        $("#chart1_1").attr("data-original-title",data.cp_xq);
        $("#chart1_2").attr("data-original-title",data.cp_dq);
        
        $("#chart2_1").removeClass();
        $("#chart2_2").removeClass();
        $("#chart2_1").addClass("kt-widget-19__bar-"+getPercentageBar(data.lc_xq,data.lc_dq));
        $("#chart2_2").addClass("kt-widget-19__bar-"+getPercentageBar(data.lc_dq,data.lc_xq)+" kt-bg-warning");
        $("#chart2_1").attr("data-original-title",data.lc_xq);
        $("#chart2_2").attr("data-original-title",data.lc_dq);
        
        $("#chart3_1").removeClass();
        $("#chart3_2").removeClass();
        $("#chart3_1").addClass("kt-widget-19__bar-"+getPercentageBar(data.bf_xq,data.bf_dq));
        $("#chart3_2").addClass("kt-widget-19__bar-"+getPercentageBar(data.bf_dq,data.bf_xq)+" kt-bg-warning");
        $("#chart3_1").attr("data-original-title",data.bf_xq);
        $("#chart3_2").attr("data-original-title",data.bf_dq);
        
        
        var str_="初盘指数:让胜"+data.cp_dq+"，让负"+data.cp_xq+"，结果指向："+data.cp_tj;
        $("#zs_1").text(str_);
        str_="临场指数:让胜"+data.lc_dq+"，让负"+data.lc_xq+"，结果指向："+data.lc_tj;
        $("#zs_2").text(str_);
        str_="必发指数:让胜"+data.bf_dq+"，让负"+data.bf_xq+"，结果指向："+data.bf_tj;
        $("#zs_3").text(str_);
        
        var per="50%";
        if(data.cp_tj=="让胜"){
    		per=getPercentage(data.cp_dq,data.cp_xq);
    	}else if(data.cp_tj=="让负"){
    		per=getPercentage(data.cp_xq,data.cp_dq);
    	}
        $("#gl_1").text(per);
        
        per="50%";
        if(data.lc_tj=="让胜"){
    		per=getPercentage(data.lc_dq,data.lc_xq);
    	}else if(data.lc_tj=="让负"){
    		per=getPercentage(data.lc_xq,data.lc_dq);
    	}
        $("#gl_2").text(per);
        
        per="50%";
        if(data.bf_tj=="让胜"){
    		per=getPercentage(data.bf_dq,data.bf_xq);
    	}else if(data.bf_tj=="让负"){
    		per=getPercentage(data.bf_xq,data.bf_dq);
    	}
        $("#gl_3").text(per);
}
function initJG(data){
	$("#dxq_vs").text(data.bs);
	$("#dxq_tj").text(data.tj);
	var per="50%";
	if(data.zp_tj=="让胜"){
		per=getPercentage(data.zp_dq,data.zp_xq);
	}else if(data.zp_tj=="让负"){
		per=getPercentage(data.zp_xq,data.zp_dq);
	}
	$("#dxq_gl").attr("style","width:"+per);
	$("#dxq_percent").text(per);
	
	$("#bf_vs").text(data.bs);
	$("#op_tj").text(data.op_tj==null?"未知":data.op_tj);
	per="0%";
	if(data.op_tj=="胜"){
		per=getOpPercentage(data.op_s,data.op_p,data.op_f);
	}else if(data.op_tj=="平"){
		per=getOpPercentage(data.op_p,data.op_s,data.op_f);
	}else if(data.op_tj=="负"){
		per=getOpPercentage(data.op_f,data.op_s,data.op_p);
	}
	$("#op_gl").attr("style","width:"+per);
	$("#op_percent").text(per);
}
function getPercentage(num, num2) { 
	num=Number(num);
	num2=Number(num2);
	if((num+num2)==0){
		return "未知";
	}
	return (Math.round(num / (num+num2) * 100)  + "%");
}
function getPercentageBar(num, num2) { 
	num=Number(num);
	num2=Number(num2);
	if((num+num2)==0){
		return "未知";
	}
	return (Math.round(num / (num+num2) * 100) );
}
function getOpPercentage(num, num2,num3) { 
	num=Number(num);
	num2=Number(num2);
	num3=Number(num3);
	if((num+num2+num3)==0){
		return "未知";
	}
	return (Math.round(num / (num+num2+num3) * 1000) / 10 + "%");
}
function loginOut(){
	$.get("/keen/loginOut", function (data){
		localStorage.local_ln_keen="";
		localStorage.local_pwd_keen="";
		window.location.href='./login.html';
	})
}
function getData(fid,target){
	$(".data").hide();
	$("li.kt-menu__item").removeClass("kt-menu__item--active");
	$(target).parent().addClass("kt-menu__item--active");
	KTApp.block("#main_body",{
		overlayColor:"#000000",type:"v2",state:"primary",message:"云端数据分析中..."
	})
	now_fid=fid;
	$.get("/keenData/getYp?fid="+fid,function (data){
		if(data.ss!=null){
			initTableData(data);
			initChart(data);
			initJG(data);
			$(".data").show();
			$(".nodata").hide();
			KTApp.unblock("#main_body");
		}
	})
}

var refresh=true;
var Index = function () {

	return {
		init: function () {
			loginValid();
			clearInterval(interval_keen);
			interval_keen=setInterval("refresh_Init_Time()",60*1000);
		}
	}

}();
var interval_keen;
var now_fid="";
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
function refresh_Init_Time(){
	var str="";
	$.get("/keenData/getYpSs", function (data){
		if(JSON.stringify(data) == JSON.stringify({})){
			str+='<ul class="kt-menu__nav ">';
			str+='<li class="kt-menu__section kt-menu__section--first">';
				str+='<h4 class="kt-menu__section-text">未检测到比赛信息</h4>';
				str+='<i class="kt-menu__section-icon flaticon-more-v2"></i>';
			str+='</li>';
			str+='</ul>';
			$(".data").hide();
			$(".nodata").show();
		}
		$.each(data,function(key,val){
			str+='<ul class="kt-menu__nav ">';
			str+='<li class="kt-menu__section kt-menu__section--first">';
				str+='<h4 class="kt-menu__section-text">'+key+'</h4>';
				str+='<i class="kt-menu__section-icon flaticon-more-v2"></i>';
			str+='</li>';
			$.each(val,function(k,bs){
				var fid_=bs.split("|")[0];
				if(now_fid==fid_){
					str+='<li class="kt-menu__item  kt-menu__item--active" aria-haspopup="true" ><a  href="javascript:void(0);" onclick="getData(\''+fid_+'\',this)" class="kt-menu__link "><span class="kt-menu__link-text">'+bs_+'</span></a></li>';
				}else{
					str+='<li class="kt-menu__item" aria-haspopup="true" ><a  href="javascript:void(0);" onclick="getData(\''+fid_+'\',this)" class="kt-menu__link "><span class="kt-menu__link-text">'+bs_+'</span></a></li>';
				}
			})
			str+='</ul>';
		})
		$("#kt_aside_menu").empty();
		$("#kt_aside_menu").append(str);
	})
}
function refresh_Init_First(){
	var str="";
	$.get("/keenData/getYpSs", function (data){
		if(JSON.stringify(data) == JSON.stringify({})){
			str+='<ul class="kt-menu__nav ">';
			str+='<li class="kt-menu__section kt-menu__section--first">';
				str+='<h4 class="kt-menu__section-text">未检测到比赛信息</h4>';
				str+='<i class="kt-menu__section-icon flaticon-more-v2"></i>';
			str+='</li>';
			str+='</ul>';
			$(".data").hide();
			$(".nodata").show();
		}
		var first=true,fid_first="";
		$.each(data,function(key,val){
			str+='<ul class="kt-menu__nav ">';
			str+='<li class="kt-menu__section kt-menu__section--first">';
				str+='<h4 class="kt-menu__section-text">'+key+'</h4>';
				str+='<i class="kt-menu__section-icon flaticon-more-v2"></i>';
			str+='</li>';
			$.each(val,function(k,bs){
				var fid_=bs.split("|")[0];
				var bs_=bs.split("|")[1];
				if(first){
					fid_first=fid_;
					now_fid=fid_;
					first=false;
					str+='<li class="kt-menu__item  kt-menu__item--active" aria-haspopup="true" ><a  href="javascript:void(0);" onclick="getData(\''+fid_+'\',this)" class="kt-menu__link "><span class="kt-menu__link-text">'+bs_+'</span></a></li>';
				}else{
					str+='<li class="kt-menu__item" aria-haspopup="true" ><a  href="javascript:void(0);" onclick="getData(\''+fid_+'\',this)" class="kt-menu__link "><span class="kt-menu__link-text">'+bs_+'</span></a></li>';
				}
			})
			str+='</ul>';
		})
		$("#kt_aside_menu").empty();
		$("#kt_aside_menu").append(str);
		$.get("/keenData/getYp?fid="+fid_first,function (data){
			if(data.ss!=null){
				initTableData(data);
				initChart(data);
				initJG(data);
				$(".data").show();
				$(".nodata").hide();
			}
		})
	})
}

function loginValid(){
	KTApp.block("#main_body",{
		overlayColor:"#000000",type:"v2",state:"primary",message:"数据加载中..."
	})
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
			KTApp.unblock("#main_body");
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