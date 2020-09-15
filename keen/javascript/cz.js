function valid(){
    $("#cz_form").validate({
    	messages: {
    		username: {
            	maxlength:"请输入5~15位字符!",
            	minlength:"请输入5~15位字符!",
                required: "请输入用户名!"
            },
            key: {
            	maxlength:"请输入正确的卡号!",
            	minlength:"请输入正确的卡号!",
            	required: "请输入正确的卡号!"
            },
            password: {
            	maxlength:"请输入正确的卡号密码!",
            	minlength:"请输入正确的卡号密码!",
            	required: "请输入正确的卡号密码!"
            }
        },
        rules: {
        	username: {
             	maxlength:15,
             	minlength:5,
                required: !0
             },
            key: {
            	maxlength:11,
            	minlength:11,
                required: !0
            },
            password: {
            	maxlength:16,
            	minlength:16,
                required: !0
            }
        }
    })
}
var czflag=false;
var SnippetCZ = function () {
	valid();
    return {
        init: function () {
             $("#m_login_signin_submit").click(function (e) {
                 if(czflag){
                	 return;
                 }
            	 $("#wdl-mm").hide();
            	 $("#wdl-cg").hide();
            	 $("#wdl-zh").hide();
            	 
                 var username=$("#username").val();
                 var key=$("#key").val();
                 var password=$("#password").val();
                 var data={};
                 data.username=username;
                 data.key=key;
                 data.pwd=password;
                 setToken();
                 data.token=$("#token").val();
                 if($("#cz_form").valid()){
                	 czflag=true;
	            	 $.post("/keen/key_registry",data,function (data){
	            		 czflag=false;
	            		 if(data==-1){
		              		  $("#wdl-mm").show();
	              		 }else if(data==-2){
	              			 $("#wdl-zh").show();
	              		 }else {
	              			$("#username").val("");
	              			$("#key").val("");
	              			$("#password").val("");
	              			 $("#wdl-cg").show();
	              		 }
	 				})
                }
            })
        }
    }
}();
