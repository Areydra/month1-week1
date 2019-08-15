let number = [5,2,5,9,2,1,5,8,7,2]
// ============= MEAN ===============
let length = number.length
let total = 0

for(let i = 0; i < length; i++){
    total += number[i]
}

let mean = total/length
// ==================================


// ============ MEDIAN ==============
let getMiddle,median = 0
let getMiddleGenap = []

if(number.sort().length%2 == 0){
    getMiddle = number.length/2   
    getMiddleGenap.push(number[getMiddle])
    
    number.reverse()
    getMiddleGenap.push(number[getMiddle])
    
    median = (getMiddleGenap[0] + getMiddleGenap[1]) / 2
}else{
    getMiddle = number.length/2
    getMiddle = Math.floor(getMiddle)
    median = number[getMiddle]
}
// ==================================


// ============= MODUS ==============

    //membuat angka unique dari setiap yg dimasukan / menghapus duplikat
    let uniqueNumber = number.filter((value, index, self) => {
        return self.indexOf(value) === index;
    }).sort()
    // ==================================================================

    //membuat array baru dengan jumlah dari angka unique
    let array = new Array(uniqueNumber.length)
    //==================================================

    // Cek aja ini satu satu dengan console.log agar paham
    for (let i = 0; i < uniqueNumber.length; i++) {
        //membuat array baru(multidimensional) dengan jumlah 2 disetiap indeks sebelumnya(yg diatas)
        array[i] = new Array(2)
        //==========================================================================================

        //isi setiap indeks dengan angka dari angka unik(diatas) 
        for (let j = 0; j < 2; j++) {
            array[i][j] = uniqueNumber[i]
        }
        // =====================================================

        // menjadikan indeks 1 dengan angka 0 / bukan angka unik(diatas) tetapi indeks pertama masi terisi angka unik(diatas)
        array[i][1] = 0
        // ===========================================================================

        // mensortir ada berapa banyak angka yg sama dengan angka unik
        for (let k = 0; k < number.length; k++) {
            // jika ada angka unik yg sama dengan angka tidak unik(variabel number)
            if (uniqueNumber[i] === number[k]) {
                //maka setiap kali sama tambahkan satu kedalam indeks ke satu
                array[i][1] += 1
                //=======================
            }
            // ====================================================================
        }
        //===============================================================
    }
    // ===========================================

    //mencari angka dengan total muncul terbanyak
    let highest = new Array(array.length)

    for (let i = 0; i < array.length; i++) {
        highest[i] = array[i][1]
    }

    highest = Math.max(...highest)
    // ==========================================

    //menyamakan antara numberUnique dengan total mereka dari highest
    let modus = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][1] == highest) {
            modus.push(array[i][0])
        }
    }
    // ================================================================

// ==================================

console.log('Number = ' + number)
console.log('Mean = ' + mean)
console.log('Median = ' + median)
console.log('Modus = ' + modus.toString() + ', each appeared ' + highest + ' times')

// NOTE : Coba buat lagi yg bagian median