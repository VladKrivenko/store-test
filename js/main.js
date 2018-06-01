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
		out += '<p class="cost">'+data[key].cost+'</div>';
		out +='<button class="add_to_cart">Buy</button>';
		out +='</div>';
	}
	$('.store_items').html(out);
}

$(document).ready(function(){
	init();
});