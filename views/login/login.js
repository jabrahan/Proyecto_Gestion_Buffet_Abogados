//Selector for the login button
const login = document.querySelector('#signin');
const password = document.querySelector('#password');
const username = document.querySelector('#email');
import { createNotification } from "../components/notification.js";



document.addEventListener("DOMContentLoaded", function() { 
    // Dom is ready to be used
console.log(password);
    


});

login.addEventListener('click', async function() {

        const data = {
            user: username.value,
            password: password.value
        };

      //  console.log(data);

        if(!data.user) {
          //  console.log('Email is required');
            createNotification( true, 'Email is required');
        } else if(!data.password) {
         //   console.log('Password is required');
            createNotification( true, 'Password is required');
        } else if (data.user && data.password) {
            try {
                const response = await axios.get('/api/users/', {
                    params: { email: data.user } })

                const datas = response

             //   console.log(datas)

                if(datas.status === 200) {
                    if (datas.data.password === data.password && datas.data.status === 'active') {
                        //createNotification(false, 'Login successful')
                        const {email, id, name, role, status} = datas.data
                        const user = {
                            email, 
                            id, 
                            name, 
                            role, 
                            status
                        }
                      //  console.log(user)

                        localStorage.setItem('user', JSON.stringify(user))
                        
                        window.location.href = '/dashboard'

                    } else if (datas.data.password === data.password && datas.data.status === 'inactive') {
                        createNotification( true, 'User is inactive')
                    } 
                    
                    else {
                        createNotification( true, 'Wrong password')
                    } 

            } else {
                createNotification( true, 'User does not exist')
            }
            } catch (error) {
                console.log(error) 
            }

            


        }

    })