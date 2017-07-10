/*
// GOTTEN FROM MTN HyNet WEBSITE





<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en-US"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en-US"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en-US"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9" lang="en-US"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en-US"> <!--<![endif]-->

<head>
<meta name="description" content=" | MTN Hynet Home"/>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MTN Hynet Home</title>
<link rel="stylesheet" type="text/css" href="/tellin/style/style.css">
<link rel="stylesheet" type="text/css" href="/tellin/style/font.css">
<script type="text/javascript" src="/tellin/js/jquery.min.js"></script>
<script type="text/javascript" src="/tellin/js/jquery.blueberry.js"></script>
<script type="text/javascript">
$(document).ready(
	function()
	{
		$("#authimg").click(function()
		{
			changeVerifyCode();
		});
	});
		
function changeVerifyCode()
{
	var date = new Date();
	$("#authimg").eq(0).attr("src", "http://mtnhynet.mtnbusiness.com.ng:8011/tellin/usr/wimax/login/random.jsp?key=ck_user_login&date=" + date);
	return false;
}

//检查登陆
function check_Login()
{  
	var username = $("#username");
	var password = $("#MSUBPSWD");
	var checkcode = $("#checkCode");
	
	var usernameRegex = /['\\\|\\/&\\\\]/;
	var passwordRegex = /^[A-Za-z0-9]{4,12}$/g;
	   
     // account
     if($.trim(username.val()) == "")
     {
         alert("Kindly enter the username!");
         username.focus();
         return false;
     }
     
	 if (username.val().length > 20)
     {
        alert('Max. length of username is 20!');
        username.focus();
	    return false;
     }
	 
	 if(usernameRegex.test(username.val()))
	 {
		 alert('Special characters like \'\\|/& are not allowed in username');
	   	 username.focus();
	   	 return false;
	 }
	 
     // password
     if($.trim(password.val()) == "")
     {
         alert("Kindly enter the password!");
         password.focus();
         return false;
     }
     
	 if (password.val().length < 4 || password.val().length > 12)
     {
		 alert('Password length must be between 4 to 12!');
		 password.focus();
	     return false;
     }
	 
	 if (!passwordRegex.test(password.val()))
	 {
		 alert('Password should be between 4-12 characters and it can be alphanumeric!');
		 password.focus();
	     return false;
	 }
	 
	 if($.trim(checkcode.val()) == "")
	 {
		 alert("Kindly enter the verification code!");
		 return false;
     }
  	
	 return true;
}
</script>

</head>
<body>
	<div class="netglobal">
		



<link rel="stylesheet" type="text/css" href="/tellin/style/style.css">
<script type="text/javascript" src="/tellin/js/menu.js"></script>

<div class="header">
	<div class="wrapper">
		<div class="logoholder">
			<img src="/tellin/images/en/logo.png" />
		</div>
	</div>
	<div class="searchstrip">
       <div class="wrapper">
           <div class="pdg">
	           <div id="searchwrapper">
	               <form>
	                   <input type="text" class="searchbox" name="s" value="" />
	                   <input type="image" src="/tellin/images/en/searchbtn.png" class="searchbox_submit" value="" />
	               </form>
	           </div>
           </div>
       </div>
   </div>
</div>

<div class="main_menu">
	<div class="wrapper">
		<div class="pdg" style="text-align: center">
			<ul class="mainmenu">
				<li><a href="http://mtnbusiness.com.ng/">MTN Business</a></li>
				<li><a href="http://mtnbusiness.com.ng/sme">SME</a></li>
				<li><a href="http://mtnbusiness.com.ng/corporate">Corporate</a></li>
				<li><a href="http://mtnbusiness.com.ng/services-solutions">Services & Solutions</a></li>
				<li><a href="http://mtnbusiness.com.ng/mtn-business/support">Support</a></li>
			</ul>
		</div>
	</div>
</div>



		
        <div class="hynetwrap">
        	<div class="wrapper wrapwhite">
	       		<div class="hylog">
	               	<h1>Refer a friend!!! </h1>
	                <h2>...and get twice your MTN HyNet data.</h2>
	                <h6>Click <a href="http://mtnbusiness.com.ng/hynet-referral-form">here</a> to refer a friend!!!</h6>
	              	<form name="Login" method="post" action="https://mtnhynet.mtnbusiness.com.ng:8443/tellin/usr/wimax/loginsuc.do" onsubmit="return check_Login();">
	              		<input type="hidden" name="ACTION_MODE" value="Login_WIMAX"> 
	              		<input type="hidden" name="LOGINFLAG" value="0"> 
	              		<input type="hidden" name="SERVICEKEY" value="216"> 
	              		<input type="hidden" name="USERTYPE" value="USR"> 
	              		<input type="hidden" name="DOMAIN" value="mtn.com.ng"/>
	              		<table  class="logpass" >
	                    	<tr>
	                        	<td class="loginput" colspan="2">
	                        		Username<br/> 
	                                <input id="username" name="username" type="text" maxlength="20">
	                            </td>
	                            <td class="loginput" colspan="2">
	                            	Password<br/>
	                                <input id="MSUBPSWD" name="MSUBPSWD" type="password" maxlength="12">
	                            </td>
	                            <td class="loginput" >
	                            	Verification Code<br/>
	                                <input id="checkCode" name="checkCode" type="text" maxlength="4" />
	                            </td>
	                         	<td class="loginput" >
	                         		<br/>
	                                <img id="authimg" title="If it's not clear, please click to get another one."
											style="margin-bottom: -4px; cursor: pointer"
											src="http://mtnhynet.mtnbusiness.com.ng:8011/tellin/usr/wimax/login/random.jsp?key=ck_user_login" />
	                            </td>
	                         </tr>
	                        <tr>
	                        	<td colspan="3" class="logbtn">
	                            	<input name="Submit" type="submit" value="Login"><br/>
	                           		<a href="/tellin/usr/wimax/findportalpassword.do">Forgot Password?</a>
	                           	</td>
	                        </tr>
	                    </table>
	                 </form>
	                </div>
            	<div class="pagepix"><img src="/tellin/images/en/login.jpg"></div>
        	</div>
        </div>
        <style type="text/css">
	a.footerlink
	{
		color:#FFFFFF;
		font-weight:normal;
		text-decoration:none;
	}
	a.footerlink:hover 
	{
		text-decoration:underline;
		color:#FFFFFF;
	}
	a.footerlink:visited, a.footerlink:active 
	{
		color:#FFFFFF;
		font-weight:normal;
		text-decoration:none;
	}
</style>

<div class="footer">
	<a class="footerlink" href="mailto:escustomerservice@mtnbusiness.com.ng?subject=HyNet Portal: Comments/ Feedback/ Reviews">Comments/ Feedback/ Reviews</a> |
	<a class="footerlink" href="#">Features and Benefits</a> |
	<a class="footerlink" href="#">FAQ's</a> |
	<a class="footerlink" href="#">Troubleshooting Tips</a> |
	<a class="footerlink" href="#">Term and conditions</a> |
	<a class="footerlink" href="#">Site Map</a> |
	<a class="footerlink" href="#">Disclaimer</a> |
	<a class="footerlink" href="javascript:alert('For assistance, please send email to escustomerservice@mtnnigeria.net or call 08031021600');" >Customer Service</a>
	<br />
	Copyright &copy; 2014 MTN Nigeria Communications Limited
</div>
    </div>
</body>
</html>

 <div style="position:fixed;right:0;bottom:0;right:10px;z-index:1;line-height:22px; "><a href="#" onClick="openHelp()"><img src="/tellin/images/en/livechat.png" /></a></div>
 <script language=javascript>
    var eglvchathandle = null;
    function openHelp() {
            try{
                if( eglvchathandle != null && eglvchathandle.closed == false ){
                    eglvchathandle.focus();
                return;
            }
        }
        catch(err){}
        var refererName = "";
        refererName = encodeURIComponent(refererName);
        var refererurl = encodeURIComponent(document.location.href);
        var hashIndex = refererurl.lastIndexOf('#');
        if(hashIndex != -1){
            refererurl = refererurl.substring(0,hashIndex);
        }
        var eglvcaseid = (/eglvcaseid=[0-9]*/
/*gi).exec(window.location.search);*/
/* var vhtIds = '';
        if(typeof EGAINCLOUD != "undefined" && EGAINCLOUD.Account.getAllIds)
        {
            var ids = EGAINCLOUD.Account.getAllIds();
            vhtIds = '&aId=' + ids.a + '&sId=' + ids.s +'&uId=' + ids.u;
        }
        var EG_CALL_Q = window.EG_CALL_Q || [];
        EG_CALL_Q.push( ["enableTracker", true] );
        var eGainChatUrl = 'https://egain.mtnonline.com/system/templates/chat/eschat/chat.html?entryPointId=1009&templateName=eschat&languageCode=en&countryCode=US&ver=v11&eglvrefname='+refererName+'&'+eglvcaseid+vhtIds;
        if( (eGainChatUrl + refererurl).length <= 2000)
            eGainChatUrl += '&referer='+refererurl;
        var params = "height=623,width=419,resizable=yes,scrollbars=yes,toolbar=no";
        eglvchathandle = window.open( eGainChatUrl,'',params)
    }
</script>




*/

// $(document).ready(function() {
//     $('.box :frist-child').hide(500);
// });

// $('.navi-bar').sticky({
//     getWidthFrom: '.container',
//     responsiveWidth: true
// });