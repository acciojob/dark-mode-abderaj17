//your JS code here. If required.
window.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("theme") || 'light';
	document.body.classList.add(`${savedTheme}-mode`);
});

document.getElementById("toggle-theme").addEventListener("click", ()=>{
	if(document.body.classList.contains('dark-mode')){
		document.body.classList.replace('dark-mode', 'light-mode');
		localStorage.setItem('theme', 'ligth');
	}else{
		document.body.classList.replace('light-mode', 'dark-mode');
		localStorage.setItem('theme', 'dark');
	}
});