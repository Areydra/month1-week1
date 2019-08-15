let matA = [[3, 4],[1, 2]]
let matB = [[7, 5],[6, 4]]
let result = new Array(matA.length) //buat array dengan jumlah dari jumlah indeks matA

for (let i = 0; i < matA.length; i++) {
	result[i] = new Array(matA.length) //buat array multi dengan jumlah dari jumlah indeks matA 
	for (let j = 0; j < matA.length; j++) {
		result[i][j] = 0	//mengubah semua value array dari undefined menjadi angka 0, agar bisa diisi dengan angka lain
		for (let k = 0; k < matB.length; k++) {
			result[i][j] += matA[i][k] * matB[k][j] //mengisi angka dengan dijumlahkan dari perkalian matA dan matB
			// console.log(matA[i][k]+'.'+matB[k][j])
			// console.log(i+' | '+j+' | '+k)
			// console.log(result[0][0] = 1)
		}
	}
}
console.log(result)

// ==RUMUS==
// 0 | 0 | 0
// 0 | 0 | 1
// 0 | 1 | 0
// 0 | 1 | 1
// 1 | 0 | 0
// 1 | 0 | 1
// 1 | 1 | 0
// 1 | 1 | 1
// [[null, null], [null, null]]

// NOTE : Untuk mencari logikanya lihat didalam rumus diatas lalu console.log() untuk bagian yg penting