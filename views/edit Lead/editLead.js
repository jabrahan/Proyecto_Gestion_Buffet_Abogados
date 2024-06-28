const urlA = window.location.href
const url = new URL(urlA)
const id = url.searchParams.get('id')
const lead = document.querySelector('#lead')
const createdLead = document.querySelector('#created')
const name = document.querySelector('#name')
const language = document.querySelector('#language')
const optionLanguage = document.querySelector('#optionLead')
const gender = document.querySelector('#gender')
const optionGender = document.querySelector('#genderLead')
const state = document.querySelector('#state')
const optionState = document.querySelector('#stateLead')
const city = document.querySelector('#city')
const optionCity = document.querySelector('#cityLead')
const zip = document.querySelector('#zip')
const addressL = document.querySelector('#address')
const emailL = document.querySelector('#email')
const phoneL = document.querySelector('#phone')
const lastNameL = document.querySelector('#lastName')
const typeOfCase = document.querySelector('#typeOfCase')
const leadCase = document.querySelector('#caseLead')
const statusCase = document.querySelector('#statusCase')
const statusLead = document.querySelector('#statusLead')
const marketingSource = document.querySelector('#marketingSource')
const marketingLead = document.querySelector('#marketingLead')
const legalRepresentatives = document.querySelector('#legalRepresentative')
const legalLead = document.querySelector('#legalLead')
const nameContactL = document.querySelector('#nameContact')
const phoneContactL = document.querySelector('#phoneContact')
const emailContactL = document.querySelector('#emailContact')
const dateL = document.querySelector('#date')
const update = document.querySelector('#update')
const cancel = document.querySelector('#cancel')




//console.log(id)

// Consult if lead exists

checkLead()


//addEventListener('DOMContentLoaded', checkLead)

async function checkLead() {

    try {
        const response = await axios.get('/api/clients/getClient', {
            params: {
                idd: id
            }
        })
        const data = response.data
       // console.log(data)
        if (data) {
         //   console.log(data)


            createLead(data)
        } else {
          //  createNotification(false, 'Lead not found')
            window.location.href = '/clients'
        }
    } catch (error) {
       // console.log(error)
        lead.innerHTML = 'Lead not found'
        lead.classList.add('text-red-600', 'font-bold', 'text-2xl', 'text-center', 'flex', 'justify-center', 'uppercase') 
        //window.location.href = '/clients' 
    }
}


async function createLead(data) {
    const userCreatedId = data.userCreated

    try {
        const response = await axios.get('/api/users/getUser', {
            params: {
                idd: userCreatedId
            }
        })
        const data = response.data
       // console.log(data)
        createdLead.innerHTML = `${data.name} ${data.lastName}`
    } catch (error) {
        console.log(error)  
    }

    const {firstName, lastName, email, phone, status, typeOfCase, _id, language, genderLead, state, city, marketingSource, legalRepresentative, date, nameContact, phoneContact, emailContact, address, zipCode} = data
    name.value = firstName
    optionLanguage.value = language
    if (language === undefined) {
        optionLanguage.text = ''
    } else {
        optionLanguage.text = language
    }
    optionGender.value = genderLead
    if (genderLead === undefined) {
        optionGender.text = ''
    } else {
        optionGender.text = genderLead
    }

    optionState.value = state
    if (state === undefined) {
        optionState.text = ''
    } else {
        optionState.text = state
    }
    optionCity.value = city
    if (city === undefined) {
        optionCity.text = ''
    } else {
        optionCity.text = city
    }
    caseLead.value = typeOfCase
    if (typeOfCase === undefined) {
        caseLead.text = ''
    } else {
        caseLead.text = typeOfCase
    }   

    statusLead.value = status
    if (status === undefined) {
        statusLead.text = ''
    } else {
        statusLead.text = status
    }   
    marketingLead.value = marketingSource
    if (marketingSource === undefined) {
        marketingLead.text = ''
    } else {
        marketingLead.text = marketingSource
    }   
    legalLead.value = legalRepresentative
    if (legalRepresentative === undefined) {
        legalLead.text = ''
    } else {
        legalLead.text = legalRepresentative
    }   
    lastNameL.value = lastName
    if (lastNameL === undefined) {
        lastNameL.text = ''
    } else {
        lastNameL.text = lastName
    }   
    emailL.value = email
    if (emailL === undefined) {
        emailLs.text = ''
    } else {
        emailL.text = email
    }   
    phoneL.value = phone
    if (phoneL === undefined) {
        phoneL.text = ''
    } else {
        phoneL.text = phone
    }   
    dateL.date = date
    if (dateL === undefined) {
        dateL.text = ''
    } else {
        dateL.text = date
    }
    nameContactL.value = nameContact
    if (nameContactL === undefined) {
        nameContactL.text = ''
    } else {
        nameContactL.text = nameContact
    }
    phoneContactL.value = phoneContact
    if (phoneContactL === undefined) {
        phoneContactL.text = ''
    } else {
        phoneContactL.text = phoneContact
    }
    emailContactL.value = emailContact
    if (emailContactL === undefined) {
        emailContactL.text = ''
    } else {    
        emailContactL.text = emailContact
    }
    addressL.value = address
    if (addressL === undefined) {
        addressL.text = ''
    } else {
        addressL.text = address
    }
    zip.value = zipCode
    if (zip === undefined) {
        zip.text = ''
    } else {
        zip.text = zipCode
    }


   
    
    
    
}

const getLanguages = async () => {
    try {
        const response = await axios.get('/api/languages/allLanguages')
        const data = response.data  
     //   console.log(data)
        createLanguages(data)
    } catch (error) {
        console.log(error)
    }
}

const createLanguages = (data) => {
    data.forEach(element => {
        const options = document.createElement('option')
        options.value = element.name
        options.text = element.name
        language.appendChild(options)
    });
}

getLanguages()

const getGenders = async () => {
    try {
        const response = await axios.get('/api/genders/allGenders')
        const data = response.data
        console.log(data)
        createGenders(data)
    } catch (error) {
        console.log(error)
    }
}

const createGenders = (data) => {
    data.forEach(element => {
        const options = document.createElement('option')
        options.value = element.name
        options.text = element.name
        gender.appendChild(options)
    });
}


getGenders()

// Getcountries with fetch API Country State City - Search REST API (FREMIUM for 1000 requests per month) 

const getCountries = async () => {
    
    const url = 'https://www.universal-tutorial.com/api/getaccesstoken';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'api-token': 'GnaPS7ncxDCZcHDbUEKCcyme6py1s8g9zDvoDVGv8RSGNdGQq0sgR-sSd7LRe232JdQ',
        'user-email': 'abrahanrivero063@gmail.com'
    }
};
const response = await fetch(url, options);
const result = await response.json();
//console.log(result.auth_token);


    const url2 = 'https://www.universal-tutorial.com/api/states/United States'; 

    const options2 = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Authorization": `Bearer ${result.auth_token}`
        }

    }

    const response2 = await fetch(url2, options2);
    const result2 = await response2.json();
    printCountries(result2);

}



const printCountries = (data) => {
    //console.log(data);
    data.forEach(element => {
        const options = document.createElement('option');
        options.text = element.state_name
        options.value = element.state_name
        state.appendChild(options)
    });
}
getCountries()

state.addEventListener('change', async () => {
    const selectedState = state.value;

    const url = 'https://www.universal-tutorial.com/api/getaccesstoken';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'api-token': 'GnaPS7ncxDCZcHDbUEKCcyme6py1s8g9zDvoDVGv8RSGNdGQq0sgR-sSd7LRe232JdQ',
        'user-email': 'abrahanrivero063@gmail.com'
    }
};
const response = await fetch(url, options);
const result = await response.json();
//console.log(result.auth_token);

    const url2 = `https://www.universal-tutorial.com/api/cities/${selectedState}`; 

    const options2 = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Authorization": `Bearer ${result.auth_token}`
        }

    }

    const response2 = await fetch(url2, options2);
    const result2 = await response2.json();
    //console.log(result2);
    printCitys(result2)
    
})

const printCitys = (data) => {
    city.innerHTML = '';
    data.forEach(element => {
        const options = document.createElement('option');
        options.value = element.city_name
        options.text = element.city_name
        
        city.appendChild(options)
    });
}



const getTypeofcases = async () => {
    try {
        const response = await axios.get('/api/typeofcases/allTypeofcases')
        const data = response.data
       // console.log(data)
        createTypeofcases(data)
    } catch (error) {
        console.log(error)
    }
}

const createTypeofcases = (data) => {
    data.forEach(element => {
        const options = document.createElement('option')
        options.value = element.name
        options.text = element.name
        typeOfCase.appendChild(options)
    });
}   

getTypeofcases()


const getStatus = async () => {
    try {
        const response = await axios.get('/api/status/allStatus')
        const data = response.data
     //   console.log(data)
        createStatus(data)
    } catch (error) {   
        console.log(error)
    }
}

const createStatus = (data) => {
    data.forEach(element => {
        const options = document.createElement('option')
        options.value = element.name
        options.text = element.name
        statusCase.appendChild(options)
    });
}       

getStatus()

const getMarketings = async () => {
    try {
        const response = await axios.get('/api/marketings/allMarketing')
        const data = response.data  
      //  console.log(data)
        createMarketings(data)
    } catch (error) {
        console.log(error)
    }
}

const createMarketings = (data) => {
    data.forEach(element => {
        const options = document.createElement('option')
        options.value = element.name
        options.text = element.name
        marketingSource.appendChild(options)
    });
}

getMarketings()


const getLegalRepresentatives = async () => {
    try {
        const response = await axios.get('/api/users/allUsers/')
        const data = response.data
     //   console.log(data)
        createLegalRepresentatives(data)
    } catch (error) {
        console.log(error)
    }
}

const createLegalRepresentatives = (data) => {
 const legal =   data.filter(element => {
        return element.role === 'Lawyer' 
    })
    legal.forEach(element => {
        const options = document.createElement('option')
        options.value = element.id
        options.text = element.name + ' ' + element.lastName
        legalRepresentative.appendChild(options)
    });
}

getLegalRepresentatives()

update.addEventListener('click', async (e) => {
    e.preventDefault()
    const leadUp = {
        firstName: name.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        language: language.value,
        gender: gender.value,
        state: state.value,
        city: city.value,
        zipCode: zip.value,
        typeOfCase: typeOfCase.value,
        status: statusCase.value,
        marketingSource: marketingSource.value,
        nameContact: nameContact.value,
        emailContact: emailContact.value,
        phoneContact: phoneContact.value,
        legalRepresentative: legalRepresentative.value,
        date: date.value,
        id: id

    }
    try {
        const response = await axios.put('/api/clients/updateOneClient', leadUp)
      //  console.log(response)
        window.location.href = '/clients'
        //cleanHTML(leadTable)
        //createLeadTable()
    } catch (error) {
        console.log(error)
    }

   // console.log(leadUp)
})

cancel.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '/clients'
})