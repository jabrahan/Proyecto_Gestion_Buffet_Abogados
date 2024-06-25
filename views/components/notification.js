const noti = document.querySelector('#notification');
const div = document.createElement('div');



export const createNotification = (isError, message) => {
    div.classList.add('fixed', 'shadow-lg', 'text-white', 'text-sm', 'font-bold');
    
   // console.log(message) 

    if(isError){
        console.log(isError)
        div.innerHTML = `
        <div class="flex justify-center  max-w-2xl mx-auto bg-red-600 text-white text-sm font-bold px-4 py-3" role="alert">
            <p>${message}</p>
        </div>
        `
        noti.append(div)
    }else{
        div.innerHTML = `
        <div class="flex justify-center max-w-2xl mx-auto bg-green-600 text-white text-md font-bold px-4 py-3" role="alert">
            <p>${message}</p>
        </div>
        `
        noti.append(div)
    }
        

    setTimeout(() => {
        div.innerHTML = ''
    }, 3000)    

}


export const createNotificationForm = async (isError, message, spaceN) => { 

    const notiForm = spaceN;
    //console.log(message) 
    if(isError){
        div.innerHTML = `
        <div class="flex justify-center max-w-2xl mx-auto bg-red-600 text-white text-md font-bold px-4 py-3" role="alert">
            <p>${message}</p>
        </div>
        `
    }else{
        div.innerHTML = `
        <div class="flex justify-center max-w-2xl mx-auto bg-green-600 text-white text-md font-bold px-4 py-3" role="alert">
            <p>${message}</p>
        </div>
        `
    }
    notiForm.append(div)
    //notiFormMarketing.append(div)

    setTimeout(() => {
        div.innerHTML = ''
    }, 3000)    
}