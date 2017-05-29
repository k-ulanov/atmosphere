
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

		readurl();

		window.onscroll = function position() {
			H = document.documentElement.scrollHeight;
			h = window.pageYOffset || document.documentElement.scrollTop;
			vh = document.documentElement.clientHeight;
			y = H - h - vh/2;

			window.location = "#" + Math.round(y/10);

			
			float(mezo,mezo_fixed,50,85);
			float(termo,termo_fixed,84,690);
			float("",exo_fixed,690,190000);

			float_title(atmos_title,-100,10);
			float_credit(des_title,120,180);
			float_credit(art_title,220,280);
			float_credit(school_title,410+vh/20,490+vh/20);
			float_credit(law_title,600+vh/20,670+vh/20);
			float_arrow(up,0,1);

			float_credit(t1,570);

			float_credit(t2,710);
			float_credit(t3,810);

			float_credit(t4,950,1000);
			float_credit(t5,1040,1160);
			float_credit(t6,1200,1300);

			float_credit(t7,1370); //пространство - вакуум

			float_credit(t9,1520,1600); //про выживание в вакууме
			float_credit(t10,1600,1690);
			float_credit(t11,1690,1810);
			float_credit(t12,1810,1910);
			float_credit(t13,1910,2000);

			float_credit(t14,2030,3000); 
			float_credit(t15,4500,5500);
			float_credit(t16,6250,12000);
			float_credit(t17,17100,17800);
			float_credit(t18,18100,18900);
			float_credit(t19,19200,20000); 
			float_credit(t20,20300,21100);

			float_credit(t21,169000,1780);
			float_credit(t22,181000,1890);
			float_credit(t23,191000,1980);
			float_credit(t24,152000,1580); 
			float_credit(t25,160000,1670);
			float_credit(t26,169000,1780);
			float_credit(t27,181000,1890);

			float_credit(t28,191000,1980);
			float_credit(t29,191000,1980);
			float_credit(t30,160000,1670);
			float_credit(t31,169000,1780);

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

				if(y<62000) {
					if (SPEED != v1) {
						SPEED = v1;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
				}
				if(y>20600 && y<210500) {
					if (SPEED != v2) {
						SPEED = v2;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
		
				}
				if(y>61500 && y<1600000) {
					if (SPEED != v3) {
						SPEED = v3;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
				}
				if((y>39500 && y<40500) || (y>60000 && y<62000) || (y>169400 && y<170600) || (y>190500 && y<192000) || (y>201500 && y<202500) || (y>276900 && y<278200) || (y>276900 && y<278200))  {
					if (SPEED != v1) {
						SPEED = v1;
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
				if(y>3843360) {
					if (SPEED != v1) {
						SPEED = v1;
						if(go) { 
						lets_stop();
						lets_go();
						}
					}
				}
				if(h < 1) {
					go = false;
					ap.classList.remove("autopilot_active");
						lets_stop();
				}
				console.log(go);


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
			var url = decodeURIComponent(document.URL).split("#");
			H = document.documentElement.scrollHeight;
			//console.log(H+" "+url.length);
			if(url.length*1 > 1) {
				y = url[1]*10;
				vh = document.documentElement.clientHeight;
				h = H - y - vh/2;

				//console.log(H+" "+h);
				window.scrollTo(0,h);
			}
			else {
				window.scrollTo(0,H);
			}
			}

			info_resize();

		function float(obj, obj_fix, min, max) {
			h_top = H - h;
			margin = 10;
			//console.log(h_top);
			if(h_top < min*10+60) {
				obj_fix.style.visibility = "hidden";
				obj_fix.style.opacity = "0";
				obj_fix.style.transition = "opacity 0.2s ease-out";
			}

			else if (h_top > max*10+margin) {
				obj_fix.style.visibility = "hidden";
				obj_fix.style.transition = "none";
				obj_fix.style.opacity = "0";
				
				if(obj != "")obj.style.visibility = "visible";
			}

			else {
				if(obj != "")obj.style.visibility = "hidden";

				obj_fix.style.visibility = "visible";
				obj_fix.style.opacity = "100";
			}
		}


		function float_credit(obj, min, max) {
			if(typeof max == 'undefined') {
				max = min + 90; 
			//console.log("obj = "+obj.id+" min = "+min+" max = "+max);
			}
			//console.log(h_top);
			(y < min*10 || y > max*10) ? obj.style.opacity = "0" : obj.style.opacity = "100"; 
			if(obj.style.opacity == 0) {
				obj.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s step-end"; //visibility будет сохранять свойство до конца анимации
				obj.style.visibility = "hidden";
			}
			else {
				obj.style.transition = "opacity 0.3s ease-in-out, visibility 0.3s step-start"; //visibility сменит свойство в начале анимации
				obj.style.visibility = "visible";
			}
		}

		function float_title(obj, min, max) {
	obj.style.opacity = 100;
		}

		function float_arrow(obj, min, max) {
			(view_height("bot") < min*10 || view_height("bot") > max*10) ? obj.style.opacity = "0" : obj.style.opacity = "100"; 
			if(obj.style.opacity == 0) {
				obj.style.transition = "opacity 0.5s ease-in, visibility 0.5s step-end"; //visibility будет сохранять свойство до конца анимации
				obj.style.visibility = "hidden";
			}
			else {
				obj.style.transition = "opacity 2s ease-in 10s, visibility 1s step-start 10s"; //visibility сменит свойство в начале анимации
				obj.style.visibility = "visible";
			}
		}

		function log(x) {
			 return Math.log(x) / Math.log(10);
		}

		/*принимает высоту
		отдаёт высоту относительно экрана
		для начала линейно, потом логарифмически*/
		function log_height(height) {
			return  (vh-34) * log(height/shize) / log(H/shize);
			//return  vh * ((height/shize) / (H/shize));
		}


		function full_height(num) {
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
			console.log(H-full_height(vh-Y)-vh/2);
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
			go = !go;
			if(go) {
				ap.classList.add("autopilot_active");
				lets_go();
			}
				else {
					ap.classList.remove("autopilot_active");
				 lets_stop();}
		}

		function lets_go() {
			ap_speed.innerHTML =  SPEED*100+" км/с";
			scroll = setInterval(function (){
					window.scrollBy(0,-1*SPEED); 
					console.log(go+" "+SPEED);}, 10);
		}

		function lets_stop() {
			clearInterval(scroll);
			ap_speed.innerHTML =  "";
		}

