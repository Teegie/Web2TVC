function tv(url, width, height, file)
{
	var page = require('webpage').create();
	page.open(url);
	page.viewportSize = {width: width, height: height}
	setInterval(function(){
		page.render("Libpictures/" + file + ".jpg");
		console.log("./" + file + ".jpg");
		phantom.exit();
	}, 5000);
}

var system = require('system');
var adress = system.args[1];
var file = adress.substring(adress.lastIndexOf("/") + 1);
var i = 0;
var j = 0;

while (adress[i])
{
	if (adress[i] == "?")
		++j;
	++i;
}

if (j > 0)
{
	var size = adress.substring(adress.indexOf("?", 0) + 1);
	var width = size.substring(0, size.indexOf("x", 0));
	var height =  size.substring(size.indexOf("x", 0) + 1);
	file = file.substring(0, file.lastIndexOf("?"));
	adress = adress.substring(0, adress.indexOf("?", 0));
}
else
{
	var width = 1280;
	var height = 720;
}

tv(adress, width, height, file);