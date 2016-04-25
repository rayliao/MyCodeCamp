$(function(){
	var now = new Date();
	$('.j-date').html(new Date());
	$.getJSON('http://ipinfo.io', function(data){
		var loc = data.loc.split(',');
		$.ajax({
  			url: 'http://api.openweathermap.org/data/2.5/forecast?lat=' + loc[0] + '&lon=' + loc[1] +'&APPID=49bf450f5de5d3a0fe0be52bb321c4aa&units=metric',
  			success: function(data){
  				$('.j-city').html(data.city.name);
  				var i = 0;
  				while(now >= new Date(data.list[i].dt_txt)) {
  					i++;
  				}
  				$('.j-temp').html(data.list[i].main.temp);
  				console.log(data);
  			}
  		});
	});
});