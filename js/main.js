$(document).ready( function(){
		

		videojs("#example_video_1").ready(function(){
			var myPlayer = this;
			var isClicked = false;

			//Check for when the play button is clicked pause/play
			$('#playButton').click(function() {
				
				if(isClicked == false){
					isClicked = true;

					myPlayer.play();	
					myPlayer.show();
					
					$('#mainImage').hide();
				
				}else if(isClicked == true){
				
					isClicked = false;
					myPlayer.pause();
				
				}
			});
		
			//When the player ends do this stuff
			myPlayer.on("ended", function(){

				//hide the player
				myPlayer.hide();
				
				//show the poster	
				$('#mainImage').show();
				$('#coffee-cup').addClass('animated wobble');

				setTimeout(function() {
				      // after 3 seconds remove the animation class so it can be added again later.
				
				      $('#coffee-cup').removeClass('animated wobble');
				
				}, 3000);		
			});
		});

		$('#coffee-cup').click(function(){
			$(this).addClass('animated flipOutX').hide();
			$('#contact').show().addClass('animated flipInX');

		});

});

