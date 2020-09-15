var initLoginParam=function(){
	 
	$("#username").val(localStorage.local_ln_keen);
    $("#password").val(localStorage.local_pwd_keen);
    
}
function valid(){
    $("#login_form").validate({
    	messages: {
            username: {
                required: "请输入用户名!"
            },
            password: {
                required: "请输入密码!"
            }
        },
        rules: {
        	 username: {
                 required: true
                 
             },
             password: {
                 required: true
             }
        }
    })
}
var SnippetLogin = function () {
	initLoginParam();
	valid();
    return {
        init: function () {
        	
        	 
             $("#m_login_signin_submit").click(function (e) {
            	 $("#wdl-mm").hide();
            	 $("#wdl-gq").hide();
            	 
                 var username=$("#username").val();
                 var password=$("#password").val();
                 var data={};
                 data.username=username;
                 data.password=password;
                 setToken();
                 data.token=$("#token").val();
                 if($("#login_form").valid()){
	            	 $.post("/keen/login_valid",data,function (data){
	            		 if(data==-1){
		                   	  $("#username").val(localStorage.local_ln_keen);
		              		  $("#password").val(localStorage.local_pwd_keen);
		              		  $("#wdl-mm").show();
	              		 }else if(data==0){
	              			 $("#username").val(localStorage.local_ln_keen);
	              			 $("#password").val(localStorage.local_pwd_keen);
	              			 $("#wdl-gq").show();
	              		 }else{
              				localStorage.local_ln_keen=$("#username").val();
              				localStorage.local_pwd_keen=$("#password").val();
              				window.location.href='./dxq';
	              		 } 
	 				})
                }
            })
        }
    }
}();
