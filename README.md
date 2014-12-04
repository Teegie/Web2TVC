Web2TVC
=======

Welcome to the Web2TVCast Project, a challenge suggested by the BLU team.

I°)-->Installation & PhantomJS Documentation

This project needs a webserver that you'll have to install first.<br>
We used MAMP for OSX, you can also use WAMP for Windows users.<br>
You will need to brew PhantomJS, a Javascript Library.<br>

Here is the link to HomeBrew, it will help you for PhantomJS installation : http://brew.sh/<br>

So first, install HomeBrew with this line in your terminal:<br>
$> ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"<br>
You will need to update your HomeBrew with:<br>
$> brew doctor<br>

Then, you can easily install PhantomJS latest version with :<br>
$> brew install phantomjs<br>
Now your server will know what is phantomJS!<br>

Here is the link to the official PhantomJS documentation : http://phantomjs.org/<br>
<--°)


II°)-->How To Use Web 2 TV Cast?

When your server is ready, you can fork our project in it, by sliding the directory.<br>
Now, on your web browser, go to localhost:8888/Web2TVC/<br>
You will be redirected to our Index Page.<br>
That Page is more like a test page, you can try to add an URL of a desired website, change the dimensions of the final result<br>
and press "Tester"<br>
Your server will redirect you to a HTML page with just a picture of the desired website.<br>
<--°)


III°)-->How Does It Works?

Thanks to this page, you can now understand how our programm works. You need to call your server by giving him a HTTP request<br>
like : localhost:8888/Web2TVC/cast.php?url=http://raphaeljs.com/polar-clock.html<br>
This request will order the server to take a picture of the given website. This picture will be stocked in a picture library,<br>
and the server will redirect you to a totally new HTML page, containing the image.<br>
This page is only an image, it can be read by your ChromeCast ! :D<br>
<--°)


IV°)-->Can I Use It With A Dashboard Utility Tool?

Yes it's simple!<br>
If you use DashKiosk like us (http://dashkiosk.readthedocs.org/en/latest/), you just need to put this kind of URL <br>
in the URL field.<br>
----> localhost:8888/Web2TVC/cast.php?url=http://raphaeljs.com/polar-clock.html <------<br>
You can then add another link, another, and another, configure a timeout, and do everything you want!<br>
For example, 4 links with a 30 seconds timeout will take 2 minutes to slide on the 4 links.<br>
<--°)

In the name of Web 2 TV Cast Crew (Jean LE, Hassan AOUBID IAAZA, Adrien MONTEIRO & William LA PORTE) we'd like to thank you for<br>
your attention, and thank you for trusting W2TVC!<br>

