Clock = function() {
				this.canvas = false;
				this.pi = Math.PI;
			}

			Clock.prototype = {

				get_time: function() {
					var now = new Date();
					var result = {
						milliseconds: now.getMilliseconds(),
						seconds: now.getSeconds(),
						minutes: now.getMinutes(),
						hours: now.getHours()
					}
					return result;
				},

				init: function() {
					this.canvas = document.getElementById("clock").getContext("2d");
				},
	
				draw: function() {		
					var now = this.get_time();
					var hangle = (this.pi/6)*now.hours + (this.pi/360)*now.minutes + (this.pi/21600)*now.seconds + (this.pi/21600000)*now.milliseconds;
					var mangle = (this.pi/30)*now.minutes + (this.pi/1800)*now.seconds + (this.pi/1800000)*now.milliseconds;
					var sangle = (this.pi/30)*now.seconds + (this.pi/30000)*now.milliseconds;
		
					this.canvas.save();
					this.canvas.fillStyle = "#000";
					this.canvas.strokeStyle = "#000";
					this.canvas.clearRect(0,0,200,200);
					this.canvas.fillRect(0,0,200,200);
					this.canvas.translate(100,100);
					this.canvas.rotate(-this.pi/2);		
		
					this.canvas.save();
					this.canvas.rotate(hangle);
					this.canvas.lineWidth = 8;
					this.canvas.strokeStyle = "#ffffff";
					this.canvas.fillStyle = "#ffffff";
					this.canvas.lineCap = "round";
					this.canvas.beginPath();
					this.canvas.moveTo(-10,0);
					this.canvas.lineTo(50,0);
					this.canvas.stroke();
					this.canvas.restore();

					this.canvas.save();
					this.canvas.rotate(mangle);
					this.canvas.lineWidth = 4;
					this.canvas.strokeStyle = "#ffffff";
					this.canvas.lineCap = "square";
					this.canvas.beginPath();
					this.canvas.moveTo(-20,0);
					this.canvas.lineTo(75,0);
					this.canvas.stroke();
					this.canvas.restore();

					this.canvas.save();
					this.canvas.lineWidth = 2;
					this.canvas.strokeStyle = "#ffffff";
					this.canvas.fillStyle = "#333";
					this.canvas.beginPath();
					this.canvas.arc(0,0,8,0,this.pi*2,true);
					this.canvas.fill();
					this.canvas.stroke();
					this.canvas.restore();		
		
					this.canvas.save();
					this.canvas.rotate(sangle);
					this.canvas.lineWidth = 2;
					this.canvas.strokeStyle = "#ff0000";
					this.canvas.lineCap = "square";
					this.canvas.beginPath();
					this.canvas.moveTo(-30,0);
					this.canvas.lineTo(85,0);
					this.canvas.stroke();
					this.canvas.restore();		

					this.canvas.save();
					this.canvas.lineWidth = 6;
					this.canvas.fillStyle = "#ff0000";
					this.canvas.beginPath();
					this.canvas.arc(0,0,3,0,this.pi*2,true);
					this.canvas.fill();
					this.canvas.restore();
		
					this.canvas.save();
					this.canvas.lineWidth = 6;
					this.canvas.strokeStyle = "#ffffff";
					this.canvas.beginPath();
					this.canvas.arc(0,0,95,0,this.pi*2,true);
					this.canvas.stroke();
					this.canvas.restore();
		
					this.canvas.restore();
				}
		
			}

			window.onload = function() {
				var clock = new Clock();
				clock.init();
				window.setInterval(function() {
					clock.draw();
				}, 10);
			}