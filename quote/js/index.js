function getQuote() {
	$.ajax({
		headers: {
			"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    	success: function(response) {
      		var r = JSON.parse(response);
      		$('.j-quote').html(r.quote);
      		$('.j-author').html('- ' + r.author);
			$('.j-twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + r.quote + '" ' + r.author));
			$('.j-tumblr').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(r.author)+'&content=' + encodeURIComponent(r.quote));
		}
  	});
}

$(function(){
	getQuote();
	$('.j-next').on('click', function() {
		getQuote();
	});
});