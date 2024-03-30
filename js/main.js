let elList = document.querySelector('.list')
fetch('https://fakestoreapi.com/products')
.then((res)=> res.json())
.then((data)=> {
    data.forEach((item) => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="container d-flex justify-content-between align-items-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-topimg-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">${item.category}</p>
          <p class="card-text">${item.price}</p>
        </div>
      </div>
        </div>
        `
        elList.appendChild(newLi)
    });
})