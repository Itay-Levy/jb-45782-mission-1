function addProduct(){
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);
    injectTRToDOM(newTR);
}

function collectDataFromForm(){
const produceName = document.getElementById("product-name").value;
const producePrice = document.getElementById("product-price").value;
const productCatagory = document.getElementById("product-category").value;
const pic = document.getElementById("product-pic").value;

return{
    produceName,
    producePrice,
    productCatagory,
    pic,
};
}


function generateTR(data) {
  const newTR = `
        <tr >
            <td>${data.produceName}</td>
            <td>${data.producePrice}</td>
            <td>${data.productCatagory}</td>
            <td><img class="car-pic"
                    src="${data.pic}">
            </td>
        </tr>
    `;
  return newTR;
}
function injectTRToDOM(newTR) {
  document.getElementById("product-list").innerHTML += newTR;
}

function loadCarsFromStorage() {
  const carsJSON = localStorage.getItem(CARS_KEY_NAME);
  if (carsJSON) {
    const cars = JSON.parse(carsJSON);
    for (const car of cars) {
      const newTR = generateTR(car);
      injectTRToDOM(newTR);
    }
  }
}

function saveCarToLocalStorage(car) {
  const carsJSON = localStorage.getItem(CARS_KEY_NAME) || "[]";
  const cars = JSON.parse(carsJSON);
  cars.push(car);
  localStorage.setItem(CARS_KEY_NAME, JSON.stringify(cars));
}

function clearForm() {
  document.getElementById("product-form").reset();
}

loadCarsFromStorage();