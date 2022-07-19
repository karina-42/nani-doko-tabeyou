const RESTAURANT_URL = `https://nanitabeyouka.herokuapp.com/api`
const select = document.querySelector('#selectFoodType')
const button = document.querySelector('#random-food')

fetch(RESTAURANT_URL)
  .then(res => {
    return res.json()
  })
  .then(data => {
    // console.log(data.pizza[0].name);
    // console.log(data);
    let foodKeyArray = Object.keys(data)
    // console.log(foodKeyArray);

    for(let i = 0; i < foodKeyArray.length; i++) {
      const option = document.createElement('option')
      option.value = foodKeyArray[i]
      option.innerText = foodKeyArray[i]
      select.appendChild(option)
    }
  })

  select.addEventListener('change', event => {
    console.log(event.target.value);
    let url = `https://nanitabeyouka.herokuapp.com/api/${event.target.value}`
    getRestaurant(url)
  })
  const getRestaurant = url => {
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      document.querySelector('#right').style.display = 'none'
      let results = document.querySelector('#results')
      results.innerHTML = ''
      for (let i = 0; i < data.length; i++) {
        newElement = document.createElement('div')
        newElement.setAttribute('class', 'new-div')
        newElement.innerHTML = `<h1>Restaurant name: ${data[i].name}</h1>
        <h2>Restaurant area: ${data[i].area}</h2>`
        results.appendChild(newElement)
      }
    })
  }

  button.addEventListener('click', randomFood)

   function randomFood() {
    fetch(RESTAURANT_URL)
    .then(res => {
      return res.json()
    })
    .then(data => {
      let foodArray = Object.keys(data)
      let pickRandomFood = foodArray[Math.floor(Math.random() * foodArray.length)]

      let eat = document.querySelector('.eat')
      eat.textContent = `Try ${pickRandomFood}!`
      eat.style.textDecoration = 'underline'
      eat.style.fontWeight = 700 
      eat.style.fontSize = '30px'
    })
   }
    
// async function apiRequest() {
  // try{
  //   const value = foodType.options[foodType.selectedIndex]
  //   const response = await fetch(RESTAURANT_URL)
  //   const data = await response.json()
  //   console.log(data);
    
    // for (let key of data) {
    //   console.log(key.name);
    //   const nameEle = document.createElement('h1')
    //   nameEle.innerText = `Restaraunt name: ${key.name}`
    //   document.body.appendChild(nameEle)
    //   const areaEle = document.createElement('h1')
    //   areaEle.innerText = `Area the restaurant is in: ${key.area}`
    //   document.body.appendChild(areaEle)
    // }
    // console.log(restaurantName);
    // document.querySelector('.name').innerText = restaurantName
//   }catch(error){
//     console.log(error);
//   }
// }