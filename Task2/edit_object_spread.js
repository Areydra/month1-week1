let profiles = [
    {
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'Single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'Single',
        city: 'Jakarta'
    }
]

let name = 'Pratama'
profiles = profiles.map(profile => {
    let res = {...profile}

    if(name == 'Tatas' && res.name == 'Tatas'){
        res.city = 'Jakarta'
        res.status = 'Menikah'
    }else if(name == 'Pratama' && res.name == 'Pratama'){
        res.company = 'Arkademy',
        res.city = 'Jogja'
    }

    return res;
})

console.log(profiles)