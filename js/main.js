function init(){
	$.getJSON("goods.json", goodsOut);
}

function goodsOut(data){
	console.log(data);
	var out='';
	for (var key in data) {
		out +='<div class="cart">';
		out +='<p class="name">'+data[key].name+'</p>';
		out += '<img src="img/'+data[key].img+'"alt="">';
		out += '<p class="cost">'+data[key].cost+'</p>';
		out +='<button class="add_to_cart">Buy</button>';
		out +='</div>';
	}
	$('.storeitems').html(out);
}

$(document).ready(function(){
	init();
});