const RESTAURANT_URL = `https://nanitabeyouka.herokuapp.com/api/${value}`
document.getElementById('selectFoodType').addEventListener('onChange', apiRequest)

function apiRequest() {
  const foodType = document.getElementById('selectFoodType')
  const option = foodType.options[foodType.selectedIndex]

  console.log(option.value);
  console.log(option.text);
}

apiRequest()

// async function apiRequest() {
  
//   try{
//     const foodType = document.querySelector('select')
//   const value = foodType.options[foodType.selectedIndex]
//     const response = await fetch(`https://nanitabeyouka.herokuapp.com/api/${value}`)
//     const data = await response.json()
// console.log(value)
//     console.log(data);
    
//     for (let key of data) {
//       console.log(key.name);
//       const nameEle = document.createElement('h1')
//       nameEle.innerText = `Restaraunt name: ${key.name}`
//       document.body.appendChild(nameEle)
//       const areaEle = document.createElement('h1')
//       areaEle.innerText = `Area the restaurant is in: ${key.area}`
//       document.body.appendChild(areaEle)
//     }

    // console.log(restaurantName);

    // document.querySelector('.name').innerText = restaurantName
//   }catch(error){
//     console.log(error);
//   }
// }

console.log('hey');