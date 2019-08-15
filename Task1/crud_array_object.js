let schoolList = [
    {
        schoolName: 'SMKN 1 Cibinong',
        location : 'Kec. Cibinong'
    },
    {
        schoolName : 'SMKN 1 Gunung Putri',
        location : 'Kec. Gunung Putri'
    },
    {
        schoolName : 'SMKN 1 Cileungsi',
        location : 'Kec. Cileungsi'
    }
]

//========= add array push ============
let newSchool = [
    {
        schoolName: 'SMK Al-Bahri',
        location: 'Kab. Bekasi'
    },
    {
        schoolName: 'SMKN 2 Bogor',
        location: 'Kab. Bogor'
    },
    {
        schoolName: 'SMKN 3 Bogor',
        location: 'Kab. Bogor'
    },
    {
        schoolName: 'SMKN 4 Bogor',
        location: 'Kab. Bogor'
    }
]
Array.prototype.push.apply(schoolList, newSchool)
//======================================

//========== remove array ==============
let schoolName = 'SMK Al-Bahri'
schoolList = schoolList.filter(function(obj){
    return obj.schoolName !== schoolName
})
//======================================

//========== update array ==============
let schoolNameUpdate = ''
let newSchoolName = ''
let newLocation = ''

if(schoolNameUpdate != ''){
    let res = schoolList.find(v => v.schoolName == schoolNameUpdate)
    
    if (newSchoolName != '') {
        res.schoolName = newSchoolName
    }else{
        console.log('Harus ada nama sekolah baru')
    }

    if (newLocation != '') {
        res.location = newLocation
    }
}
//======================================

let schools = schoolList.map(school => school)
console.log(schools)