const tbody = document.getElementById("table-body");
  console.log(tbody);

document.addEventListener("DOMContentLoaded", function() {
  const jsonData = [
    {
      "TUPT-ID": "TUPT-21-0882",
      "Name": "John Sigfrido Factor Maur",
      "Email": "johnsigfrido.maur@tup.edu.ph",
      "Course": "BTVTEICT-CP",
      "Section": "3D",
      "Date": "04/16/2024, 4:19:51 PM"
    },
    // Add more objects here if needed
  ];

  const objectsArray = jsonData.map(item => ({
    'TUPT-ID': item['TUPT-ID'],
    'Name': item['Name'],
    'Email': item['Email'],
    'Course': item['Course'],
    'Section': item['Section'],
    'Date': item['Date']
  }));

  if (tbody) {
    objectsArray.forEach(item => {
      tbody.innerHTML += `
        <tr>
          <th scope="row">${item['TUPT-ID']}</th>
          <td>${item['Name']}</td>
          <td>${item['Email']}</td>
          <td>${item['Course']}</td>
          <td>${item['Section']}</td>
          <td>${item['Date']}</td>
        </tr>
      `;
    });
  } else {
    console.error("Table body element not found.");
  }
});

/*
const tbody = document.getElementById("table-body");
    document.addEventListener("DOMContentLoaded", function() {
    const jsonData = [
        {
            "TUPT-ID": "TUPT-21-0882",
            "Name": "John Sigfrido Factor Maur",
            "Email": "johnsigfrido.maur@tup.edu.ph",
            "Course": "BTVTEICT-CP",
            "Section": "3D",
            "Date": "04/16/2024, 4:19:51 PM"
        },
        // Add more objects here if needed
    ];

    

    if (tbody) {
        // Clear existing rows
        tbody.innerHTML = '';

        // Add new rows dynamically
        jsonData.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <tr>
                <th scope="row">${item['TUPT-ID']}</th>
                <td>${item['Name']}</td>
                <td>${item['Email']}</td>
                <td>${item['Course']}</td>
                <td class="green">${item['Section']}</td>
                <td>${item['Date']}</td>
              </tr>
            `;
            tbody.appendChild(row);
        });

        // Update the datatable (replace 'datatable' with the actual ID or class of your datatable)
        $('.datatable').DataTable().destroy();
        $('.datatable').DataTable();
    } else {
        console.error("Table body element not found.");
    }
});
*/