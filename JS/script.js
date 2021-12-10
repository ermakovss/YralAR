const pos_btn = document.querySelector('.pos_btn');
const info = document.querySelector('.model_info');
const pc_btn = document.getElementById('pc_btn');


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   	pc_btn.style.display = 'block';

	pos_btn.style.position = 'absolute';
	pos_btn.style.zIndex = '100';
	pos_btn.style.bottom = '-95%';
	pos_btn.style.left = '4rem';
	info.style.padding = '4.375rem 4.25rem 7.75rem 3.94rem';
}else{
	info.style.padding = '4.375rem 4.25rem 3.75rem 3.94rem';
}


pc_btn.addEventListener("click", function(){
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("На персональном компьютере/ноутбуке дополненная реальность не работает, пожалуйста, перейдите на сайт с мобильного устройства");
  	}
});




