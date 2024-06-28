const searchLeads = document.querySelector('#search_lead');
const leadsTable = document.querySelector('#leadTable');
const addLead = document.querySelector('#addLead');
import { createNotification } from "../components/notification.js";
import { createNotificationForm } from "../components/notification.js"; 
import { createDeleteNotification } from "../components/deleteNotification.js";



addEventListener('DOMContentLoaded', async (e) => {
    createLeadsTable(true); 
})


function cleanHTML(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}




async   function createLeadsTable(valid ,search) {

    if (valid === true) {
        try {
        const response = await axios.get('/api/clients/allClients')
        const data = response.data
       // console.log(data)
        createLeads(data)
        
    } catch (error) {
        console.log(error)
    }
    } else {
        try {
            const response = await axios.get('/api/clients/allClients')
            const data = response.data
            const resoltedData = data.filter((element) => {
                return element.firstName.toLowerCase().includes(search.toLowerCase()) || element.lastName.toLowerCase().includes(search.toLowerCase()) || element.email.toLowerCase().includes(search.toLowerCase())  || element.phone.toString().toLowerCase().includes(search.toLowerCase())
            })
            createLeads(resoltedData)
            
        } catch (error) {
            console.log(error)
        }
    }
    
}

function createLeads(data) {
    cleanHTML(leadsTable)
    data.forEach(element => {
        const {firstName, lastName, email, phone, status, typeOfCase, _id} = element

        const tr = document.createElement('tr')
        tr.classList.add('hover:bg-gray-50')
        const td1 = document.createElement('td')
        td1.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'text-sm', 'font-medium', 'text-gray-900')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const tdButton = document.createElement('td')
        tdButton.classList.add('flex', 'md:gap-3', 'md:px-6', 'md:py-4', 'font-normal', 'text-gray-900', 'gap-1', 'pt-1', 'pl-3', 'text-end', 'justify-end', 'm-5', 'md:m-0')
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

        btnDelete.onclick = async () => createDeleteNotification(deleteLead, _id, true)

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

        btnEdit.onclick = async () => {
            window.location.href = `/edit-Lead/?id=${_id}`
        }

        tdButton.appendChild(btnDelete)
        tdButton.appendChild(btnEdit)
        td1.textContent = firstName + ' ' + lastName
        td2.textContent = status
        td2.classList.add('max-md:hidden')
        td3.textContent = typeOfCase
        td3.classList.add('max-md:hidden')
        td4.textContent = email
        td4.classList.add('max-lg:hidden')
        td5.textContent = phone
        td5.classList.add('max-lg:hidden')
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(tdButton)
        leadsTable.appendChild(tr)

        
}) 

}

async function deleteLead(id) {
   // console.log(id)
    const response = await axios.delete('/api/clients/deleteClient', {
        params: {
            idd: id
        }
    })
    createNotification(false, "Lead deleted successfully")
    createLeadsTable(true)
}


searchLeads.addEventListener('input', async (e) => {
    const search = searchLeads.value
    if (!search) {
        createLeadsTable(true)
    } else {
        createLeadsTable(false, search)
    }

} )

addLead.addEventListener('click', () => {
    window.location.href = '/add-Client'
})