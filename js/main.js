document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
  const food = document.querySelector('input').value
  try{
    const response = await fetch(`https://nanitabeyouka.herokuapp.com/api/${food}`)
    const data = await response.json()

    console.log(data);
    
    for (let key of data) {
      console.log(key.name);
      const nameEle = document.createElement('h1')
      nameEle.innerText = `Restaraunt name: ${key.name}`
      document.body.appendChild(nameEle)
      const areaEle = document.createElement('h1')
      areaEle.innerText = `Area the restaurant is in: ${key.area}`
      document.body.appendChild(areaEle)
    }

    // console.log(restaurantName);

    // document.querySelector('.name').innerText = restaurantName
  }catch(error){
    console.log(error);
  }
}