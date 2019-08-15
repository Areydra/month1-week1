str = "nurs es run"
var re = /[\W_]/g; //mencari semua whitespace yg ada di dalam kalimat / kata
var lowRegStr = str.toLowerCase().replace(re, ''); //toLowerCase() membuat kalimat menjadi huruf kecil semua(agar sama baik kapital atau tidak).replace(re, '') = ubah whitespace dengan '' / tanpa space
var reverseStr = lowRegStr.split('').reverse().join(''); //split('') pisah kalimat menjadi perkata kedalam array.reverse('') urutkan dari indeks terakhir ke terdepan.join('') lalu jadikan satu/sebuah kalimat dari array   
console.log(reverseStr === lowRegStr); //jika hasil kalimat yg sudah dibalik sama dengan kalimat awal maka kembalikan nilai true dan sebaliknya

