let filterarray = [];
let galleryarray = [{
	id:1,
	name:"Apple iPhone 14 (128 GB) - Blue",
	src:"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
	desc:"price:<u>₹58,999</u>"
},
{
	id:2,
	name:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
	src:"https://m.media-amazon.com/images/I/81njZjDqc6L._SL1500_.jpg",
	desc:"price:<u>₹1,29,999</u>"
},
{
	id:3,
	name:"Samsung Galaxy Z Fold4 5G (Beige, 12GB RAM, 512GB Storage) with No Cost EMI/Additional Exchange Offers",
	src:"https://m.media-amazon.com/images/I/714QNdK8BWL._SL1500_.jpg",
	desc:"price<u>$35</u>"
},
{
	id:4,
	name:"OLEVS Watch for Men Diamond Business Dress",
	src:"https://m.media-amazon.com/images/I/71-fZXp77KL._SX679_.jpg",
	desc:"price<u> ₹2,805</u>"
},
{
	id:5,
	name:"Apple 2021 iPad Pro M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Silver (5th Generation)",
	src:"https://m.media-amazon.com/images/I/815KnP2wjDS._SL1500_.jpg",
	desc:"price:<u>₹79,900</u>"
},
{
	id:6,
	name:"Apple Watch Series 9 [GPS + Cellular 45mm] Smartwatch",
	src:"./image/apple-watch-series9.jpg",
	desc:"price:<u>₹75,900</u>"
},
{
	id:7,
	name:"Xiaomi Pad 6| Qualcomm Snapdragon 870| 144Hz",
	src:"https://m.media-amazon.com/images/I/71LRY1j6UHL._SL1500_.jpg",
	desc:"price:<u>₹28,999</u>"
},
{
	id:8,
	name:"Apple AirPods Pro (2nd Generation) ",
	src:"https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",
	desc:"price:<u>₹23,499</u>"
}
]
showgallery(galleryarray);
function showgallery(currarray){
	document.getElementById("card").innerText = "";
	for(var i=0;i<currarray.length;i++){
		document.getElementById("card").innerHTML +=`
		<div class="col-md-4 mt-3">
		<div class="card p-3 ps-5 pe-5">
		<h4 class="text-capitalize text-center">${currarray[i].name}</h4>
		<img src="${currarray[i].src}" width="100% height=320px"/>
		<p class="mt-2">${currarray[i].desc}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Buy">Buy</a></p>
		<button class="btn btn-primary w-100 mx-auto" style="color:blue;background-color:white;"><a href="Product.html" style="text-decoration:none;">View similar</a></button>
		
		</div>
		</div>`
	}
}


document.getElementById("myinput").addEventListener("keyup", function(){
	let text = document.getElementById("myinput").value;
	
	filterarray = galleryarray.filter(function(a){
		if(a.name.includes(text)){
			return a.name;

		}
	});
	if(this.value ==""){
		showgallery(galleryarray);
	}
	else{
		if(filterarray == ""){
			document.getElementById("para").style.display = 'block';
			document.getElementById("card").innerHTML = "";
		}
		else{
			showgallery(filterarray);
			document.getElementById("para").style.display = 'none';
		}
	}
})