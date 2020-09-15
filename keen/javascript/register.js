function valid(){
    $("#register_form").validate({
    	messages: {
    		username: {
            	maxlength:"请输入5~12位字符!",
            	minlength:"请输入5~12位字符!",
                required: "请输入用户名!"
            },
    		phone: {
                required: "请输入手机号!",
                isMobile : "请正确填写手机号码!"
            },
            password: {
            	digits:"请输入5~10位数字",
            	maxlength:"请输入5~10位数字!",
            	minlength:"请输入5~10位数字!",
                required: "请输入密码!"
            },
            rpassword: {
            	equalTo: "两次密码输入不一致!",
                required: "请输入密码!"
            },
            email: {
            	email: "请输入有效的电子邮件地址",
                required: "请输入电子邮箱!"
            }
        },
        rules: {
        	username: {
             	maxlength:12,
             	minlength:5,
                required: !0
             },
            phone: {
                required: !0,
                isMobile : true
            },
            password: {
            	digits:true,
            	maxlength:10,
            	minlength:5,
                required: !0
            },
            rpassword: {
            	equalTo: "#firstPwd",
                required: !0
            },
            email: {
            	required: !0,
            	email:true
            }
        }
    })
    jQuery.validator.addMethod("isMobile", function(value, element) {  
   	 var length = value.length;  
   	 var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;  
   	 return this.optional(element) || (length == 11 && mobile.test(value));  
   }, "请输入正确的手机号码");  
}
var SnippetUp = function () {
	valid();
    return {
        init: function () {
             $("#m_login_signup_submit").click(function (e) {
                 
            	 $("#wdl-mm").hide();
            	 $("#wdl-gq").hide();
                 if($("#register_form").valid()){
                	 var data={};
                     data.username=$("#username").val();
                     data.password=$("#firstPwd").val();setwdlKeen();
                     data.rpassword=$("#repwd").val();
                     data.email=$("#email").val();
                     data.phone=$("#phone").val();
                	 $.post("/keen/user_registry_keen",data,function (res){
                		 if(res==1){
    	              		  $("#wdl-mm").show();
                  		 }else{
                  			$("#username").val("");
                  			$("#firstPwd").val("");
                  			$("#repwd").val("");
                  			$("#email").val("");
                  			$("#phone").val("");
                  			$("#wdl-gq").show();
                  		 } 
     				})
                 }
            })
        }
    }
}();
