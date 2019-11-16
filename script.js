'use strict';
let text = 'Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить на';
let domenUrl = text.replace(/htt(p|ps)\:\/\/(.*?).html/gi, '<a href="$&">$&</a>');
console.log(domenUrl);