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


