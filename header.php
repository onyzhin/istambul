<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
	<title></title>
	<script src="js/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery.browser.min.js" type="text/javascript"></script>

	<script src="js/selectivizr-min.js" type="text/javascript"></script>
	<script src="js/bootstrap/bootstrap.min.js" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="css/jquery.znice.css" media="all" />
	<script src="js/jquery.validate.min.js" type="text/javascript"></script>
	<script src="js/jquery.znice.validate.js" type="text/javascript"></script>
	<script src="js/jquery.znice.js" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox.css" media="all" />
	<script src="fancybox/jquery.fancybox.js" type="text/javascript"></script>

	<script src="js/modernizr.js" type="text/javascript"></script>
	<script src="js/jquery.watermark.min.js" type="text/javascript"></script>

	<!-- remove Files -->
	<script src="develop/john.js" type="text/javascript"></script>
	<script src="develop/kuzyuk.js" type="text/javascript"></script>
	<script src="develop/nuzhin.js" type="text/javascript"></script>
	<script src="develop/oleg.js" type="text/javascript"></script>

	<script src="js/myalert.js" type="text/javascript"></script>
	<script src="develop/autocssrenew.js" type="text/javascript"></script>
	<!-- remove Files -->
	
	<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/undblock.css" media="all" />
	<script src="js/scr.js" type="text/javascript"></script>

	<!--[if lt IE 9]>
		<script>
		document.createElement('header');
		document.createElement('nav');
		document.createElement('section');
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		document.createElement('time');
		</script>	
		<script src="js/pie.js" type="text/javascript"></script>
		<script src="http://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      	<script src="http://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

	<!--[if lt IE 8]><script src="js/oldie/warning.js"></script><script>window.onload=function(){e("js/oldie/")}</script><![endif]-->
</head>
<body>
	<?
		global $act;
		partial('zHiddenBlock');
	?>
	<header class="header">
		<div class="mbox container">
			<?
				if($act=='none' || $act=='index') echo '<div class="h_logo">logo</div>';
				else echo '<div class="logo"><a href="#">h_logo</a></div>';
			?>
			<?partial('zTabs');?>
		</div>
	</header>