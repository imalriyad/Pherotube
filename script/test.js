if ( cardDetails.authors[0].verified === false || cardDetails.authors[0].verified === '') {
    console.log(typeof cardDetails.authors[0].verified);
    const badge = document.getElementById('badge')
    badge.classList.add('hidden',true)
   }  

// cardDetails.authors[0].verified === true

let a = 19
const isAdult = a <10 ? 'under Age' : 'Adult'
console.log(isAdult);


const nodataPage = document.createElement('div')
console.log(nodataPage);
if (data.data.length = []) {
  console.log("Not Found");
  nodataPage.innerHTML = `
  <div class="mt-20 mx-auto max-w-screen-md flex-col justify-center">
  <img class="mx-auto" src="./img/Icon.png" alt="">
  <h1 class="md:text-4xl text-2xl text-[#171717] font-semibold mt-5 text-center">Oops!! Sorry, There is no <br> content here</h1>
 </div>

  `
  cardContainer.appendChild(nodataPage)
}