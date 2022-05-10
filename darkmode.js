

function darkmode_init()
{
	let darkmodeSwitch = document.querySelector('.icon-theme');
	
	let darkmodeCookie = {
		set:function(key,value,time,path,secure=false)
		{
			let expires = new Date();
			expires.setTime(expires.getTime() + time);
			var path   = (typeof path !== 'undefined') ? pathValue = 'path=' + path + ';' : '';
			var secure = (secure) ? ';secure' : '';
			
			document.cookie = key + '=' + value + ';' + path + 'expires=' + expires.toUTCString() + secure;
		},
		get:function()
		{
			let keyValue = document.cookie.match('(^|;) ?darkmode=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		},
		remove:function()
		{
			document.cookie = 'darkmode=; Max-Age=0; path=/';
		}
	};
	
	var logo_theme = document.getElementById('icon-theme');
	var logo = document.getElementById('logo');
	
	if(darkmodeCookie.get() == 'true')
	{
		darkmodeSwitch.classList.add('active');
		document.body.classList.toggle('dark-theme');
		logo.src = "mathhub-logo1-white.png";
		logo_theme.src = '/sun-solid.png'
	}
	
	
	darkmodeSwitch.addEventListener('click', (event) => {
		event.preventDefault();
		event.target.classList.toggle('active');
		document.body.classList.toggle('dark-theme');
		
		if(document.body.classList.contains('dark-theme'))
		{
			logo.src = "mathhub-logo1-white.png";
			logo_theme.src = '/sun-solid.png'
			darkmodeCookie.set('darkmode','true',2628000000,'/',false);
			
		}
		else
		{
			logo.src = "mathhub-logo1.png";
			logo_theme.src = '/moon-solid.png'
			darkmodeCookie.remove();
		}
	});
}