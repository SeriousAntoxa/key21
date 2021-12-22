let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	
	let body = document.querySelector("body");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
		if (!body.classList.contains('_wait')) {
			
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		}
	});
};

function reply_click(id)
{
    document.getElementById(`${id}`).lastElementChild.classList.toggle('_vis');
}

let arrow = document.querySelector('.arrow');
	let thisLink = arrow.previousElementSibling;
	let subMenu = arrow.nextElementSibling;
	let thisArrow = arrow;
	thisLink.classList.add('parent')
arrow.addEventListener('click', function(){
	subMenu.classList.toggle('open');
	thisArrow.classList.toggle('active');
});
