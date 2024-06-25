const deleteNotification = document.querySelector('#deleteNotification');

export const createDeleteNotification =  async (element, elel, validation) => {

  
  
 
   if(validation){
    deleteNotification.innerHTML = `<div style="z-index: 100000" class=" fixed  flex justify-center items-center  top-10 right-0 bottom-0 left-0">
    <div class="bg-white shadow-lg px-16 py-14 rounded-md text-center">
      <h1 class="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
      <button id="cancelDelete" class="bg-red-500 px-4 py-2 rounded-md text-md text-white">Cancel</button>
      <button id="confirnDelete" class="bg-cyan-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Ok</button>
    </div>
  </div>`


   const confirnDelete = document.querySelector('#confirnDelete');

   confirnDelete.addEventListener('click', (e) => {
      e.preventDefault();
        element(elel)


       deleteNotification.innerHTML = ''
        
    })  

    const cancelDelete = document.querySelector('#cancelDelete');
    cancelDelete.addEventListener('click', (e) => {
        e.preventDefault();
        deleteNotification.innerHTML = ''
    })

    }
    

    

}