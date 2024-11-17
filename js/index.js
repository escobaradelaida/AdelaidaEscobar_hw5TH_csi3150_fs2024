//we have to convert the string from the user into an actual number
//https://www.geeksforgeeks.org convert-a-string-to-an-integer-in-javascript/

function applyFilters() {
  
  // extract the elements from their respective elementID
  const minYear = document.getElementById("minYear").value;
  const maxYear = document.getElementById("maxYear").value;
  //This will collect all ID with make and maps them to an array
  const make = Array.from(document.getElementById("make").selectedOptions).map(
    (opt) => opt.value
  );
  const maxMileage = document.getElementById("maxMileage").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  //will get all ID color and map them to an array
  const color = Array.from(
    document.getElementById("color").selectedOptions
  ).map((opt) => opt.value);

  //this is where the filtering is applied
  //
  let filteredCars = usedCars.filter((car) => {
    // if the first value isn't selected by the user, the condition is true
    // OR if it is specified, then it must be greater or equal to the value
    return (
      (!minYear || car.year >= minYear) &&
      (!maxYear || car.year <= maxYear) &&
      // if the user doesn't select a make, the condition still remain true but if they do end up selecting a make, then it has to be one of the relevant makes
      (!make.length || make.includes(car.make)) &&
      (!maxMileage || car.mileage <= maxMileage) &&
      (!minPrice || car.price >= minPrice) &&
      (!maxPrice || car.price <= maxPrice) &&
      (!color.length || color.includes(car.color))
    );
  });

  // my colors filter is not working so putting in console log to see what it's display
  console.log("Selected colors:", color);
  console.log("Filtered cars:", filteredCars);

  displayCars(filteredCars);
}

function displayCars(cars) {
  const carList = document.getElementById("car-listings");
  carList.innerHTML = ""; // Clear previous results

  // if there are no matches, give error statement
  if (cars.length === 0) {
    carList.innerHTML =
      "<p>No cars match your criteria. Please try different filters.</p>";
    return;
  }

  // if cars do match the filter
  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML =
      //adding img path for the imgs to transfer when filters are applied
      // get the image path, the year, make and model and other features from the array usedCars.js
      `
            <img src="${car.image}" alt="">
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Price: $${car.price}</p>
            <p>Mileage: ${car.mileage} miles</p>
            <p>Color: ${car.color}</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
        `;
    carList.appendChild(carCard);
  });
}

// when html button "clear selection" is pressed, it should remove the chosen filter
// by being set to -1
function clearSelection(id) {
  const selectElement = document.getElementById(id);
  selectElement.selectedIndex = -1; // Clear selection
}
