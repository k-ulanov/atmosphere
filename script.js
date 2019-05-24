
		FPS = 1;
		t= 1000/FPS;

		vh = document.documentElement.clientHeight;
		shize = 100;

		go = false;
		SPEED = 2;
		v1 = 2;
		v2 = 20;
		v3 = 100;
		v4 = 400;

		function move(obj,speed,pos,time) {
				
				if(pos < 0) pos = document.documentElement.clientWidth;
				obj.style.width = pos + "px";
				setTimeout(move,time,obj,speed,pos-speed,time);
		}

		function move_interval(obj,speed,pos,time) {
			setInterval(function() {
					pos -= speed;
					if(pos < 0) { 
						obj.style.transition = "none";
						pos = document.documentElement.clientWidth;
						obj.style.width = pos + "px";
					}		
					else {
						obj.style.transition = "width "+time+"ms linear";
						obj.style.width = Math.floor(pos) + "px";
					}
			},time);
		} 

		document.body.onload =readurl();
		//float_title(atmos_title,-100,3000000);
		
		function position() {
			H = document.documentElement.scrollHeight;
			h = window.pageYOffset || document.documentElement.scrollTop;
			vh = document.documentElement.clientHeight;
			y = H - h - vh/2;
			console.log('y',y,location.href.split('#')[0]);
			/*window.location = "#" + Math.round(y/10);*/
			history.replaceState(null, null, location.href.split('#')[0] + '#' + Math.round(y/10));

			
			float(mezo,mezo_fixed,50,85);
			float(termo,termo_fixed,84,690);
			float("",exo_fixed,690,190000);

			//float_title(atmos_title,-100,3000000);
			float_credit(des_title,120,180);
			//float_credit(art_title,220,280);
			//float_credit(school_title,410+vh/20,490+vh/20);
			float_credit(law_title,600+vh/20,670+vh/20);
			float_arrow(up,0,1);

			float_credit(t1,570);

			float_credit(t2,710);
			float_credit(t3,810);

			float_credit(t4,950,1096);
			float_credit(t5,1096,1242);
			float_credit(t6,1242,1300);

			float_credit(t7,1370); //пространство - вакуум

			float_credit(t9,1520,  2865); //про выживание в вакууме
			float_credit(t10,2865, 3950);
			float_credit(t11,4050, 5555);
			float_credit(t12,5555, 6900);
			float_credit(t13,6900, 8245);
			float_credit(t14,8245, 9590); //про радиацию
			float_credit(t15,9590, 10935);
			float_credit(t16,10935,12280);
			float_credit(t17,12280,13625);
			float_credit(t18,13625,14970);
		   float_credit(t182,14970,16315);
			float_credit(t19,16315,17660); 
			float_credit(t20,17660,19080);//закончили про космический мусор

			float_credit(t21,20250,22000);
			float_credit(t22,22000,24000);
			float_credit(t23,24000,25700);
			float_credit(t24,25700,27700);

			float_credit(t25,27800,30000);
			float_credit(t26,30000,32000);
			float_credit(t27,32000,34000);
			float_credit(t28,34000,35950);
			float_credit(t29,36060,38000);
			float_credit(t30,38000,40000);
			float_credit(t31,40000,42000);
			float_credit(t312,42000,44000);

			float_credit(t32,160000,176000); 
			float_credit(t33,180000,196000);
			float_credit(t34,200000,216000); 
			float_credit(t35,220000,236000);
			float_credit(t36,240000,256000);
			float_credit(t37,260000,276000);
			float_credit(t38,280000,296000);
			float_credit(t39,300000,316000);
			float_credit(t40,320000,336000);
			float_credit(t41,340000,356000);
			float_credit(t42,360000,376000);

			place_frame(info_slider);

			//console.log(y+" speed = "+SPEED);

				if(y>190800 && y<1600000) {
					if (SPEED != v3) {
						SPEED = v3;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
				}

				if(y>15200 && y <440000) {
					if (SPEED != v2) {
						SPEED = v2;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}

				}

				if(y>1600000) {
					if (SPEED != v4) {
						SPEED = v4;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
				}

				if((y<15750) 
					|| (y>2000*10-vh && y<2000*10+vh/2) //граница низких орбит
					|| (y>4000*10-vh && y<4000*10+vh/2) //пояс Ван Алена
					|| (y>6150*10-vh && y<6150*10+vh/2) //Астерод ТС26
					|| (y>17000*10-vh && y<17000*10+vh/2) //радиация
					|| (y>19140*10-vh && y<19140*10+vh/2) //глонасс
					|| (y>20200*10-vh && y<20200*10+vh/2) //глонасс
					|| (y>27743*10-vh && y<27743*10+vh/2) //дуэнде
					|| (y>35786*10-vh && y<35786*10+vh/2) //гсо
					|| (y>36021*10-vh && y<36021*10+vh/2) //захорон
					|| (y>3843360))  { //луна
					if (SPEED != v1) {
						SPEED = v1;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
				}

				if(h < 1) { //полная остановка около луны
					go = false;
					ap.classList.remove("autopilot_active");
						lets_stop();
				}


		}

		window.onresize = function () {info_resize();}

		function info_resize() {
			vh = document.documentElement.clientHeight;
			info_moon.style.bottom = log_height(H)+"px";


			place_frame_2(temp_gradient,100,2000);
			place_frame_2(termo_temp_gradient,1900,2000000);


			info_layers.innerHTML = "<div class=layer_line style='bottom:"+log_height(20*10)+"px'><span>Тропо</span></div>";
			info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(50*10)+"px'><span>Страто</span></div>";
			info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(85*10)+"px'><span>Мезо</span></div>";
			info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(690*10)+"px'><span>Термо</span></div>";
			info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(190000*10)+"px'><span>Экзо</span></div>";

			info_temp.innerHTML = "<div style='bottom:"+log_height(10*10)+"px'><span>+20°</span></div>";
			info_temp.innerHTML += "<div style='bottom:"+log_height(20*10)+"px'><span>−70°</span></div>";
			info_temp.innerHTML += "<div style='bottom:"+log_height(50*10)+"px'><span>−40°</span></div>";
			info_temp.innerHTML += "<div style='bottom:"+log_height(85*10)+"px'><span>−100°</span></div>";
			info_temp.innerHTML += "<div style='bottom:"+log_height(690*10)+"px'><span>2000°</span></div>";
			info_temp.innerHTML += "<div style='bottom:"+log_height(190000*10)+"px'><span>2000°</span></div>";


			info_obj.innerHTML = "";
			place_log_point(12,10);
			place_log_point(23,0);
			place_log_point(37,20);
			place_log_point(53,-14);
			place_log_point(76,-4);
			place_log_point(100,-18);
			place_log_point(107,20);
			place_log_point(112,0);
			place_log_point(188,-18);
			place_log_point(215,10);
			place_log_point(302,-5);
			place_log_point(358,-18);
			place_log_point(400,-2);
			place_log_point(415,20);
			place_log_point(569,0);
			place_log_point(939,-18);
			place_log_point(1372,0);
			place_log_point(1518,20);
			place_log_point(2000,0);
			place_log_point(4000,-18);
			place_log_point(6150,0);
			place_log_point(17000,20);
			place_log_point(19140,-15);
			place_log_point(20200,7);
			place_log_point(27743,0);
			place_log_point(35786,15);
			place_log_point(36021,-8);

			place_frame(info_slider);

			log_greed.innerHTML = "";
			for(pow = 1; pow < 6; pow++) {
				for (l = 1; l < 10; l++) {
					//console.log(l*Math.pow(10,pow));
					if (l == 1 || (pow == 5 && l == 4)) {
						place_line_2(log_greed,l*Math.pow(10,pow));
					}
					else place_line(log_greed,l*Math.pow(10,pow));
				}
			}

		}

		function place_log_point(height,left){
			info_obj.innerHTML += "<div onclick='fly_to("+(vh-log_height(height*10))+")' class=click_area style='left: "+left+"px; bottom: calc("+log_height(height*10)+"px - 9px)'><div class='log_point'></div></div>";
		}

		function readurl() {
			console.log('reading url');
			var url = decodeURIComponent(document.URL).split("#");
			console.log(url[1]);
			H = document.documentElement.scrollHeight;
			console.log(H);
			if(url.length*1 > 1) {
				y = url[1]*10;
				vh = document.documentElement.clientHeight;
				h = H - y - vh/2;

				console.log(h);
				window.scrollTo(0,h);
			}
			else {window.scrollTo(0,H);} //скролить в самый низ, если пустой якорь
			}
			
			window.addEventListener("scroll",position);

			info_resize();
/*
		function float(obj, obj_fix, min, max) {
			h_top = H - h;
			margin = 10;
			//console.log(h_top);
			if(h_top < min*10+60) { //ниже планки
				obj_fix.style.visibility = "hidden";
				obj_fix.style.opacity = "0";
				obj_fix.style.transition = "opacity 0.2s ease-out";
			}

			else if (h_top > max*10+margin) { //выше планки исчезает
				obj_fix.style.visibility = "hidden";
				obj_fix.style.transition = "none";
				obj_fix.style.opacity = "0";
				
				if(obj != "")obj.style.visibility = "visible";
			}

			else {
				if(obj != "")obj.style.visibility = "hidden";

				obj_fix.style.visibility = "visible";
				obj_fix.style.opacity = "1";
			}
		}*/
		
		function float(obj, sticky, min, max) {
			h_top = view_height("top");
			margin = 10;

			if(h_top > max*10+margin || h_top < min*10+60) {
				sticky.classList.remove("sticky_visible");
			}
			else {
				sticky.classList.add("sticky_visible");
			}

			if (h_top < max*10+margin) {
				if(obj!="")obj.classList.add("bdg_hidden");
				sticky.classList.add("sticky_lower");
			}
			else {
				if(obj!="")obj.classList.remove("bdg_hidden");
				sticky.classList.remove("sticky_lower");
			}

	}

		function float_credit(obj, min, max) {
			if(min*10 < y && y < max*10) {
				/*if(obj.classList.contains("credit_hidden")) {//класслист-ремув не срабатывает если этого стиля уже нет*/
					obj.classList.remove("credit_hidden");
				/*}*/
			}
			else {
				/*if(!obj.classList.contains("credit_hidden")) {*/
					obj.classList.add("credit_hidden");
				/*}*/
			}
		}

		function float_title(obj, min, max) {
			obj.classList.add("title_visible");
		}

		function float_arrow(obj, min, max) {
			(view_height("bot") < min*10 || view_height("bot") > max*10) ? obj.style.opacity = "0" : obj.style.opacity = "1"; 
			if(obj.style.opacity == 0) {
				obj.style.transition = "opacity 0.5s ease-in, visibility 0.5s step-end"; //visibility будет сохранять свойство до конца анимации
				obj.style.visibility = "hidden";
			}
			else {
				obj.style.transition = "opacity 2s ease-in 6s, visibility 1s step-start 6s"; //visibility сменит свойство в начале анимации
				obj.style.visibility = "visible";
			}
		}

		function log(x) {
			 return Math.log(x) / Math.log(10);
		}

		function log_height(height) {
			return  (vh-34) * log(height/shize) / log(H/shize);
			//return  vh * ((height/shize) / (H/shize));
		}

		function full_height(num) { //конвертирует логарфмическую высоту в высоту от низа экрана
			return Math.pow(10,(num*log(H/shize)/(vh-34)))*shize;
		}

		/*принимает объект
		делает ему нижний край как низ на схеме, верхний, как верх. через ботом и высоту*/
		function place_frame(obj) {
			obj.style.bottom = log_height(view_height("bot")) + "px";
			obj.style.top = vh - log_height(view_height("top")) + "px";
			//console.log(log_height(1000));
		}


		function place_frame_2(obj,bot,top) {
			//console.log(top+" "+bot);
			obj.style.bottom = log_height(bot) + "px";
			obj.style.top = vh - log_height(top) + "px";
		}


		function place_line(obj, height) {
			obj.innerHTML += "<div class=info_line style='bottom:"+log_height(height*10)+"px'></div>";

		}


		function place_line_2(obj, height) {
			var he = height + "";
			he = he.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&thinsp;')
			obj.innerHTML += "<div class=info_line style='bottom:"+log_height(height*10)+"px'><span>"+he+"</span></div>";

		}

		/*возвращает уровень экрана, по верху низу или центру*/
		function view_height(type) {
				H = document.documentElement.scrollHeight;
			    vh = document.documentElement.clientHeight;
			    h = window.pageYOffset || document.documentElement.scrollTop;

			switch (type) {
				case "top": return  H - h; break;
				case "mid": return  H - h - vh/2; break;
				case "bot": return  H - h - vh; break;
			}
		}



		function draw_info(Y) {
			//console.log(Y+" "+(vh-Y)+" "+full_height(vh-Y));

			var y = full_height(vh-Y);
			place_frame_2(info_hover,y-vh/2,y+vh/2);
		}

		function fly_to(Y) {
			//console.log(H-full_height(vh-Y)-vh/2);
			window.scrollTo(0,H-full_height(vh-Y)-vh/2);
		}


		var drag = false;

		infoscroll.onmousedown = function(event) {
			drag = true;
			fly_to(event.clientY);
			place_frame(info_slider);
		}

		infoscroll.onmouseup = function() {
			drag = false;
		}

		infoscroll.onmousemove = function(event) {
			draw_info(event.clientY);

			if(drag) {
				fly_to(event.clientY);
				place_frame(info_slider);
			}
		}

		infoscroll.onmouseover = function() {
			info_hover.style.display='block';
		}

		infoscroll.onmouseout = function() {
			info_hover.style.display='none';
		}

		function autopilot() {
			if(!go) {
				lets_go();
				go = !go;
			}
			else {
				lets_stop();
				go = !go;
			}
		}

		function change_gear() {
			ap_speed.innerHTML =  SPEED*10+" км/с";
			clearInterval(scroll);
			scroll = setInterval(function (){
				window.scrollBy(0,-1*SPEED); 
				}, 10);
		}

		function lets_go() {
			ap_speed.innerHTML =  SPEED*10+" км/с";
			ap.classList.add("autopilot_active");
			set_a_listenner();
			scroll = setInterval(function (){
					window.scrollBy(0,-1*SPEED); 
					}, 10);
		}

		function lets_stop() {
			clearInterval(scroll);
					ap.classList.remove("autopilot_active");
			ap_speed.innerHTML =  "";
			remove_a_listener();
		}

  		links = document.getElementsByTagName("a");

		function set_a_listenner() {
			for (var i = 0; i < links.length; i++) {
				var new_href = links[i].href;
				
				links[i].addEventListener("click", listen);
				//console.log(links[i], new_href);
			}
		}

		function listen(event) {
			event.preventDefault();
			lets_stop();
			console.log(event.target.href);
			setTimeout(function (href){
				window.location = href
				},20,event.target.href);
		}


		function remove_a_listener() {
			for (var i = 0; i < links.length; i++) {
				var new_href = links[i].href;
				
				links[i].removeEventListener("click", listen);
				//console.log(links[i], new_href);
			}
		}

 /*
		links = document.getElementsByTagName("a");

		 for (l = 0; l < links.length; l++) {
		 	links[l].addEventListener("click", function() {link(links[l].href);}, false);
		 	console.log(links[l].href);
		 }
		//document.getElementsByTagName("a").addEventListener("click", link, false);

		function link(href){
			lets_stop();
			console.log(href);
			setTimeout(function (){location.href=href},30);
		}*/
