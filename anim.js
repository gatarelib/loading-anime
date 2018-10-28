// JavaScript Document
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


        var radius = 6;
        var x = [];
        var y = [];
        var a = radius;
        var dt = 1;
        var r = [];
        var sx = canvas.width/2;
        var sy = canvas.height/2;

        var color = "black";

        x[1] = sx + a;
        x[2] = sx + 7*a;
        x[3] = sx + 13*a;
        x[4] = sx + a;

        for(j=1;j<5;j++) {
            y[j] = sy + a;
            r[j] = a;
        }
        r[4] = 0;
        var cy = y[3];
        var cx = x[3]+2*a;
        var TD = Math.sqrt(canvas.height/0.04);
        var t = 0;

        function loadAnim(){
            t += 1;
            if (t<(6*a*dt)){
                x[1] += dt;
                x[2] += dt;
                x[3] += 0;
                if (t>(4*a*dt)){
                    x[3] += dt;
                }} else if(t<(6*a*dt+TD)){
                   x[3] += dt;
                   y[3] = cy + 0.02*(x[3]-cx)*(x[3]-cx);
                  if (r[4]<radius && (t % 2)==0 ) {
                      r[4] += dt;
                  }

                }   else {
                    x[1] = sx + a;
                    x[2] = sx + 7*a;
                    x[3] = sx + 13*a;
                    x[4] = sx + a;
                    y[3] =  sy + a;
                    r[4] = 0;
                    t = 0;

                }

            ctx.clearRect(0,0,canvas.width,canvas.height);
            for (j=1;j<5;j++){
                ctx.fillStyle=color;
                ctx.beginPath();
                ctx.arc(x[j],y[j],r[j],0,Math.PI*2, true);
                ctx.closePath();
                ctx.fill();
            }

        }

        function resizeCanvas() {
				canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

				WIDTH = canvas.width;
				HEIGHT = canvas.height;

                setInterval(function(){
            loadAnim();
        },12);
			}
            resizeCanvas();
