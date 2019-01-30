var FBShare = function(element) {
    var permalink = element.getAttribute('attr-permalink')
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + permalink, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) {
        facebookWindow.focus();
    }
    return false;
}

var TwShare = function(element) {
    var permalink = element.getAttribute('attr-permalink')
    var twitterWindow = window.open('https://twitter.com/share?url=' + permalink, 'twitter-popup', 'height=350,width=600');
    if(twitterWindow.focus) {
        twitterWindow.focus();
    }
    return false;
}

var WAShare = function(element) {
    var permalink = element.getAttribute('attr-permalink')
    var url = 'whatsapp://send?text=';
    var text = 'Hey checa esto, puede que te interese: '+permalink;
    var encodedText = encodeURIComponent(text);
    window.location.href = url + encodedText;
    return false;
}

var GPShare = function(element) {
    var permalink = element.getAttribute('attr-permalink')
    var googlePlusWindow = window.open("https://plus.google.com/share?url='"+permalink+"'", 'google-plus-popup', 'height=350,width=600');
    if(googlePlusWindow.focus) {
        googlePlusWindow.focus();
    }
    return false;
}

var TeShare = function(element) {
    var permalink = element.getAttribute('attr-permalink')
    var url = 'tg://msg_url?url=';
    var text = 'Hey checa esto, puede que te interese: '+permalink;
    var encodedText = encodeURIComponent(text);
    window.location.href = url + encodedText;
    return false;
}
