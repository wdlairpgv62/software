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
		str+='	  	<td>'+ls[5]+'</td>';
		str+='	  	<td>'+ls[6]+'</td>';
		str+='	  	<td>'+ls[7]+'</td>';
		str+='	  	<td>'+ls[8]+'</td>';
	}
	if(data.bf_all==""){
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2" >暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
		str+='	  	<td rowspan="2">暂无数据</td>';
	}else{
		str+='	  	<td rowspan="2">'+bf[0]+'</td>';
		str+='	  	<td rowspan="2">'+bf[1]+'</td>';
		str+='	  	<td rowspan="2">'+bf[2]+'</td>';
		str+='	  	<td rowspan="2" >'+bf[9]+'</td>';
		str+='	  	<td rowspan="2">'+bf[10]+'</td>';
		str+='	  	<td rowspan="2">'+bf[11]+'</td>';
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
		str+='	  	<td>'+ls[14]+'</td>';
		str+='	  	<td>'+ls[15]+'</td>';
		str+='	  	<td>'+ls[16]+'</td>';
		str+='	  	<td>'+ls[17]+'</td>';
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
                labels: ["大球", "小球"]
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
                labels: ["大球", "小球"]
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
                labels: ["大球", "小球"]
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
        
        var str_="初盘指数:大球"+data.cp_dq+"，小球"+data.cp_xq+"，结果指向："+data.cp_tj;
        $("#zs_1").text(str_);
        str_="临场指数:大球"+data.lc_dq+"，小球"+data.lc_xq+"，结果指向："+data.lc_tj;
        $("#zs_2").text(str_);
        str_="必发指数:大球"+data.bf_dq+"，小球"+data.bf_xq+"，结果指向："+data.bf_tj;
        $("#zs_3").text(str_);
        
        var per="50%";
        if(data.cp_tj=="大"){
    		per=getPercentage(data.cp_dq,data.cp_xq);
    	}else if(data.cp_tj=="小"){
    		per=getPercentage(data.cp_xq,data.cp_dq);
    	}
        $("#gl_1").text(per);
        
        per="50%";
        if(data.lc_tj=="大"){
    		per=getPercentage(data.lc_dq,data.lc_xq);
    	}else if(data.lc_tj=="小"){
    		per=getPercentage(data.lc_xq,data.lc_dq);
    	}
        $("#gl_2").text(per);
        
        per="50%";
        if(data.bf_tj=="大"){
    		per=getPercentage(data.bf_dq,data.bf_xq);
    	}else if(data.bf_tj=="小"){
    		per=getPercentage(data.bf_xq,data.bf_dq);
    	}
        $("#gl_3").text(per);
}
function initJG(data){
	$("#dxq_vs").text(data.bs);
	$("#dxq_tj").text(data.tj);
	var per="50%";
	if(data.tj=="大"){
		per=getPercentage(data.zp_dq,data.zp_xq);
	}else if(data.tj=="小"){
		per=getPercentage(data.zp_xq,data.zp_dq);
	}
	$("#dxq_gl").attr("style","width:"+per);
	$("#dxq_percent").text(per);
	
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
	$.get("/keenData/getDxq?fid="+fid,function (data){
		if(data.ss!=null){
			initTableData(data);
			initChart(data);
			initJG(data);
			initAM(data);
			$(".data").show();
			$(".nodata").hide();
			KTApp.unblock("#main_body");
		}
	})
}
var chart;
function initAM(data){
	
	if(chart){
		chart.dispose();
		delete chart;
	}
	
	am4core.useTheme(am4themes_dataviz);
	am4core.useTheme(am4themes_animated);
	
	chart = am4core.create("chartdiv", am4charts.XYChart3D);

	chart.data = [{
	  "country": "初盘-大",
	  "visits": data.cp_pk1
	}, {
	  "country": "初盘-小",
	  "visits": data.cp_pk3
	}, {
	  "country": "临场-大",
	  "visits": data.lc_pk1
	}, {
	  "country": "临场-小",
	  "visits": data.lc_pk3
	}];

	let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
	categoryAxis.dataFields.category = "country";
	categoryAxis.renderer.labels.template.rotation = 270;
	categoryAxis.renderer.labels.template.hideOversized = false;
	categoryAxis.renderer.minGridDistance = 20;
	categoryAxis.renderer.labels.template.horizontalCenter = "right";
	categoryAxis.renderer.labels.template.verticalCenter = "middle";
	categoryAxis.tooltip.label.rotation = 270;
	categoryAxis.tooltip.label.horizontalCenter = "right";
	categoryAxis.tooltip.label.verticalCenter = "middle";

	let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.title.text = "";
	valueAxis.title.fontWeight = "bold";

	var series = chart.series.push(new am4charts.ColumnSeries3D());
	series.dataFields.valueY = "visits";
	series.dataFields.categoryX = "country";
	series.name = "Visits";
	series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
	series.columns.template.fillOpacity = .8;

	var columnTemplate = series.columns.template;
	columnTemplate.strokeWidth = 2;
	columnTemplate.strokeOpacity = 1;
	columnTemplate.stroke = am4core.color("#red");

	columnTemplate.adapter.add("fill", function(fill, target) {
	  return chart.colors.getIndex(target.dataItem.index);
	})

	columnTemplate.adapter.add("stroke", function(stroke, target) {
	  return chart.colors.getIndex(target.dataItem.index);
	})

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.lineX.strokeOpacity = 0;
	chart.cursor.lineY.strokeOpacity = 0;
	
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
	$.get("/keenData/getDxqSs", function (data){
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
	$.get("/keenData/getDxqSs", function (data){
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
		$.get("/keenData/getDxq?fid="+fid_first,function (data){
			if(data.ss!=null){
				initTableData(data);
				initChart(data);
				initJG(data);
				initAM(data);
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