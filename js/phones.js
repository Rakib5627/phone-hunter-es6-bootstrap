// phone gula load 

const loadPhones = async(inputField='') => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputField}`
    // console.log(url)
    const res = await fetch(url);
    const data =await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    const phnContainer = document.getElementById('phone-container');
    // ager gula vanish korte 
    phnContainer.textContent =''; 

    // display 10 phones only 
    phones = phones.slice(0 , 10);

    //   cannot found part

    const noPhnFound = document.getElementById('no-phn-found');
    if(phones.length === 0){
        noPhnFound.classList.remove('d-none');
    }
    else{
        noPhnFound.classList.add('d-none');
    }
    
    phones.forEach(phone => {
        const phoneDiv =document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
                  <div class="card">
                    <img src="${phone.image}" class="card-img-top p-5" alt="...">
                    <div class="card-body">
                      <h5 class="card-title text-center">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
        `
        phnContainer.appendChild(phoneDiv);
    });
    // loader spinnner stop 
    toggleSpinner(false);
} 

          // search part

document.getElementById('btn-search').addEventListener('click' , function(){
    // loader spinner start 
    toggleSpinner(true);
    const searchField = document.getElementById('input-search');
    const inputField = searchField.value;
    // searchField.value='';
    loadPhones(inputField);
    // console.log(inputField)
})

const toggleSpinner = isloading => {
        const loaderSection =document.getElementById('loader')
        if (isloading){
            loaderSection.classList.remove('d-none')
        }
        else{
            loaderSection.classList.add('d-none')
        }
    }
// loadPhones()