// fetch("https://playground.mockoon.com/customers")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Something went wrong"));

async function getCustomers() {
  const url = "https://playground.mockoon.com/customers";

  try {
    const respose = await fetch(url);

    if (!respose.ok) {
      throw new Error("Could not fetch data");
    }

    const data = await respose.json();
    console.log(data);

    let tab = " ";
    data.customers.forEach(function (customers) {
      tab += `<tr>
        <td>${customers.name}</td>
        <td>${customers.email}</td>
        <td>${customers.phone}</td>
        </tr>`;
    });
    document.getElementById("dataop").innerHTML = tab;
    document.getElementById("btnCust").addEventListener("click", getCustomers);
  } catch (error) {
    console.error(error.message);
  }
}

async function getImages() {
  try {
    const respose = await fetch("https://playground.mockoon.com/photos");

    if (!respose.ok) {
      throw new Error("Some error occured");
    }

    const data = await respose.json();
    console.log(data);

    let tab = " ";
    data.photos.forEach(function (photos) {
      tab += `<tr>
        <td>${photos.caption}</td>
        <td>${photos.like}</td>
        <td>${customers.url}</td>
        </tr>`;
    });
  } catch (error) {
    console.error(error.message);
  }
}

document.getElementById("btnImg").addEventListener("click", getImages);
