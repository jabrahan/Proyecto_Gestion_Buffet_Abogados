const add = document.querySelector("#add"); 
const modalClose = document.querySelector('#modal_close');
const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');
// Selector for User table and Employee table
const userName = document.querySelector('#user-first-name');
const userLastName = document.querySelector('#user-last-name');
const userEmail = document.querySelector('#user-email');
const userPhone = document.querySelector('#user-phone');
const userStatus = document.querySelector('#status');
const userRole = document.querySelector('#user-role');
const userDirection = document.querySelector('#user-direction');
const userPassword = document.querySelector('#user-password');
const userConfirmPassword = document.querySelector('#repeat-password');
const userSave = document.querySelector('#save-user');
const formUser = document.querySelector('#form');
const closeUp = document.querySelector('.closeUp');
const closeDown = document.querySelector('.closeDown');
const emailCreate = document.querySelector('#emailCreated');
const userTable = document.querySelector('#usersTable');
const searchEmployee = document.querySelector('#search_employee');
const editUserTitle = document.querySelector('#editUserTitle'); 
import { createNotification } from "../components/notification.js";
import { createNotificationForm } from "../components/notification.js"; 
import { createDeleteNotification } from "../components/deleteNotification.js";






// Selector for Marketing table
const marketingTable = document.querySelector('#marketingTable');
const addMarketing = document.querySelector('#add-marketing');
const modal_overlay_marketing = document.querySelector('#modal_overlay_marketing');
const modal_marketing = document.querySelector('#modal_marketing');
const editMarketingTitle = document.querySelector('#editMarketingSource');
const closeDownModalMarketing = document.querySelector('#closeDown_marketing');
const closeUpModalMarketing = document.querySelector('#closeUp_marketing');
const marketingSource = document.querySelector('#marketing-source-name');
const saveMarketingSource = document.querySelector('#save-marketing');
const formMarketing = document.querySelector('#form_marketing');
const searchMarketing = document.querySelector('#search_marketing');


// Selector for Gender Table
const genderTable = document.querySelector('#genderTable');
const addGender = document.querySelector('#add-gender');
const modal_overlay_gender = document.querySelector('#modal_overlay_gender');
const modal_gender = document.querySelector('#modal_gender');
const editGenderTitle = document.querySelector('#editGenderTitle');
const closeDownModalGender = document.querySelector('#closeDown_gender');
const closeUpModalGender = document.querySelector('#closeUp_gender');
const gender = document.querySelector('#gender-name');
const saveGender = document.querySelector('#save-gender');
const formGender = document.querySelector('#form_gender');
const searchGender = document.querySelector('#search_gender');

// Selector for Language Table
const languageTable = document.querySelector('#languageTable');
const addLanguage = document.querySelector('#add-language');
const modal_overlay_language = document.querySelector('#modal_overlay_language');
const modal_language = document.querySelector('#modal_language');
const editLanguageTitle = document.querySelector('#editLanguageTitle');
const closeDownModalLanguage = document.querySelector('#closeDown_language');
const closeUpModalLanguage = document.querySelector('#closeUp_language');
const language = document.querySelector('#language-name');
const saveLanguage = document.querySelector('#save-language');
const formLanguage = document.querySelector('#form_language');
const searchLanguage = document.querySelector('#search_language');

// Selector for Type of Case Table
const typeOfCaseTable = document.querySelector('#typeOfCaseTable');
const addTypeOfCase = document.querySelector('#add-type-of-case');
const modal_overlay_type_of_case = document.querySelector('#modal_overlay_type_of_case');
const modal_type_of_case = document.querySelector('#modal_type_of_case');
const editTypeOfCaseTitle = document.querySelector('#editTypeOfCaseTitle');
const closeDownModalTypeOfCase = document.querySelector('#closeDown_type_of_case');
const closeUpModalTypeOfCase = document.querySelector('#closeUp_type_of_case');
const typeOfCase = document.querySelector('#type_of_case-name');
const saveTypeOfCase = document.querySelector('#save-type-of-case');
const formTypeOfCase = document.querySelector('#form_type_of_case');
const searchTypeOfCase = document.querySelector('#search_type_of_case');

// Selector for Status Table
const statusTable = document.querySelector('#statusTable');
const addStatus = document.querySelector('#add-status');
const modal_overlay_status = document.querySelector('#modal_overlay_status');
const modal_status = document.querySelector('#modal_status');
const editStatusTitle = document.querySelector('#editStatusTitle'); 
const closeDownModalStatus = document.querySelector('#closeDown_status');
const closeUpModalStatus = document.querySelector('#closeUp_status');
const status = document.querySelector('#status-name');
const saveStatus = document.querySelector('#save-status');
const formStatus = document.querySelector('#form_status');
const searchStatus = document.querySelector('#search_status');




// Clean HTML

function cleanHTML(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
   // element.innerHTML = ''
}

//add.addEventListener('click', openModal(true, 'create'));

add.onclick = () => {
    openModal(true, 'create')
}

addEventListener('DOMContentLoaded', () => {
    createUserTable(true);
    createMarketingTable(true);
    createGenderTable(true);
    createLanguageTable(true);
    createTypeOfCaseTable(true);
    createStatusTable(true);
})


// Users search
searchEmployee.addEventListener('input', () => {
    
    const searchValue = searchEmployee.value

    if (!searchValue) {
        //cleanHTML(userTable)
        createUserTable(true)
    } else {
       // cleanHTML(userTable)
        console.log(searchValue)
        createUserTable(false, searchValue);
    }
})

// Open and Close Modal
function openModal (value, option, id){
    
    if(option === 'edit'){
        editUserTitle.innerHTML = 'Edit User'
        userSave.innerHTML = `Update`
        userSave.onclick = () => {
            userEdit(id)
        }
    } else if(option === 'create'){
        editUserTitle.innerHTML = 'Create User'
        userSave.innerHTML = `Create`
        userSave.onclick = userCreate
    }

    //value.preventDefault();
    const modalCl = modal.classList
    const overlayCl = modal_overlay

    if(value){
    overlayCl.classList.remove('hidden')
    setTimeout(() => {
        modalCl.remove('opacity-0')
        modalCl.remove('-translate-y-full')
        modalCl.remove('scale-150')
    }, 100);
    } else {
    formUser.reset()
    userEmail.classList.remove('border-green-600')
    userEmail.classList.remove('border-red-600')
    userPassword.classList.remove('border-green-600')
    userConfirmPassword.classList.remove('border-green-600')
    emailCreate.innerHTML = ''
    modalCl.add('-translate-y-full')
    setTimeout(() => {
        modalCl.add('opacity-0')
        modalCl.add('scale-150')
    }, 100);
    setTimeout(() => overlayCl.classList.add('hidden'), 300);
    }
}

closeUp.addEventListener('click', () => {
    openModal(false)
})
closeDown.addEventListener('click', () => {
    openModal(false)
})


const emailValidate = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/


let validarPass = false
let validarEmail = false

function Validate(input, validate, rejex){
    if(input.value === ''){
        input.classList.remove('border-green-600')
        input.classList.remove('border-red-600')
    }

    validate = rejex.test(input.value)
    //console.log(validate)

    if(validate){
        input.classList.add('border-green-600')
        input.classList.remove('border-red-600')
    }else{
        input.classList.remove('border-green-600')
        input.classList.add('border-red-600')
    }
}

//Validation for user unique email
userEmail.addEventListener('input', async e => {
    Validate(e.target, validarEmail, emailValidate) 
    console.log(emailValidate.test(userEmail.value))
    if(emailValidate.test(userEmail.value)){
        
        try {
            const respuesta = await axios.get('/api/users/', 
                {
                    params: {
                        email: userEmail.value
                    }
                }
            )
            if (respuesta.status === 201) {
                userEmail.classList.add('border-green-600')
                emailCreate.innerHTML = 'Can be used'
                emailCreate.classList.add('text-green-600')
                emailCreate.classList.remove('text-red-600')
            } else {
                userEmail.classList.remove('border-green-600')
                userEmail.classList.add('border-red-600')
                emailCreate.innerHTML = 'Email already exists'
                emailCreate.classList.add('text-red-600')
                emailCreate.classList.remove('text-green-600')
            }
        } catch (error) {
           console.log(error)
        }
       
    } else {
        emailCreate.innerHTML = ''
        emailCreate.classList.remove('text-green-600')
        emailCreate.classList.remove('text-red-600')
    } 
})

userPassword.addEventListener('input', (e)=>{
    Validate(e.target, validarPass, passValidate)   
    if( userConfirmPassword.value === userPassword.value){
        userConfirmPassword.classList.add('border-green-600')
        userConfirmPassword.classList.remove('border-red-600')

    }else{
        userConfirmPassword.classList.remove('border-green-600')
        userConfirmPassword.classList.add('border-red-600')
    } 
})

userConfirmPassword.addEventListener('input', (e)=>{    
    if(e.target.value === userPassword.value){
        userConfirmPassword.classList.add('border-green-600')
        userConfirmPassword.classList.remove('border-red-600')
         userSave.classList.remove('cursor-not-allowed')
    }else{
        userConfirmPassword.classList.remove('border-green-600')
        userConfirmPassword.classList.add('border-red-600')
    }
})


//Create User on Table

async function userCreate(e) {
    const notiForm = document.querySelector('#notiForm')
    e.preventDefault()

    if(!userName.value || !userLastName.value || !userEmail.value || !userPhone.value || !userDirection.value || !userPassword.value || !userConfirmPassword.value){ 
        createNotificationForm(true, 'All fields must be completed', notiForm)
    } else if (userPassword.value !== userConfirmPassword.value) {
        createNotificationForm(true, 'Passwords do not match', notiForm)
    } else if (!emailValidate.test(userEmail.value)) {
        createNotificationForm(true, 'Please enter a valid email address', notiForm)
    } else if (!passValidate.test(userPassword.value)) {
        createNotificationForm(true, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number', notiForm)
    } else {
        
        const newUser = {
                userName: userName.value,
                userLastName: userLastName.value,
                userEmail: userEmail.value,
                userPhone: userPhone.value,
                userStatus: userStatus.value,
                userRole: userRole.value,
                userDirection: userDirection.value,
                userPassword: userPassword.value,
                userConfirmPassword: userConfirmPassword.value
            }

            //console.log(newUser)

        try { 
            //console.log(newUser)
            const respuesta = await axios.get('/api/users/', 
                {
                    params: {
                        email: userEmail.value
                    }
                }
            )


            if (respuesta.status === 201) {
                const response = await axios.post('/api/users/addUser', newUser) 

                            createNotification(false, "User created successfully")

                            openModal(false)

                            //cleanHTML(userTable)


                            if ( await response) {
                                setTimeout(() => {
                               createUserTable(true); 
                            }, 300)
                                
                            } 
                            
                             


            } else {
                createNotificationForm(true, 'User already exists', notiForm)
            }

        } catch (error) {
            console.log(error)
            
        }

    }

}

async function deleteUser(id) {
    
    console.log(id)
    const response = await axios.delete('/api/users/deleteUser', {
        params: {
            email: id
        }
    })
   // cleanHTML(userTable);
      createNotification(false, 'User deleted')
      createUserTable();


}

// Create User Table

async function createUserTable(us, userSearch) {
    //console.log(us)
    if(us === true) {
    try {
        const response = await axios.get('/api/users/allUsers')
        const data = response.data
        createUser(data)
    } catch (error) {
        console.log(error)
    } } else {
        try {
            const response = await axios.get(`/api/users/allUsers`)
            const data = response.data
            
            const resulte = data.filter(element => { 
                if(userSearch) {
                    return element.email.toLowerCase().includes(userSearch.toLowerCase()) || element.name.toLowerCase().includes(userSearch.toLowerCase()) || element.lastName.toLowerCase().includes(userSearch.toLowerCase())
                } return element
            })
            //cleanHTML(userTable)
            createUser(resulte)

        } catch (error) {
            console.log(error)
        }
    }

    
}


function createUser(array) {
    cleanHTML(userTable)
    array.forEach(element => {
        //console.log(element)
        const {email, status, role, name, id, lastName} = element

        const tr = document.createElement('tr')
        tr.classList.add('hover:bg-gray-50')
        const divName = document.createElement('div')
        divName.classList.add('font-medium', 'text-gray-700')
        const thName = document.createElement('th')
        thName.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-1', 'max-md:m-1')
        const divIMG = document.createElement('div')
        divIMG.classList.add('relative', 'h-10', 'w-10')
        const img = document.createElement('img')
        img.classList.add('h-full', 'w-full', 'rounded-full', 'object-cover', 'object-center')
        const spanIMG = document.createElement('span')
        spanIMG.classList.add('absolute', 'right-0', 'bottom-0', 'h-2', 'w-2', 'rounded-full', 'bg-green-400', 'ring', 'ring-white')
        const divInfo = document.createElement('div')
        divInfo.classList.add('text-sm')
        const divEmail = document.createElement('div')
        divEmail.classList.add('text-gray-400', 'max-sm:hidden')
        const thState = document.createElement('th')
        thState.classList.add('px-6', 'py-4', 'max-md:hidden')
        const state = document.createElement('span')
        const statePoint = document.createElement('span')

            if(element.status === 'active'){ 
                state.classList.add('inline-flex', 'items-center', 'gap-1', 'rounded-full', 'bg-green-50', 'px-2', 'py-1', 'text-xs', 'font-semibold', 'text-green-600')
                statePoint.classList.add('h-1.5', 'w-1.5', 'rounded-full', 'bg-green-600')
                state.appendChild(statePoint)
                state.innerHTML += 'Active'
            } else {
                state.classList.add('inline-flex', 'items-center', 'gap-1', 'rounded-full', 'bg-red-50', 'px-2', 'py-1', 'text-xs', 'font-semibold', 'text-red-600')
                statePoint.classList.add('h-1.5', 'w-1.5', 'rounded-full', 'bg-red-600')
                state.appendChild(statePoint)
                state.innerHTML += 'Inactive'
            }

        const thRole = document.createElement('th')
        thRole.classList.add('px-6', 'py-4', 'max-md:hidden')
        thRole.innerHTML = element.role


        const thEmail = document.createElement('th')
        thEmail.classList.add('px-6', 'py-4', 'max-lg:hidden')
        const spanEmail = document.createElement('span')
        spanEmail.classList.add('inline-flex', 'items-center', 'gap-1', 'rounded-full', 'bg-blue-50', 'px-2', 'py-1', 'text-xs', 'font-semibold', 'text-blue-600')
        spanEmail.innerHTML = element.email
        thEmail.appendChild(spanEmail)
        

        const thButtoms = document.createElement('th')
        thButtoms.classList.add('px-6', 'py-4', 'table-cell', 'justify-end','text-end' )


        const divButtoms = document.createElement('div')
        divButtoms.classList.add('flex', 'justify-end', 'gap-4')
        thButtoms.appendChild(divButtoms)

        const deleteBtn = document.createElement('button')
        deleteBtn.id = element.id
        deleteBtn.innerHTML = `<svg 
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        x-tooltip="tooltip"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
        </svg>`


        deleteBtn.onclick = async () => createDeleteNotification(deleteUser, email, true)

        thButtoms.appendChild(deleteBtn)


        const editBtn = document.createElement('button')
        editBtn.id = element.id
        editBtn.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        x-tooltip="tooltip"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
        </svg>`

        editBtn.onclick = async () => editUser(element.email , element.id)   

        thButtoms.appendChild(editBtn)

        divName.innerHTML = `${element.name} ${element.lastName}`
        //console.log(divName)
        divEmail.innerHTML = email

        divIMG.appendChild(img)
        divIMG.appendChild(spanIMG)
        divInfo.appendChild(divName)
        divInfo.appendChild(divEmail)
        thName.appendChild(divIMG)
        thName.appendChild(divInfo)
        thState.appendChild(state)

        tr.appendChild(thName)
        tr.appendChild(thState)
        tr.appendChild(thRole)
        tr.appendChild(thEmail)
        tr.appendChild(thButtoms)
         
        userTable.appendChild(tr);
    })
}


// Edit User

//Get user from DB
async function editUser( emailUser , id) {
     editUserTitle.innerHTML = `Edit User`
     userEmail.classList.add('border-green-600')
     userEmail.classList.remove('border-red-600')
     try {
        const response = await axios.get(`/api/users/`, {
            params: { email: emailUser }
        })
        const data = response.data
        console.log(data) 
        const { name, lastName, email, phone, status, role, direction, password, id } = data
        userName.value = name
        userLastName.value = lastName
        userEmail.value = email
        userPhone.value = phone
        userStatus.value = status
        userRole.value = role
        userDirection.value = direction
    
    } catch (error) {
            console.log(error)
        }
     openModal(true, 'edit', id)
}
//Edit user on DB
async function userEdit(idUser) {


    if(!userName.value || !userLastName.value || !userEmail.value || !userPhone.value || !userDirection.value || !userPassword.value || !userConfirmPassword.value){ 
        createNotificationForm(true, 'All fields must be completed')
    } else if (userPassword.value !== userConfirmPassword.value) {
        createNotificationForm(true, 'Passwords do not match')
    } /*else if (!emailValidate.test(userEmail.value)) {
        createNotificationForm(true, 'Please enter a valid email address')
    } */else if (!passValidate.test(userPassword.value)) {
        createNotificationForm(true, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number')
    } else {
    
    
    console.log(idUser)
    try {
        const response = await axios.put('/api/users/updateOneUser', {
            userName: userName.value,
            userLastName: userLastName.value,
            userEmail: userEmail.value,
            userPhone: userPhone.value,
            userStatus: userStatus.value,
            userRole: userRole.value,
            userDirection: userDirection.value,
            userPassword: userPassword.value,
            id: idUser
        })
        console.log(response)
       // cleanHTML(userTable)

         createUserTable()
        //closeModal()
        openModal(false)
        createNotification(false, "User updated successfully")

    } catch (error) {
        console.log(error)
    } }
}




// GRID FOR CLIENTS FORM SETTINGS


//Marketing Source
async function openModalMarketing(value, option, id) {
    //True or false
    //Create or Edit
    //ID for edit on DB

    if(option === 'create') {
        editMarketingSource.innerHTML = 'Create Marketing Source'
        saveMarketingSource.innerHTML = 'Save'
        saveMarketingSource.onclick =  saveMarketing
    } else if (option === 'edit') {
        editMarketingSource.innerHTML = 'Edit Marketing Source'
        saveMarketingSource.innerHTML = 'Update'
        saveMarketingSource.onclick = () => {
            updateMarketing(id)
        }
    }

        const modalCl = modal_marketing.classList
        const overlayCl = modal_overlay_marketing
    
        if(value){
        overlayCl.classList.remove('hidden')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
        } else {
        formMarketing.reset()
        modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
        }
}

addMarketing.onclick = () => {
    openModalMarketing(true, 'create')
}

closeUpModalMarketing.onclick = () => {
    openModalMarketing(false)
}

closeDownModalMarketing.onclick = () => {
    openModalMarketing(false)
}

// Save Marketing Source



async function createMarketingTable(valid, marketingSearch) {
    //cleanHTML(marketingTable)

    if(valid) {
        try {
        const response = await axios.get('/api/marketings/allMarketing')
        const data = response.data
        createMarketingItem(data)
} catch (error) {
    console.log(error)
} 
    } else { 
        try {
        const response = await axios.get('/api/marketings/allMarketing')
        const data = response.data

        //console.log(data)
        const result = data.filter(element => {
            return element.name.toLowerCase().includes(marketingSearch.toLowerCase())
        })
        //cleanHTML(marketingTable)
        createMarketingItem(result)
        } catch (error) {
            console.log(error)
        }

    }
    
}

async function saveMarketing () {

    const notiFormMarketing = document.querySelector('#notiFormMarketing')

    if(!marketingSource.value) {
        createNotificationForm(true, 'All fields must be completed', notiFormMarketing)
        console.log(notiFormMarketing)
    } else {

        const marketing = {
            marketingSou: marketingSource.value,
            date: new Date()
        }



        try {

            const response = await axios.get('/api/marketings/', {
                params: { name: marketing.marketingSou }
            })
            console.log(response.status)

            if (response.status === 200) {
              createNotificationForm(true, 'Marketing Source already exists', notiFormMarketing)
            } else {

            const response = await axios.post('/api/marketings/addMarketing', marketing)
            console.log(response)
            
             if ( await response) {
                setTimeout(() => {
                    createMarketingTable(true)
                }, 300)

                
            } 
            
            openModalMarketing(false)
            createNotification(false, "Marketing Source added successfully")
            //cleanHTML(marketingTable)
            
            }
        
        
        } catch (error) {
            console.log(error)  
        }
     //createMarketingTable(true) 
    }
    
}


async function deleteMarketing(id) {

    const response = await axios.delete('/api/marketings/deleteMarketing', {
        params: { id }
    })
    console.log(response)
    //cleanHTML(marketingTable)
    createNotification(false, "Marketing Source deleted successfully")
    createMarketingTable(true)
}

function createMarketingItem(array) {

    cleanHTML(marketingTable)

    array.forEach(element => {

        const { _id, name, date } = element 
        const tr = document.createElement('tr')
        tr.classList.add('hover:bg-gray-50')
        const tdName = document.createElement('th')
        tdName.classList.add( 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'm-5', 'md:m-0')
        const tdDate = document.createElement('th')
        tdDate.classList.add('px-6', 'py-4', 'max-md:hidden')
        const tdDelete = document.createElement('th')
        tdDelete.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'text-end', 'justify-end', 'm-5', 'md:m-0')
        const btnDelete = document.createElement('button')
        btnDelete.id = _id
        btnDelete.innerHTML = `<svg 
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        x-tooltip="tooltip"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
        </svg>`

        btnDelete.onclick = async () => createDeleteNotification(deleteMarketing, _id, true)

        const btnEdit = document.createElement('button')
        btnEdit.id = _id
        btnEdit.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
        x-tooltip="tooltip"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
        </svg>`

        btnEdit.onclick = async () => editMarketing(name , _id)    

        tdName.innerHTML = name
        tdDate.innerHTML = date
   

        tr.appendChild(tdName)
        tr.appendChild(tdDate)
        tr.appendChild(tdDelete)
        tdDelete.appendChild(btnDelete)
        tdDelete.appendChild(btnEdit)
        marketingTable.appendChild(tr)
    })
    
}

async function editMarketing(value, id) {
    editMarketingTitle.innerHTML = 'Edit Marketing Source'

    try {
        const response = await axios.get(`/api/marketings/`, { params: { name: value } })
        const { name } = response.data
        console.log(name)
        marketingSource.value = name
    } catch (error) {
        console.log(error)
    }

    openModalMarketing(true, 'edit', id)
}

 async function updateMarketing(id) {
    const notiFormMarketing = document.querySelector('#notiFormMarketing')
    if (!marketingSource.value) {
       await createNotificationForm(true, 'Please enter a marketing source', notiFormMarketing)
    } else {
        const date = new Date()
       try {
        const response = await axios.put(`/api/marketings/updateMarketing/`, { name: marketingSource.value, date: date, _id: id })
        console.log(response)
        openModalMarketing(false)
        //cleanHTML(marketingTable)
        createMarketingTable(true)
        createNotification(false, 'Marketing source updated')
       } catch (error) {
        console.log(error)
       }
    }
}

searchMarketing.addEventListener('keyup', (e) => {
    e.preventDefault()
    const search = searchMarketing.value

    if (!search) {
        //cleanHTML(marketingTable)
        createMarketingTable(true)
    } else {
     //cleanHTML(marketingTable)
     createMarketingTable(false, search)
    }
})



// Gender Table

async function openModalGender(value, option, id) {
    if(option === 'edit') {
        editGenderTitle.innerHTML = 'Edit Gender'
        saveGender.innerHTML = 'Update'
        saveGender.onclick = () => updateGender(id)
    } else if (option === 'create'){
        editGenderTitle.innerHTML = 'Create Gender'
        saveGender.innerHTML = 'Save'
        saveGender.onclick = createGender

    }

    const modalCl = modal_gender.classList
        const overlayCl = modal_overlay_gender
    
        if(value){
        overlayCl.classList.remove('hidden')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
        } else {
        formMarketing.reset()
        modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
        }
}


addGender.addEventListener('click', () => {
    openModalGender(true, 'create')
})

closeUpModalGender.addEventListener('click', () => {
    openModalGender(false)
})

closeDownModalGender.addEventListener('click', () => {
    openModalGender(false)
})


async function createGender() {
    const notiFormGender = document.querySelector('#notiFormGender')
    if (!gender.value) {
       createNotificationForm(true, 'Please enter a gender', notiFormGender)
    } else {
        const genderObj = {
            name: gender.value,
            date: new Date()
        }
        try{
        const response = await axios.get('/api/genders/', {
            params: { name: genderObj.name }
        })
        console.log(response.status)

        if (response.status === 200) {
            createNotificationForm(true, 'Gender already exists', notiFormGender)
        } else {

            try {
            const response = await axios.post('/api/genders/addGender', genderObj)
            console.log(response)

            openModalGender(false)
            createNotification(false, 'Gender created')


            if ( await response) {
                setTimeout(() => {
                    createGenderTable(true)
                }, 300)

                
            } 


            //cleanHTML(genderTable)
            
            formGender.reset()
        } catch (error) {
            console.log(error)
        }

        } } catch (error) {
            console.log(error)
        }

    }
}

async function createGenderTable(valid, genderSearch) {
    if(valid) {
        try {
            const response = await axios.get('/api/genders/allGenders')
            const data = response.data

            createGenderItem(data)

        }catch (error) {
            console.log(error)
        }
    } else {
        try {
            const response = await axios.get('/api/genders/allGenders')
            const data = response.data

            const result = data.filter((gender) => {
                return gender.name.toLowerCase().includes(genderSearch.toLowerCase())
            })
            createGenderItem(result)
        } catch (error) {
            console.log(error)
        }
    }

}

async function deleteGender(id) {
    try {
        const response = await axios.delete('/api/genders/deleteGender', {
            params: { id }
        })
        console.log(response)
        createNotification(false, 'Gender deleted')
        //cleanHTML(genderTable)
        createGenderTable(true)
    } catch (error) {
        console.log(error)
    }
}

function createGenderItem(array) {
    cleanHTML(genderTable)
    array.forEach((element) => {
       const {_id, name, date} = element

       const tr = document.createElement('tr')
       tr.classList.add('hover:bg-gray-50')
       const tdName = document.createElement('th')
       tdName.classList.add( 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'm-5', 'md:m-0')
       const tdDate = document.createElement('th')
       tdDate.classList.add('max-md:hidden', 'px-6', 'py-4')
       const tdDelete = document.createElement('th')
       tdDelete.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'text-end', 'justify-end', 'm-5', 'md:m-0')
       const btnDelete = document.createElement('button')
       btnDelete.id = _id
       btnDelete.innerHTML = `<svg 
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
       />
       </svg>`

       btnDelete.onclick = async () => createDeleteNotification(deleteGender, _id, true)

       const btnEdit = document.createElement('button')
       btnEdit.id = _id
       btnEdit.innerHTML = `<svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
       />
       </svg>`

       btnEdit.onclick = async () => editGender(name , _id)    

       tdName.innerHTML = name
       tdDate.innerHTML = date
  

       tr.appendChild(tdName)
       tr.appendChild(tdDate)
       tr.appendChild(tdDelete)
       tdDelete.appendChild(btnDelete)
       tdDelete.appendChild(btnEdit)
       genderTable.appendChild(tr)
    })

}

async function editGender(value, id) {
    editGenderTitle.innerHTML = 'Edit Gender'
    
    try {
        const response = await axios.get(`/api/genders/`, {
            params: {
                name: value
            }
        })

        const {name} = response.data
        gender.value = name

        openModalGender(true, 'edit', id)

    } catch (error) {
        console.log(error)
    }
}

async function updateGender(id) {
    const notiFormGender = document.querySelector('#notiFormGender')

    if(!gender.value) {
        await createNotificationForm(true, 'Gender is required', notiFormGender)
    } else {
        const date = new Date()

        try {
            const response = await axios.put(`/api/genders/updateGender/`, { name: gender.value, date: date, _id: id })
            console.log(response)
            openModalGender(false)
            createGenderTable(true)
            createNotification(false, 'Gender updated successfully')
            formGender.reset()
        } catch (error) {
            console.log(error)
        }
    }
}

searchGender.addEventListener('keyup', (e) => {
    e.preventDefault()
    const search = searchGender.value

    if (!search) {
        //cleanHTML(marketingTable)
        createGenderTable(true)
    } else {
     //cleanHTML(marketingTable)
     createGenderTable(false, search)
    }
})

// Language Table
async function openModalLanguage(value, option, id) {
    if(option === 'edit') {
        editLanguageTitle.innerHTML = 'Edit Language'
        saveLanguage.innerHTML = 'Update'
        saveLanguage.onclick = () => updateLanguage(id)
    } else if (option === 'create'){
        editLanguageTitle.innerHTML = 'Create Language'
        saveLanguage.innerHTML = 'Save'
        saveLanguage.onclick =  createLanguage

    }

    const modalCl = modal_language.classList
        const overlayCl = modal_overlay_language
    
        if(value){
        overlayCl.classList.remove('hidden')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
        } else {
        formMarketing.reset()
        modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
        }
}

addLanguage.onclick = () => openModalLanguage(true, 'create')

closeUpModalLanguage.onclick = () => openModalLanguage(false)

closeDownModalLanguage.onclick = () => openModalLanguage(false)

async function createLanguage() {
    const notiFormLanguage = document.querySelector('#notiFormLanguage')
    if (!language.value) {
       createNotificationForm(true, 'Please enter a gender', notiFormLanguage)
    } else {
        const languageObj = {
            name: language.value,
            date: new Date()
        }
        try{
        const response = await axios.get('/api/languages/', {
            params: { name: languageObj.name }
        })
        console.log(response.status)

        if (response.status === 200) {
            createNotificationForm(true, 'Language already exists', notiFormLanguage)
        } else {

            try {
            const response = await axios.post('/api/languages/addLanguage', languageObj)
            console.log(response)
            openModalLanguage(false)
            createNotification(false, 'Language created')
            //cleanHTML(genderTable)
            

            if ( await response) {
                setTimeout(() => {
                    createLanguageTable(true)
                }, 300)

                
            } 



            formLanguage.reset()
        } catch (error) {
            console.log(error)
        }

        } } catch (error) {
            console.log(error)
        }

    }
}

async function createLanguageTable(valid, languageSearch) {
    if(valid) {
        try {
            const response = await axios.get('/api/languages/allLanguages')
            const data = response.data

            createLanguageItem(data)

        }catch (error) {
            console.log(error)
        }
    } else {
        try {
            const response = await axios.get('/api/languages/allLanguages')
            const data = response.data

            const result = data.filter((gender) => {
                return gender.name.toLowerCase().includes(languageSearch.toLowerCase())
            })
            createLanguageItem(result)
        } catch (error) {
            console.log(error)
        }
    }

}

async function deleteLanguage(id) {
    try {
        const response = await axios.delete('/api/languages/deleteLanguage', {
            params: { id }
        })
        console.log(response)
        createNotification(false, 'Language deleted')
        //cleanHTML(genderTable)
        createLanguageTable(true)
    } catch (error) {
        console.log(error)
    }
}

function createLanguageItem(array) {
    cleanHTML(languageTable)
    array.forEach((element) => {
       const {_id, name, date} = element

       const tr = document.createElement('tr')
       tr.classList.add('hover:bg-gray-50')
       const tdName = document.createElement('th')
       tdName.classList.add( 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'm-5', 'md:m-0')
       const tdDate = document.createElement('th')
       tdDate.classList.add('max-md:hidden', 'px-6', 'py-4')
       const tdDelete = document.createElement('th')
       tdDelete.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'text-end', 'justify-end', 'm-5', 'md:m-0')
       const btnDelete = document.createElement('button')
       btnDelete.id = _id
       btnDelete.innerHTML = `<svg 
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
       />
       </svg>`

       btnDelete.onclick = async () => createDeleteNotification(deleteLanguage, _id, true)

       const btnEdit = document.createElement('button')
       btnEdit.id = _id
       btnEdit.innerHTML = `<svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
       />
       </svg>`

       btnEdit.onclick = async () => editLanguage(name , _id)    

       tdName.innerHTML = name
       tdDate.innerHTML = date
  

       tr.appendChild(tdName)
       tr.appendChild(tdDate)
       tr.appendChild(tdDelete)
       tdDelete.appendChild(btnDelete)
       tdDelete.appendChild(btnEdit)
       languageTable.appendChild(tr)
    })

}

async function editLanguage(value, id) {
    editLanguageTitle.innerHTML = 'Edit Language'
    
    try {
        const response = await axios.get(`/api/languages/`, {
            params: {
                name: value
            }
        })

        const {name} = response.data
        language.value = name

        openModalLanguage(true, 'edit', id)

    } catch (error) {
        console.log(error)
    }
}

async function updateLanguage(id) {
    const notiFormLanguage = document.querySelector('#notiFormLanguage')

    if(!language.value) {
         createNotificationForm(true, 'Language is required', notiFormLanguage)
    } else {
        const date = new Date()

        try {
            const response = await axios.put(`/api/languages/updateLanguage/`, { name: language.value, date: date, _id: id })
            console.log(response)
            openModalLanguage(false)
            createLanguageTable(true)
         createNotification(false, 'Language updated successfully')
            formLanguage.reset()
        } catch (error) {
            console.log(error)
        }
    }

}

searchLanguage.addEventListener('keyup', async (e) => {
    e.preventDefault()
    const search = searchLanguage.value
    console.log(search)
    if(!search) {
        createLanguageTable(true)
    } else {
        createLanguageTable(false, search)
    }
})
 
// Type of Case Table 

async function openModalTypeOfCase(value, option, id) {
    if(option === 'edit') {
        editTypeOfCaseTitle.innerHTML = 'Edit Type of Case'
        saveTypeOfCase.innerHTML = 'Update'
        saveTypeOfCase.onclick = () => updateTypeOfCase(id)
    } else if (option === 'create'){
        editTypeOfCaseTitle.innerHTML = 'Create Type of Case'
        saveTypeOfCase.innerHTML = 'Save'
        saveTypeOfCase.onclick = createTypeOfCase

    }

    const modalCl = modal_type_of_case.classList
        const overlayCl = modal_overlay_type_of_case
    
        if(value){
        overlayCl.classList.remove('hidden')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
        } else {
        formMarketing.reset()
        modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
        }
}

addTypeOfCase.onclick = () => openModalTypeOfCase(true, 'create')

closeDownModalTypeOfCase.onclick = () => openModalTypeOfCase(false) 

closeUpModalTypeOfCase.onclick = () => openModalTypeOfCase(false)   

async function createTypeOfCase() {
    const notiFormTypeOfCase = document.querySelector('#notiFormTypeOfCase')
    if (!typeOfCase.value) {
       createNotificationForm(true, 'Please enter a Type of Case', notiFormTypeOfCase)
    } else {
        const typeOfCaseObj = {
            name: typeOfCase.value,
            date: new Date()
        }
        try{
        const response = await axios.get('/api/typeofcases/', {
            params: { name: typeOfCaseObj.name }
        })
        console.log(response.status)

        if (response.status === 200) {
            createNotificationForm(true, 'Type of Case already exists', notiFormTypeOfCase)
        } else {

            try {
            const response = await axios.post('/api/typeofcases/addTypeOfCase', typeOfCaseObj)
            console.log(response)
            openModalTypeOfCase(false)
            createNotificationForm(false, 'Type of Case created', notiFormTypeOfCase)

            if ( await response) {
                setTimeout(() => {
                    createTypeOfCaseTable(true)
                }, 300)

                
            } 
            //cleanHTML(genderTable)
            
            formTypeOfCase.reset()
        } catch (error) {
            console.log(error)
        }

        } } catch (error) {
            console.log(error)
        }
    createTypeOfCaseTable(true)
    }
}

async function createTypeOfCaseTable(valid, typeOfCaseSearch) {
    
    if(valid) {
        try {
            const response = await axios.get('/api/typeofcases/allTypeOfCases')
            const data = response.data

            createTypeOfCaseItem(data)

        }catch (error) {
            console.log(error)
        }
    } else {
        try {
            const response = await axios.get('/api/typeofcases/allTypeOfCases')
            const data = response.data

            const result = data.filter((element) => {
                return element.name.toLowerCase().includes(typeOfCaseSearch.toLowerCase())
            })
            createTypeOfCaseItem(result)
        } catch (error) {
            console.log(error)
        }
    }
}

async function deleteTypeOfCase(id) {
    try {
        const response = await axios.delete('/api/typeofcases/deleteTypeOfCase', {
            params: { id }
        })
        console.log(response)
        createNotification(false, 'Type of Case deleted')
        //cleanHTML(genderTable)
        createTypeOfCaseTable(true)
    } catch (error) {
        console.log(error)
    }
}

function createTypeOfCaseItem(array) {
    cleanHTML(typeOfCaseTable)
    array.forEach((element) => {
       const {_id, name, date} = element

       const tr = document.createElement('tr')
       tr.classList.add('hover:bg-gray-50')
       const tdName = document.createElement('th')
       tdName.classList.add( 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'm-5', 'md:m-0')
       const tdDate = document.createElement('th')
       tdDate.classList.add('max-md:hidden', 'px-6', 'py-4')
       const tdDelete = document.createElement('th')
       tdDelete.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'text-end', 'justify-end', 'm-5', 'md:m-0')
       const btnDelete = document.createElement('button')
       btnDelete.id = _id
       btnDelete.innerHTML = `<svg 
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
       />
       </svg>`

       btnDelete.onclick = async () => createDeleteNotification(deleteTypeOfCase, _id, true)

       const btnEdit = document.createElement('button')
       btnEdit.id = _id
       btnEdit.innerHTML = `<svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
       />
       </svg>`

       btnEdit.onclick = async () => editTypeOfCase(name , _id)    

       tdName.innerHTML = name
       tdDate.innerHTML = date
  

       tr.appendChild(tdName)
       tr.appendChild(tdDate)
       tr.appendChild(tdDelete)
       tdDelete.appendChild(btnDelete)
       tdDelete.appendChild(btnEdit)
       typeOfCaseTable.appendChild(tr)
    })
}

async function editTypeOfCase(value, id) { 
    editTypeOfCaseTitle.innerHTML = 'Edit Type of Case'
    
    try {
        const response = await axios.get(`/api/typeofcases/`, {
            params: {
                name: value
            }
        })

        const {name} = response.data
        typeOfCase.value = name

        openModalTypeOfCase(true, 'edit', id)

    } catch (error) {
        console.log(error)
    }
}

async function updateTypeOfCase(id) {
    const notiFormTypeOfCase = document.querySelector('#notiFormTypeOfCase')

    if(!typeOfCase.value) {
         createNotificationForm(true, 'Type of Case is required', notiFormTypeOfCase)
    } else {
        const date = new Date()

        try {
            const response = await axios.put(`/api/typeofcases/updateTypeOfCase/`, { name: typeOfCase.value, date: date, _id: id })
            console.log(response)
            openModalTypeOfCase(false)
            createTypeOfCaseTable(true)
         createNotification(false, 'Type of Case updated successfully')
            formTypeOfCase.reset()
        } catch (error) {
            console.log(error)
        }
    }
}

searchTypeOfCase.addEventListener('keyup', async (e) => {
    e.preventDefault()
    const search = searchTypeOfCase.value
    if(!search) {
        createTypeOfCaseTable(true)
    } else {
        createTypeOfCaseTable(false, search)
    }
})

// Status Case Table

async function openModalStatusOfCase(value, option, id) {
    if(option === 'edit') {
        editStatusTitle.innerHTML = 'Edit Status of Case'
        saveStatus.innerHTML = 'Update'
        saveStatus.onclick = () => updateStatus(id)
    } else if (option === 'create'){
        editStatusTitle.innerHTML = 'Create Status of Case'
        saveStatus.innerHTML = 'Save'
        saveStatus.onclick = createStatusOfCase

    }

    const modalCl = modal_status.classList
        const overlayCl = modal_overlay_status
    
        if(value){
        overlayCl.classList.remove('hidden')
        setTimeout(() => {
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
        }, 100);
        } else {
        formMarketing.reset()
        modalCl.add('-translate-y-full')
        setTimeout(() => {
            modalCl.add('opacity-0')
            modalCl.add('scale-150')
        }, 100);
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
        }
}

addStatus.addEventListener('click', () => openModalStatusOfCase(true, 'create'))

closeDownModalStatus.addEventListener('click', () => openModalStatusOfCase(false))

closeUpModalStatus.addEventListener('click', () => openModalStatusOfCase(false))

async function createStatusOfCase() {
    const notiFormStatus = document.querySelector('#notiFormStatusOfCase')
    if (!status.value) {
       createNotificationForm(true, 'Please enter a Status', notiFormStatus)
    } else {
        const statusObj = {
            name: status.value,
            date: new Date()
        }
        try{
        const response = await axios.get('/api/status/', {
            params: { name: statusObj.name }
        })
        console.log(response.status)

        if (response.status === 200) {
            createNotificationForm(true, 'Status already exists', notiFormStatus)
        } else {

            try {
            const response = await axios.post('/api/status/addStatus', statusObj)
            console.log(response)
            openModalStatusOfCase(false)
            createNotificationForm(false, 'Status created', notiFormStatus)
  
            if ( await response) {
                setTimeout(() => {
                   createStatusTable(true)
                }, 300)         
            } 
                    
            //cleanHTML(genderTable)
            
            formStatus.reset()
        } catch (error) {
            console.log(error)
        }

        } } catch (error) {
            console.log(error)
        }

    }
}

async function createStatusTable(valid, statusSearch) {
    if(valid) {
        try {
            const response = await axios.get('/api/status/allStatus')
            const data = response.data

            createStatusItem(data)

        }catch (error) {
            console.log(error)
        }
    } else {
        try {
            const response = await axios.get('/api/status/allStatus')
            const data = response.data

            const result = data.filter((element) => {
                return element.name.toLowerCase().includes(statusSearch.toLowerCase())
            })
            createStatusItem(result)
        } catch (error) {
            console.log(error)
        }
    }
}

async function deleteStatus(id) {
    try {
        const response = await axios.delete('/api/status/deleteStatus', {
            params: { id }
        })
        console.log(response)
        createNotification(false, 'Status deleted')
        //cleanHTML(genderTable)
        createStatusTable(true)
    } catch (error) {
        console.log(error)
    }
}

function createStatusItem(array) {
    cleanHTML(statusTable)
    array.forEach((element) => {
       const {_id, name, date} = element

       const tr = document.createElement('tr')
       tr.classList.add('hover:bg-gray-50')
       const tdName = document.createElement('th')
       tdName.classList.add( 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'm-5', 'md:m-0')
       const tdDate = document.createElement('th')
       tdDate.classList.add('max-md:hidden', 'px-6', 'py-4')
       const tdDelete = document.createElement('th')
       tdDelete.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'text-end', 'justify-end', 'm-5', 'md:m-0')
       const btnDelete = document.createElement('button')
       btnDelete.id = _id
       btnDelete.innerHTML = `<svg 
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
       />
       </svg>`

       btnDelete.onclick = async () => createDeleteNotification(deleteStatus, _id, true)

       const btnEdit = document.createElement('button')
       btnEdit.id = _id
       btnEdit.innerHTML = `<svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke-width="1.5"
       stroke="currentColor"
       class="h-6 w-6"
       x-tooltip="tooltip"
       >
       <path
           stroke-linecap="round"
           stroke-linejoin="round"
           d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
       />
       </svg>`

       btnEdit.onclick = async () => editStatus(name , _id)    

       tdName.innerHTML = name
       tdDate.innerHTML = date
  

       tr.appendChild(tdName)
       tr.appendChild(tdDate)
       tr.appendChild(tdDelete)
       tdDelete.appendChild(btnDelete)
       tdDelete.appendChild(btnEdit)
       statusTable.appendChild(tr)
    })
}

async function editStatus(value, id) {
    editStatusTitle.innerHTML = 'Edit Status'
    
    try {
        const response = await axios.get(`/api/status/`, {
            params: {
                name: value
            }
        })

        const {name} = response.data
        status.value = name

        openModalStatusOfCase(true, 'edit', id)

    } catch (error) {
        console.log(error)
    }
}

async function updateStatus(id) {
    const notiFormStatus = document.querySelector('#notiFormStatus')

    if(!status.value) {
         createNotificationForm(true, 'Status is required', notiFormStatus)
    } else {
        const date = new Date()

        try {
            const response = await axios.put(`/api/status/updateStatus/`, { name: status.value, date: date, _id: id })
            console.log(response)
            openModalStatusOfCase(false)
            createStatusTable(true)
         createNotification(false, 'Status updated successfully')
            formStatus.reset()
        } catch (error) {
            console.log(error)
        }
    }
}

searchStatus.addEventListener('keyup', async (e) => {
    e.preventDefault()
    const search = searchStatus.value
    if(!search) {
        createStatusTable(true)
    } else {
        createStatusTable(false, search)
    }
})