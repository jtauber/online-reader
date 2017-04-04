function frameContent0(file) {
	return '<iframe src="' + file + '.html" frameborder="0" width="100%" name="main" style="height: 350vh;">Oops! Your browser does not support this website.  Please update it and try again.</iframe>';
}

function frameContent1(module) {
	return '<iframe src="' + module + '/' + module + '.html" frameborder="0" width="100%" name="main" style="height: 350vh;">Oops! Your browser does not support this website.  Please update it and try again.</iframe>';
}

function frameContent2(module, bcv) {
    var bcv2 = bcv.split(".");
    var b = bcv2[0];
    var c = bcv2[1];
    var v = bcv2[2];
	return '<iframe src="' + module + '/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '" frameborder="0" width="100%" name="main" style="height: 350vh;">Oops! Your browser does not support this website.  Please update it and try again.</iframe>';
}

function verse(b, c, v) {
    return '<div class="tt1" onclick="">' + '<vno id="v' + v + '">' + v + '</vno>' + '<span class="tt2">' + '<a class="v" href="../bhs/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BHS</a><br>' + '<a class="v" href="../bhsl/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BHSl</a><br>' + '<a class="v" href="../bhsi/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BHSi</a><br>' + '<a class="v" href="../bhs_kjv/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BHS||KJV</a><br>' + '<a class="v" href="../bhs_wrv/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BHS||WRV</a>' + '</span></div>';
}

function chapter(b, c) {
    return '<cno id="c' + c + '">' + c + '</cno>';
}

/*
function chapter(b, c) {
    return '<div class="tt1" onclick="">' + '<cno id="c' + c + '">' + c + '</cno>' + '<span class="tt2">' + '<a class="v" href="../bhs/' + b + '_' + c + '.html">BHS</a><br>' + '<a class="v" href="../bhsl/' + b + '_' + c + '.html">BHSl</a><br>' + '<a class="v" href="../bhsi/' + b + '_' + c + '.html">BHSi</a><br>' + '<a class="v" href="../bhs_kjv/' + b + '_' + c + '.html">BHS||KJV</a><br>' + '<a class="v" href="../bhs_wrv/' + b + '_' + c + '.html">BHS||WRV</a>' + '</span></div>';
}
*/

function verse2(b, c, v) {
    return '<div class="tt1" onclick="">' + '<vno id="v' + v + '">' + v + '</vno>' + '<span class="tt2">' + '<a class="v" href="../nestle1904/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">N1904</a><br>' + '<a class="v" href="../nestle1904i/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">N1904i</a><br>' + '<a class="v" href="../bgb/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BGB</a><br>' + '<a class="v" href="../bgb_blb/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BGB||BLB</a><br>' + '<a class="v" href="../bib/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">BIB</a><br>' + '<a class="v" href="../sblgntc/' + b + '_' + c + '.html#v' + b + '.' + c + '.' + v + '">SBLGNTc</a>' + '</span></div>';
}

/*
function chapter2(b, c) {
    return '<div class="tt1" onclick="">' + '<cno id="c' + c + '">' + c + '</cno>' + '<span class="tt2">' + '<a class="v" href="../bhs/' + b + '_' + c + '.html">BHS</a><br>' + '<a class="v" href="../bhsl/' + b + '_' + c + '.html">BHSl</a><br>' + '<a class="v" href="../bhsi/' + b + '_' + c + '.html">BHSi</a><br>' + '<a class="v" href="../bhs_kjv/' + b + '_' + c + '.html">BHS||KJV</a><br>' + '<a class="v" href="../bhs_wrv/' + b + '_' + c + '.html">BHS||WRV</a>' + '</span></div>';
}
*/
