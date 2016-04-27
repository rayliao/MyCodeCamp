$(function(){
	var now = moment().format('dddd, MMMM YYYY');
	$('.j-date').html(now);
	getWeather();

	$('.j-temp').on('click', function(){
		$(this).find('span').toggle();
	});
});

$('.j-list li').on('click', function(){
	
});

function getWeather(){
	$.getJSON('http://ipinfo.io', function(data){
		var loc = data.loc.split(',');
		$.ajax({
  			url: 'http://api.openweathermap.org/data/2.5/forecast?lat=' + loc[0] + '&lon=' + loc[1] +'&APPID=49bf450f5de5d3a0fe0be52bb321c4aa&units=metric',
  			success: function(data){
  				$('.j-city').html(data.city.name);
  				var index = 0;
  				for(var i = 0; i < data.list.length; i++) {
  					index = i;
  					if(moment().isBefore(data.list[i].dt_txt)) {
  						break;
  					}
  				}
          console.log(data);
  				var temp = data.list[index].main.temp;
  				var tempHtml = '<span>' + Math.round(temp) + '°c</span><span style="display: none;">' + Math.round((temp * 9)/5 + 32) + '°f</span>';
  				$('.j-temp').html(tempHtml);

  				var list = '';
				for(var j = 0; j < 5; j++) {
					list += '<li data-t="' + data.list[3+8*j].main.temp + '""><i class="icon icon-rainy"></i><p>' + moment().add(j, 'd').format('DD/MM') + '</p></li>';
				}
				$('.j-list').html(list);
  			}
  		});
	});
}

function setWeather(){

}