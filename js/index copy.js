//we have to convert the string from the user into an actual number
//https://www.geeksforgeeks.org convert-a-string-to-an-integer-in-javascript/

function applyFilters() {
  const minYear = document.getElementById("minYear").value;
  const maxYear = document.getElementById("maxYear").value;
  const make = Array.from(document.getElementById("make").selectedOptions).map(
    (opt) => opt.value
  );
  const maxMileage = document.getElementById("maxMileage").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const color = Array.from(
    document.getElementById("color").selectedOptions
  ).map((opt) => opt.value);

  let filteredCars = usedCars.filter((car) => {
    return (
      (!minYear || car.year >= minYear) &&
      (!maxYear || car.year <= maxYear) &&
      (!make.length || make.includes(car.make)) &&
      (!maxMileage || car.mileage <= maxMileage) &&
      (!minPrice || car.price >= minPrice) &&
      (!maxPrice || car.price <= maxPrice) &&
      (!color.length || color.includes(car.color))
    );
  });

  displayCars(filteredCars);
}

function displayCars(cars) {
  const carList = document.getElementById("car-listings");
  carList.innerHTML = ""; // Clear previous results

  if (cars.length === 0) {
    carList.innerHTML =
      "<p>No cars match your criteria. Please try different filters.</p>";
    return;
  }

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Price: $${car.price}</p>
            <p>Mileage: ${car.mileage} miles</p>
            <p>Color: ${car.color}</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
        `;
    carList.appendChild(carCard);
  });
}
