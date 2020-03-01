
	
	
	//Slide 1 MENU
		function wrap() {
		
			var d = document.getElementById('wrap');
			d.style.width="100%";
			d.style.visibility="visible"
		}
					
		
		function open1() {
		
			var h = document.getElementById('main-header');
			var o = document.getElementById('open1');
			var w = document.getElementById('wrap');
			
			h.style.display="none";
			w.style.visibility="visible";
			o.style.width="100%";
			o.style.padding="5% 0% 5% 0%";
			o.style.setProperty("background-color", "#000033");
			o.style.setProperty("transition-duration", "1s");
			o.style.setProperty("-webkit-transition-duration", "1s");
			o.innerHTML="Timer goes here!";
		}


	
	
//Ultimate result Commander!
	var count = 0;	
		
	function iterate(){
		//Later add confirm button************
		if(count > 5) {
			alert("Victory! \n\n Your Score: " + count + "  splatted!" );
		}
		else{
			return false;
		}
	}
	
	
	
	
		
	
//Each function "jelly()" will iterate counter by 1 located in function "iterate()"!
	
	
	function jelly1() {
		
		var splat1 = document.getElementById('jelly1');
		var dead1 = document.getElementById('dead1');
		
		splat1.style.setProperty("animation", "jelly1 0s infinite");
		splat1.style.setProperty("-webkit-animation", "jelly1 0s infinite");
		splat1.style.display="none";
		dead1.innerHTML="<img src='splat.jpg' width='60' height='60'/>";
		count++;
	}
	
	
	function jelly2() {
		
		var splat2 = document.getElementById('jelly2');
		var dead2 = document.getElementById('dead2');
		
		splat2.style.setProperty("animation", "jelly2 0s infinite");
		splat2.style.setProperty("-webkit-animation", "jelly2 0s infinite");	
		splat2.style.display="none";
		dead2.innerHTML="<a href='#'><img src='splat.jpg' width='60' height='60'/>";
		count++;
	}
	
	var splat3;
	
	function jelly3() {
	
		var splat3 = document.getElementById('jelly3');
		
		splat3.style.setProperty("animation", "jelly3 0s infinite");
		splat3.style.setProperty("-webkit-animation", "jelly3 0s infinite");
		splat3.style.display="none";
		dead3.innerHTML="<a href='#'><img src='splat.jpg' width='60' height='60'/>";
		count++;
	}
	
	var splat4;
	
	function jelly4() {
		
		var splat4 = document.getElementById('jelly4');
		
		splat4.style.setProperty("animation", "jelly4 0s infinite");
		splat4.style.setProperty("-webkit-animation", "jelly4 0s infinite");
		splat4.style.display="none";
		dead4.innerHTML="<a href='#'><img src='splat.jpg' width='60' height='60'/>";
		count++;
	}
	
	var splat5;
	
	function jelly5() {

		var splat5 = document.getElementById('jelly5');
		
		splat5.style.setProperty("animation", "jelly5 0s infinite");
		splat5.style.setProperty("-webkit-animation", "jelly5 0s infinite");
		splat5.style.display="none";
		dead5.innerHTML="<a href='#'><img src='splat.jpg' width='60' height='60'/>";
		count++;
	}
	
	var splat6;
	
	function jelly6() {

		var splat6 = document.getElementById('jelly6');
		
		splat6.style.setProperty("animation", "jelly6 0s infinite");
		splat6.style.setProperty("-webkit-animation", "jelly6 0s infinite");
		splat6.style.display="none";
		dead6.innerHTML="<a href='#'><img src='splat.jpg' width='60' height='60'/>";
		count++;
	}

	
	
	
