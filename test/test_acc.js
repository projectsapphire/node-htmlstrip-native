var hs = require('../')

console.log('TEST accented characters normalization');
// Check normalization
var acc_from_norm = [ "Ä",  "Ö",  "Ü",  "ä",  "ö",  "ü",  "ß", 'À', 'Á', 'Â', 'Ã',  'Å', 'Ā', 'Ą', 'Ă', 'Æ', 'Ç', 'Ć', 'Č', 'Ĉ', 'Ċ', 'Ď', 'Đ', 'È', 'É', 'Ê', 'Ë', 'Ē', 'Ę', 'Ě', 'Ĕ', 'Ė', 'Ĝ', 'Ğ', 'Ġ', 'Ģ', 'Ĥ', 'Ħ', 'Ì', 'Í', 'Î', 'Ï', 'Ī', 'Ĩ', 'Ĭ', 'Į', 'İ', 'Ĳ', 'Ĵ', 'Ķ', 'Ł', 'Ľ', 'Ĺ', 'Ļ', 'Ŀ', 'Ñ', 'Ń', 'Ň', 'Ņ', 'Ŋ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ø', 'Ō', 'Ő', 'Ŏ', 'Œ', 'Ŕ', 'Ř', 'Ŗ', 'Ś', 'Š', 'Ş', 'Ŝ', 'Ș', 'Ť', 'Ţ', 'Ŧ', 'Ț', 'Ù', 'Ú', 'Û',  'Ū', 'Ů', 'Ű', 'Ŭ', 'Ũ', 'Ų', 'Ŵ', 'Ý', 'Ŷ', 'Ÿ', 'Ź', 'Ž', 'Ż', 'à', 'á', 'â', 'ã', 'å', 'ā', 'ą', 'ă', 'æ', 'ç', 'ć', 'č', 'ĉ', 'ċ', 'ď', 'đ', 'è', 'é', 'ê', 'ë', 'ē', 'ę', 'ě', 'ĕ', 'ė', 'ƒ', 'ĝ', 'ğ', 'ġ', 'ģ', 'ĥ', 'ħ', 'ì', 'í', 'î', 'ï', 'ī', 'ĩ', 'ĭ', 'į', 'ı', 'ĳ', 'ĵ', 'ķ', 'ĸ', 'ł', 'ľ', 'ĺ', 'ļ', 'ŀ', 'ñ', 'ń', 'ň', 'ņ', 'ŉ', 'ŋ', 'ò', 'ó', 'ô', 'õ', 'ø', 'ō', 'ő', 'ŏ', 'œ', 'ŕ', 'ř', 'ŗ', 'ś', 'š', 'ş', 'ŝ', 'ș', 'ť', 'ţ', 'ŧ', 'ț', 'ù', 'ú', 'û',  'ū', 'ů', 'ű', 'ŭ', 'ũ', 'ų', 'ŵ', 'ý', 'ÿ', 'ŷ', 'ž', 'ż', 'ź', 'Þ', 'þ', 'ſ', 'Ð', 'ð'];
var acc_to_norm   = [ "Ae", "Oe", "Ue", "ae", "oe", "ue", "ss", 'A', 'A', 'A', 'A',  'A', 'A', 'A', 'A', 'AE', 'C', 'C', 'C', 'C', 'C', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'G', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'J', 'K', 'L', 'L', 'L', 'L', 'L', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'E', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'U', 'U', 'U',  'U', 'U', 'U', 'U', 'U', 'U', 'W', 'Y', 'Y', 'Y', 'Z', 'Z', 'Z', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'e', 'c', 'c', 'c', 'c', 'c', 'd', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'f', 'g', 'g' ,'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'i', 'i', 'i','i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'l', 'l' ,'l' ,'n', 'n', 'n', 'n', 'n', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ,'o', 'e', 'r' ,'r' ,'r' ,'s', 's', 's' ,'s', 's', 't' ,'t' ,'t' ,'t' ,'u' ,'u', 'u' , 'u', 'u' ,'u' ,'u' ,'u' ,'u' ,'w', 'y', 'y', 'y', 'z', 'z', 'z', 'T', 't', 'f', 'D', 'd'];

var strings = {};

for(var i in acc_from_norm){
	strings[acc_from_norm[i]] = acc_to_norm[i];
}

for(var i in strings){
	var converted = hs.accented_chars_norm(i);
	var result = (strings[i] == converted);
	console.log(
		"'" + i + "' : '" + strings[i] + "' ? " + 
		"'" + strings[i] + "' == '" + converted + "' -> '" + 
		result + "'"
	);
	if(!result){
		console.log('FAIL!');
		process.exit(-1);
	}
}

console.log('TEST accented characters stripping');
// Check stripping
var acc_from_strip = [ 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Ā', 'Ą', 'Ă', 'Æ', 'Ç', 'Ć', 'Č', 'Ĉ', 'Ċ', 'Ď', 'Đ', 'È', 'É', 'Ê', 'Ë', 'Ē', 'Ę', 'Ě', 'Ĕ', 'Ė', 'Ĝ', 'Ğ', 'Ġ', 'Ģ', 'Ĥ', 'Ħ', 'Ì', 'Í', 'Î', 'Ï', 'Ī', 'Ĩ', 'Ĭ', 'Į', 'İ', 'Ĳ', 'Ĵ', 'Ķ', 'Ł', 'Ľ', 'Ĺ', 'Ļ', 'Ŀ', 'Ñ', 'Ń', 'Ň', 'Ņ', 'Ŋ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ō', 'Ő', 'Ŏ', 'Œ', 'Ŕ', 'Ř', 'Ŗ', 'Ś', 'Š', 'Ş', 'Ŝ', 'Ș', 'Ť', 'Ţ', 'Ŧ', 'Ț', 'Ù', 'Ú', 'Û', 'Ü', 'Ū', 'Ů', 'Ű', 'Ŭ', 'Ũ', 'Ų', 'Ŵ', 'Ý', 'Ŷ', 'Ÿ', 'Ź', 'Ž', 'Ż', 'à', 'á', 'â', 'ã', 'ä', 'å', 'ā', 'ą', 'ă', 'æ', 'ç', 'ć', 'č', 'ĉ', 'ċ', 'ď', 'đ', 'è', 'é', 'ê', 'ë', 'ē', 'ę', 'ě', 'ĕ', 'ė', 'ƒ', 'ĝ', 'ğ', 'ġ', 'ģ', 'ĥ', 'ħ', 'ì', 'í', 'î', 'ï', 'ī', 'ĩ', 'ĭ', 'į', 'ı', 'ĳ', 'ĵ', 'ķ', 'ĸ', 'ł', 'ľ', 'ĺ', 'ļ', 'ŀ', 'ñ', 'ń', 'ň', 'ņ', 'ŉ', 'ŋ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ō', 'ő', 'ŏ', 'œ', 'ŕ', 'ř', 'ŗ', 'ś', 'š', 'ş', 'ŝ', 'ș', 'ť', 'ţ', 'ŧ', 'ț', 'ù', 'ú', 'û', 'ü', 'ū', 'ů', 'ű', 'ŭ', 'ũ', 'ų', 'ŵ', 'ý', 'ÿ', 'ŷ', 'ž', 'ż', 'ź', 'Þ', 'þ', 'ß', 'ſ', 'Ð', 'ð'];
var acc_to_strip   = [ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'AE', 'C', 'C', 'C', 'C', 'C', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'G', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'J', 'K', 'L', 'L', 'L', 'L', 'L', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'E', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'U', 'W', 'Y', 'Y', 'Y', 'Z', 'Z', 'Z', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'e', 'c', 'c', 'c', 'c', 'c', 'd', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'f', 'g', 'g' ,'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'i', 'i', 'i','i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'l', 'l' ,'l' ,'n', 'n', 'n', 'n', 'n', 'n', 'o', 'o', 'o', 'o' ,'o', 'o', 'o', 'o' ,'o', 'e', 'r' ,'r' ,'r' ,'s', 's', 's' ,'s', 's', 't' ,'t' ,'t' ,'t' ,'u' ,'u', 'u' ,'u' ,'u', 'u' ,'u' ,'u' ,'u' ,'u' ,'w', 'y', 'y', 'y', 'z', 'z', 'z', 'T', 't', 'ss', 'f', 'D', 'd'];

strings = {};

for(var i in acc_from_strip){
	strings[acc_from_strip[i]] = acc_to_strip[i];
}

for(var i in strings){
	var converted = hs.accented_chars_strip(i);
	var result = (strings[i] == converted);
	console.log(
		"'" + i + "' : '" + strings[i] + "' ? " + 
		"'" + strings[i] + "' == '" + converted + "' -> '" + 
		result + "'"
	);
	if(!result){
		console.log('FAIL!');
		process.exit(-1);
	}
}
console.log('DONE');