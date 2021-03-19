/**
 * Created by wdl on 2017/5/26.
 */

// 消息提示
toastr.options = {
	"closeButton" : true,
	"debug" : false,
	"positionClass" : "toast-top-right",
	"onclick" : null,
	"showDuration" : "500",
	"hideDuration" : "1000",
	"timeOut" : "3000",
	"extendedTimeOut" : "1000",
	"showEasing" : "swing",
	"hideEasing" : "linear",
	"showMethod" : "fadeIn",
	"hideMethod" : "fadeOut"
}
//获取数字
function getNum(text){
	var value = text.replace(/[^(\d+(\.\d+)?)]/ig,""); 
	value=Number(value);
	return value;
}
//患教表单序列化
$.fn.serializeEduObject = function() {
	var formArray = this.serializeArray();
	var dataArray = {};
	var units=[];
	$.each(formArray, function() {
		if(this.name=="units"){
			units=this.value.split(",");
			if(this.value!=""){
				dataArray[this.name] = units || '';
			}
		}else{
			if (dataArray[this.name]) {
				if (!dataArray[this.name].push) {
					dataArray[this.name] = [ dataArray[this.name] ];
				}
				dataArray[this.name].push(this.value || '');
			} else {
				dataArray[this.name] = this.value || '';
			}
		}
	});
	
	var json=JSON.stringify(dataArray);
	return json;
};
//角色表单序列化
$.fn.serializeRoleObject = function() {
	var formArray = this.serializeArray();
	var dataArray = {};
	var menuIds=[];
	$.each(formArray, function() {
		if(this.name=="menuIds"){
			menuIds=this.value.split(",");
			dataArray[this.name] = menuIds || '';
		}else{
			if (dataArray[this.name]) {
				if (!dataArray[this.name].push) {
					dataArray[this.name] = [ dataArray[this.name] ];
				}
				dataArray[this.name].push(this.value || '');
			} else {
				dataArray[this.name] = this.value || '';
			}
		}
	});
	
	var json=JSON.stringify(dataArray);
	return json;
};
//表单序列化不转json
$.fn.serializeNoObject = function() {
	var formArray = this.serializeArray();
	var dataArray = {};
	$.each(formArray, function() {
		if (dataArray[this.name]) {
			if (!dataArray[this.name].push) {
				dataArray[this.name] = [ dataArray[this.name] ];
			}
			dataArray[this.name].push(this.value || '');
		} else {
			dataArray[this.name] = this.value || '';
		}
	});
	
	return dataArray;
};
// 表单序列化
$.fn.serializeObject = function() {
	var formArray = this.serializeArray();
	var dataArray = {};
	$.each(formArray, function() {
		if (dataArray[this.name]) {
			if (!dataArray[this.name].push) {
				dataArray[this.name] = [ dataArray[this.name] ];
			}
			dataArray[this.name].push(this.value || '');
		} else {
			dataArray[this.name] = this.value || '';
		}
	});
	
	var json=JSON.stringify(dataArray);
	return json;
};

//表单字符串序列化
$.fn.serializeStrObject = function() {
	var formArray = this.serializeArray();
	var str = "?";
	$.each(formArray, function() {
		str+=this.name+"="+this.value+"&";
	});
	str=str.slice(0,-1);
	return str;
};
var swm="001314";
// 权限控制
var author = function() {
	var arr = localStorage.author;
	
	if (arr) {
		 if (typeof arr === 'string') {
			 arr = JSON.parse(arr);
		 }

		var shFlag;
		$("[data-auth]").each(function() {
			shFlag = true;
			var auth = $(this).attr('data-auth');
//			for (var i=0;i<arr.length;i++) {
//				if (auth == arr[i]) {
//					shFlag = false;
//				}
//			}
			
			var result= $.inArray(auth, arr);
			
			if (result==-1) {
				 $(this).hide();
			}

		});
	}
}
// 表单置空
function clearAll() {
	var ipts = document.getElementsByTagName("input");
	for (var i = 0; i < ipts.length; i++) {
		if ($(ipts[i]).hasClass("form-portlet")) {
			ipts[i].value = "";
		}
	}
	var iptse = document.getElementsByTagName("select");
	for (var i = 0; i < iptse.length; i++) {
		if ($(iptse[i]).hasClass("form-portlet")) {
			// iptse[i][0].selected=true;
			$(iptse[i]).val("");
		}
	}
	var iptst = document.getElementsByTagName("textarea");
	for (var i = 0; i < iptst.length; i++) {
		if ($(iptst[i]).hasClass("form-portlet")) {
			iptst[i].value = "";
		}
	}
	
	$(".twelve").hide();
}
//转换时间戳
function formatDateTime(timeStamp) {   
    var date = new Date();  
    date.setTime(timeStamp * 1000);  
    var y = date.getFullYear();      
    var m = date.getMonth() + 1;      
    m = m < 10 ? ('0' + m) : m;      
    var d = date.getDate();      
    d = d < 10 ? ('0' + d) : d;      
    var h = date.getHours();    
    h = h < 10 ? ('0' + h) : h;    
    var minute = date.getMinutes();    
    var second = date.getSeconds();    
    minute = minute < 10 ? ('0' + minute) : minute;      
    second = second < 10 ? ('0' + second) : second;     
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;      
};    

// 日期转换
function formatDate(date, format) {
	if (!date)
		return;
	if (!format)
		format = "yyyy-MM-dd";
	switch (typeof date) {
	case "string":
		date = new Date(date.replace(/-/, "/"));
		break;
	case "number":
		date = new Date(date);
		break;
	}
	if (!date instanceof Date)
		return;
	var dict = {
		"yyyy" : date.getFullYear(),
		"M" : date.getMonth() + 1,
		"d" : date.getDate(),
		"H" : date.getHours(),
		"m" : date.getMinutes(),
		"s" : date.getSeconds(),
		"MM" : ("" + (date.getMonth() + 101)).substr(1),
		"dd" : ("" + (date.getDate() + 100)).substr(1),
		"HH" : ("" + (date.getHours() + 100)).substr(1),
		"mm" : ("" + (date.getMinutes() + 100)).substr(1),
		"ss" : ("" + (date.getSeconds() + 100)).substr(1)
	};
	return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {
		return dict[arguments[0]];
	});
}


function onlyNonNegative(obj) {  
	var inputChar = event.keyCode;  
	//判断是否有多于一个小数点  
	if(inputChar==190 ) {  
		var index=obj.value.split(".").length;
		if(index>1){
			$(obj).val("");
		}
	}

	var value=obj.value;
	var reg = /^(([1-9]+\.?\d+)|(0\.\d*[1-9]\d*)|([0-9]))$/;
	if(!reg.test(obj.value)) {
		$(obj).val("");
	}

}

Array.prototype.removeByValue = function(val) {
	  for(var i=0; i<this.length; i++) {
	    if(this[i] == val) {
	      this.splice(i, 1);
	      break;
	    }
	  }
}
//校验权限
function checkAuth(code) {  
	var arr = localStorage.author;

	if (arr) {
		 if (typeof arr === 'string') {
			 arr = JSON.parse(arr);
		 }
		 
	     var result= $.inArray(code, arr);
		 if (result==-1) {
			 return false;
		 }else{
			 return true;
		 }
	}
	
}

