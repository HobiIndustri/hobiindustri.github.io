<script>
	 /*  Toggle between showing and hiding the   nav     igation menu links when the user clicks on the      hamburger menu icon */
        function myFunction() {
	 		var x = document.getElementById("myNavbar");
        if (x.className === "navbar") {
                x.className += " responsive";
			} else {
                x.className = "navbar";
			}
		}
</script>
