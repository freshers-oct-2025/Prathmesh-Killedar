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
    data.forEach(function (customers, idx) {
      console.log("customers:",customers)
      if (idx < 20) {
        tab += `<tr>
        <td>${customers.name}</td>
        <td>${customers.email}</td>
        <td>${customers.phone}</td>
        </tr>`;
      }
      console.log("outside foreach:", idx );
      
    });
    document.getElementById("dataop").innerHTML = tab;
  } catch (error) {
    console.error(error.message);
  }
}
document.getElementById("btnCust").addEventListener("click", getCustomers);

async function getImages() {
  try {
    const respose = await fetch("https://playground.mockoon.com/photos");

    if (!respose.ok) {
      throw new Error("Some error occured");
    }

    const data = await respose.json();
    console.log(data);

    let tab = " ";
    data.forEach(function (photos, idx) {
      if (idx < 10) {
        tab += `<tr>
        <td>${photos.caption}</td>
        <td>${photos.likes}</td>
        <td> <a href="${photos.url}">Image</a></td>
        </tr>`;
      }
    });
    document.getElementById("imgdata").innerHTML = tab;
  } catch (error) {
    console.error(error.message);
  }
}

document.getElementById("btnImg").addEventListener("click", getImages);
