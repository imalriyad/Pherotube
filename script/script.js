const allCategoryShow = async()=>{
     const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
     const data = await res.json()
     displayCategory(data)
    
}

const displayCategory = (data) =>{
    data.data.forEach(category => {
    const categoreyContainer = document.getElementById('categorey-container')
    const div = document.createElement('div')
    div.innerHTML = `
    <button onclick="displayCards('${category.category_id}')" class="px-4 active:bg-[#FF1F3D] m-[4px] py-2 bg-[#25252533] rounded-md ">${category.category}</button> 
        `
    categoreyContainer.appendChild(div)
      
    });
}

function sorting(data){
  const sorted =data?.data?.sort((a,b)=>{
   return parseInt((b.others.views.replace('K','')) - parseInt(a.others.views.replace('K','')))
  })
  
 }


// Sorting button
const sortingBtn = async(categoryId) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await res.json()
  sorting(data)
  CardShow(data)
}



const btnDiv = document.createElement('div')
const displayCards = async(categoryId) =>{ 
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    
    const NotFound = document.getElementById('NotFound')
    NotFound.innerHTML = ''
    const nodataPage = document.createElement('div')

    const sortBtnContainer = document.getElementById('sortBtnContainer')
    btnDiv.innerHTML = `<button onclick="sortingBtn(${categoryId})" class="btn rounded-md btn-sm px-2 normal-case bg-[#25252533] hover:bg-[#FF1F3D] hover:text-white">Sort by view</button>`
    sortBtnContainer.appendChild(btnDiv)

    
    if (data.data.length === 0) {
    nodataPage.innerHTML = `
    <div class="mt-20 mx-auto max-w-screen-md flex-col justify-center">
    <img class="mx-auto" src="./img/Icon.png" alt="">
    <h1 class="md:text-4xl text-2xl text-[#171717] font-semibold mt-5 text-center">Oops!! Sorry, There is no <br> content here</h1>
    </div>
   `
   
   NotFound.appendChild(nodataPage)
   NotFound.classList.remove('hidden',true)
  
   }
   CardShow(data)
     
}


function CardShow(data){
     const cardContainer = document.getElementById('card-container')
     cardContainer.innerHTML = ''
      let cards = data?.data
      cards?.forEach((cardDetails) =>{
      const card = document.createElement('div') 
      card.innerHTML = `
      <div class="card rounded-[10px]">
       <figure class="h-[200px] relative"><img class="rounded-[10px] h-[200px] w-full" src="${cardDetails.thumbnail}" alt=""/></figure>
       <div class="text-right absolute right-2 bg-[#171717] p-1 rounded top-40 text-white">
        </div>
      <div class="flex mt-5 ml-2">
        <div>
          <img class="w-[50px] h-[50px] rounded-full" src="${cardDetails.authors[0].profile_picture}" alt="">
        </div>
  
        <div class="ml-4 w-max">
        <h1 class="text-[#171717] text-lg font-bold">${cardDetails.title}</h1>
        </div>
      </div>
     <div class="flex -mt-3 items-center">
      <div class="ml-[74px] text-[#171717B2]">${cardDetails.authors[0].profile_name}</div>
      <div class="ml-2"><img src=${cardDetails.authors[0].verified === true? 'varify.svg':'' }></div>
     </div>
     <div class="ml-[74px] text-[#171717B2]">${cardDetails.others.views} views</div>
    </div>
          
          `       
          cardContainer.appendChild(card)    
          NotFound.classList.add('hidden')  
          
    })
  }  

displayCards('1000')
allCategoryShow()