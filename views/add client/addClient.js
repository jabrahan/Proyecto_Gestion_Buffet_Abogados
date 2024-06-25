const states = document.querySelector('#state');
const citys = document.querySelector('#city');
const form = document.querySelector('#form');
const firstName = document.querySelector('#grid-first-name')
const lastName = document.querySelector('#grid-last-name')
const phone = document.querySelector('#phone')
const gender = document.querySelector('#gender')
const language = document.querySelector('#language')
const direction = document.querySelector('#direction')
const email = document.querySelector('#email')
const state = document.querySelector('#state')
const city = document.querySelector('#city')
const zipCode = document.querySelector('#grid-zip')
const typeCase = document.querySelector('#type-of-case')
const statusCase = document.querySelector('#status-of-case')
const marketingSource = document.querySelector('#marketing-source')
const nameContact = document.querySelector('#name-of-contact')
const phoneContact = document.querySelector('#phone-of-contact')
const emailContact = document.querySelector('#email-of-contact')
const note = document.querySelector('#note')
const date = document.querySelector('#date')
const submit = document.querySelector('#submit')
const legalRepresentatives = document.querySelector('#legal-representatives')
import { createNotification } from "../components/notification.js";



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
        states.appendChild(options)
    });
}
getCountries()

states.addEventListener('change', async () => {
    const selectedState = states.value;

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
    citys.innerHTML = '';
    data.forEach(element => {
        const options = document.createElement('option');
        options.value = element.city_name
        options.text = element.city_name
        
        citys.appendChild(options)
    });
}

// Get genders from database


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


// Get languages from database


const getLanguages = async () => {
    try {
        const response = await axios.get('/api/languages/allLanguages')
        const data = response.data  
        console.log(data)
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


// Get typeofcases from database


const getTypeofcases = async () => {
    try {
        const response = await axios.get('/api/typeofcases/allTypeofcases')
        const data = response.data
        console.log(data)
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
        typeCase.appendChild(options)
    });
}   

getTypeofcases()


// Get status from database

const getStatus = async () => {
    try {
        const response = await axios.get('/api/status/allStatus')
        const data = response.data
        console.log(data)
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

// Get Marketing from database


const getMarketings = async () => {
    try {
        const response = await axios.get('/api/marketings/allMarketing')
        const data = response.data  
        console.log(data)
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


// Get Legals from database

const getLegalRepresentatives = async () => {
    try {
        const response = await axios.get('/api/users/allUsers/')
        const data = response.data
        console.log(data)
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
        legalRepresentatives.appendChild(options)
    });
}

getLegalRepresentatives()

// Add client




submit.addEventListener('click', async (e) => { 
     e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'))
    const client = {
        
                firstName: firstName.value,
                lastName: lastName.value,
                phone: phone.value,
                email: email.value,
                address: direction.value,
                state: state.value,
                city: city.value,
                zipCode: zipCode.value,
                gender: gender.value,
                language: language.value,
                typeOfCase: typeCase.value,
                status: statusCase.value,
                marketingSource: marketingSource.value,
                nameContact: nameContact.value,
                phoneContact: phoneContact.value,
                emailContact: emailContact.value,
                date: new Date(),
                notes: note.value,           
                legalRepresentative: legalRepresentatives.value,
                schaduleDate: date.value,
                userCreated: user.id
    }

   
    console.log(client)

    if (firstName.value === '') {
        createNotification('true', 'Please complete the required fields')
    }
    if (lastName.value === '') {
        createNotification('true', 'Please complete the required fields')
    }
    if (phone.value === '') {
        createNotification('true', 'Please complete the required fields')
    } 
    if (email.value === '') {
        createNotification('true', 'Please complete the required fields')
    } else {
        try {

            
            const response = await axios.post('/api/clients/addClient', client)
            console.log(response)
            if (response.status === 200) {
                createNotification('false', 'Client added successfully')
                form.reset()
                window.location.href = '/clients'
            
            }
        } catch (error) {
            console.log(error)
        }
    }
})