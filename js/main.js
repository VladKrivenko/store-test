function init(){
	$.getJSON("goods.json", goodsOut);
}

function goodsOut(data){
	console.log(data);
}

init();