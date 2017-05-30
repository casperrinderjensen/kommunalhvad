<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="KommunalHVAD - Kommunalvalg 2017 - Konkurrence: VIND 5000 kr. til Netto. Det er nemt og overskueligt, uden nogle former for tilmelding af nyhedsbreve!">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>KommunalHVAD | Konkurrence</title>
<!-- Google Font -->
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600" rel="stylesheet">
<!-- Font-Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet">
<!-- Stylesheet -->
<link rel="stylesheet" href="styles.css">


<!-- forbindelse til jQuery library - til hamburger menu -->
<script 
src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js">
</script>


<!-- ANIMATE CC HERUNDER -->


<!-- GAVE ANIMATION HERUNDER -->

<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="gavekort-swing.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container_gave");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new lib.gavekortswing();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(true,'both',false,1);	
	fnStartAnimation();
}
</script>
	
	
	
	



<!-- HJÆLPER MED AT VALIDERE EMAIL. DVS. OM DER ER @, OM DER ER BOGSTAVER FØR OG EFTER @, OSV. HUSK "DATA-VALIDATION". SE EMAIL FORM -->
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.60/jquery.form-validator.min.js"></script>


<script type="text/javascript">
		
	$(document).ready(function(){
		var myLanguage = {
			badEmail : '<p id="wrongEmail">Hov! Den e-mail du har indtastet er ikke korrekt.</p>',
	
			}
		$.validate({
			language : myLanguage
		});
	});

</script>


<!-- INTERNT STYLESHEET -->
<style>
	
/* Computer herunder */	
	#gave_img {
		display: none;
	}

	
/* Vertikal Smartphone - stylesheet */
@media handheld, only screen and (max-width: 767px) {
	
	}
	
	
/* Smartphone Stylesheet */
@media screen and (max-width: 440px) {
	#gave_img {
		display: block;
	}
	
	#gave_img img {
		width: 46%;
		margin-top: 10px;
		margin-left: 97px;
	}
	
	}
</style>





</head>

<body onLoad="init();">


<!-- NAVIGATION HERUNDER -->
<div class="grid grid-pad">
		
		<div class="col-1-1 topnav hide-on-mobile">
			<div class="col-4-12 logo"><a href="index.html"><img src="img/Logo2.svg" alt="KommunalHVAD"></a></div>
			<div class="col-6-12 content nav-desktop">
				<nav>
					<ul>
						<li><a href="index.html">Forside</a></li>
						<li><a href="stemmeguide.html">Stemmeguide</a></li>
						<li><a class="selected" href="konkurrence-kommunalvalg.php">Konkurrence</a></li>
					</ul>
				</nav>
			</div>
       
        <div class="col-2-12 content countdown"> 
        
				<div>
					<p id="countdown"></p>
					<p>Kommunalvalg 2017</p>


					<!-- JAVASCRIPT HERUNDER 
						Kode inspiration: https://www.w3schools.com/howto/howto_js_countdown.asp
					-->
					<script type="text/javascript">
					// Sæt den dato som uret skal tælle ned til
					var countDownDate = new Date("Nov 21, 2017 08:00:00").getTime();


					// Opdatere nedtællingen hvert sekund
					var x = setInterval(function() {


						// Denne finder det nuværende øjebliks tid
						var now = new Date().getTime();


						// Finder den distance der er mellem den nuværende tid og nedtællings datoen
						var distance = countDownDate - now;


						// Tid udregning for dage, timer, minutter og sekunder
						var days = Math.floor(distance / (1000 * 60 * 60 * 24));
						var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						var seconds = Math.floor((distance % (1000 * 60)) / 1000);


						// Viser resultatet i elementet id="countdown"
  						document.getElementById("countdown").innerHTML = days + "d " + hours + "t "
  						+ minutes + "m " + seconds + "s ";


						// Når nedtælling rammer den rigtige dato, skal den vise noget tekst
						if (distance < 0) {
							clearInterval(x);
							document.getElementById("countdown").innerHTML = "Husk at stemme i dag";
						}
					}, 1000);
					</script>
				</div>
        
        </div>
		</div>
      		<!-- Smarthpone Menu -->
       		<div class="mobile-col-1-1 mobile-header logo-mobile"><img src="img/Logo2.svg" alt="KommunalHVAD"></div>
				<nav class="mobile">
					<button class="hamburger-btn"></button>
						<div>
							<a href="index.html">Forside</a>
							<a href="stemmeguide.html">Stemmeguide</a>
							<a class="selected" href="konkurrence-kommunalvalg.php">Konkurrence</a>
						</div>
				</nav>
			
		
	
	<div class="text-box">
		<h3>VIND VÆRDIFULDT</h3>
		<h1>GAVEKORT</h1>
		
		
		<div id="animation_container_gave">
			<canvas id="canvas"></canvas>
			<div id="dom_overlay_container">
			</div>
		</div>
		
		<div id="gave_img">
			<img src="img/gave-uden-gavekort.svg" alt="Gave - Gavekort til Netto - Kommunalvalg">
		</div>
		
					
	
	</div>





<!-- KONKURRENCE FORMULAR HERUNDER -->

<div class="formular">
<?php

	$cmd = filter_input(INPUT_POST, 'cmd');
	$name = filter_input(INPUT_POST, 'name');
	$email = filter_input(INPUT_POST, 'email');
	$answer = filter_input(INPUT_POST, 'answer');
	
	if(empty($cmd)) {
		
	
	
?>	

<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
	
		<label>Fulde navn:*</label>
		<br>
		<input id="name" type="text" name="name" placeholder="fx. Ole Biversen" required>
		<br><br>
		
		<label>E-mail:*</label>
		<br>
		<input id="email" type="email" name="email" placeholder="fx. ole@biversen.dk" data-validation="email">
		<br><br>
		<label>Hvor mange gange bliver der sagt "hvad" i videoen?:*</label>
		<p id="se_video">Se videoen her: </p>
		
		
		
		<a class="video-link" href="https://www.youtube.com/embed/CdKRyD0TLUw?ecver=1" data-width="1920" data-height="1080">
					
			
			<div class="player-button-container">
								
				<div class="player-button-middle">
					<i class="fa fa-play-circle-o player-button-text" aria-hidden="true"></i>
				</div>
				
			</div>
			
						
		</a>		
		
		 
		
		<br>
		<input id="answer" type="text" name="answer" placeholder="Tilføj dit svar her" required>
		<br><br>
		<input id="vote" type="submit" name="cmd" value="Deltag i konkurrencen">
		
		<p>Ved deltagelse i konkurrencen, accepterer du samtidig betingelserne som ses nedenfor.</p>	
		
		
		
	
	
</form>

<?php
	}
	
	else {
		if($cmd == 'Deltag i konkurrencen') {
			
			require_once('db_con.php');
			$sql = 'INSERT INTO competition (name, email, answer) VALUES (?, ?, ?)';
			$stmt = $con->prepare($sql);
			$stmt->bind_param('sss', $name, $email, $answer);
			$stmt->execute();
			
			if ($stmt->affected_rows > 0) {
		
			
				echo '<form style="height: 323px;">';
				

				echo '<h2 id="echoText1">Du er nu med i konkurrencen om et gavekort til Netto på 5.000 kr! 
				<br><br> </h2>';
				
				echo '<p id="echoText2"> Find nemt og hurtigt ud af hvem du skal stemme på til kommunalvalget på vores stemmeguide. <br>';
				
				echo '<div id="stemmeguide_btn_box">';
		
				echo '<a id="stemmeguide_btn" href="stemmeguide.html">STEMMEGUIDE</a>';
				
				echo '</div>';
				
				echo '</form>';
				
			}
			
				else { 
					
					echo '<form style="height: 323px;">';
					
					echo '<p id="emailCheat">Den indtastede email er allerede med i lodtrækningen om gavekortet til Netto. 
						
						<br><br>
						
							Husk det er kun tilladt at deltage en gang pr. email.
						</p>';
					
					echo '<button id="backTo" href="konkurrence-kommunalvalg.php">Tilbage til konkurrence</button>';
					
					echo '</form>';
					
					
					
				}	
			
			
		}
		
	
	}
	
?>
</div>


<div class="col-1-3 information1">
	
	<!-- Trophy icon by Dave Gandy - http://www.flaticon.com/free-icon/trophy_25251#term=trophy&page=1&position=10 -->
	<img src="img/trophy.svg" id="trophy" alt="Om Præmien - Kommunalvalg">
	<h1>Præmien</h1>
	<p>Vi udtrækker 1 heldig vinder af et gavekort på 5.000 kr. til Netto den 21. novemeber 2017, kl. 22:00.
	
	<br><br>
	
	Dette er ikke reklame for Netto, men er en konkurrence afholdt af Tv2 Regionerne. 
	</p>
	
	
</div>

<div class="col-1-3 information2">

	<!-- Badge icon by DinosoftLabs - http://www.flaticon.com/free-icon/badge_342253#term=medal&page=2&position=69 -->
	<img src="img/badge.svg" id="badge" alt="Om Konkurrencen - Kommunalvalg">
	<h1>Konkurrencen</h1>
	<p>Det er helt gratis at deltage i konkurrencen. Alt du skal gøre er: 
	<br>
	- Se vores video på Facebook.
	<br>
	- Like videoen.
	<br>
	- Udfyld ovenstående felter og tryk herefter "Deltag i konkurrencen".
	
	<br><br>
	Vinderen vil blive kontaktet på den oplyste e-mail og vil blive offentliggjort på vores Facebook side. 
	
	<br><br>
	Konkurrencen indeholder ingen former for tilmeldinger af nyhedsbreve eller lignende. 
	<br>
	Deadline for deltagelse er den 21 november 2017, kl. 21:00.
	</p>
	
</div>

<div class="col-1-3 information3">
	<!-- Badge icon by Dave Gandy - http://www.flaticon.com/free-icon/information-symbol_25365#term=info&page=1&position=28 -->
	<img src="img/info-symbol.svg" id="info" alt="Betingelser - Kommunalvalg">
	<h1>Betingelser</h1>
	<p>Det er kun muligt at deltage i konkurrencen én gang. Overtrædes dette på nogen måde, vil du få fratrukket muligheden for at være med i lodtrækningen om præmien.</p>
	
</div>

</div>

<!-- FOOTER HERUNDER -->

<footer>
		<div class="footer-social-icons">
			<h4 class="_14">Følg os på</h4>
			<ul class="social-icons">
				<li><a href="https://www.facebook.com/kommunalhvad.dk/" class="social-icon" target="_blank"> <i class="fa fa-facebook"></i></a></li>
				<li><a href="https://www.instagram.com/kommunalhvad/?hl=en" target="_blank" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
				<li><a href="https://www.youtube.com/watch?v=CdKRyD0TLUw" target="_blank" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
				<li><a href="mailto:kommunal@hvad.dk" class="social-icon"> <i class="fa fa-envelope-o"></i></a></li>
			</ul>
		</div>
	</footer>


	<!-- Forbindelse til JavaScript filen -->
	<script src="hamburger.js" type="text/javascript"></script>
	
	
	
	<!-- VIDEO LINK HERUNDER -->

<script>
	
	var $iframe = $('iframe'),
    $videoLink = $('.video-link'),
    playerTemplate = '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';


$videoLink.on('click', function(e) {
    var localTemplate = '',
        videoWidth = parseInt($(this).data('width')),
        videoHeight = parseInt($(this).data('height')),
        videoAspect = ( videoHeight / videoWidth ) * 100,
        // elements
        $player = null,
        $video = null,
        $close = null,
        $iframe = null;

    e.preventDefault();

    localTemplate = playerTemplate.replace('{{iframevideo}}', $(this).prop('href'));

    $player = $(localTemplate);

    $player
        .find('.video-filler')
        .css('padding-top', videoAspect + '%');

    $close = $player
        .find('.video-close')
        .on('click', function() {
            $(this).off().closest('.player').hide().remove();
        });

    $player.appendTo('body').addClass('js--show-video');
});

</script>



</body>
</html>
