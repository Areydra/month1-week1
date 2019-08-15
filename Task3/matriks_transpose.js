let matriks = [[1,2,3],[4,5,6],[7,8,9]]
let matriksTranspose = new Array(matriks.length)

for(let i = 0; i < matriks.length; i++){
    matriksTranspose[i] = new Array(matriks.length)
    for(let j = 0; j < matriks.length; j++){
        matriksTranspose[i][j] = matriks[j][i]
    }
}

console.log(matriksTranspose)