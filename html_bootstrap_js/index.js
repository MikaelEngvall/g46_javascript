// sample data
const data = [
  { firstname: "John", lastname: "Doe", email: "john@example.com" },
  { firstname: "Mary", lastname: "Moe", email: "mary@example.com" },
  { firstname: "July", lastname: "Dooley", email: "july@example.com" },
];

// Function to cretae and hsow the table
function showTable() {
  if (!document.getElementById("dynamicTable")) {
    // create table element
    const table = document.createElement("table");
    table.id = "dynamicTable";
    table.classList.add("table", "table-striped");

    // create thead & tbody elements
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // create table header row
    const headerRow = document.createElement("tr");
    const headerTexts = ["FirstName", "LastName", "Email"];
    headerTexts.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // append thead to the table
    table.appendChild(thead);

    // create table body
    data.forEach(person => {
      const row = document.createElement('tr');
      const columns = ['firstname', 'lastname','email'];
      columns.forEach(value =>  {
        const td = document.createElement('td');
        td.textContent = person[value];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    // append tbody to the table
    table.appendChild(tbody);

    // append the table to the data-table element
    const datatTable = document.getElementById("data-table");
    datatTable.appendChild(table);

    displayMessage(true);
  }
}

function hideTable() {
  console.log("hideTable() has been executed!");
  const table = document.getElementById("dynamicTable");
  if (table) {
    table.remove();
    displayMessage(false);
  }
}

function displayMessage(input) {
  /*
    <div id="message"></div>

    <div id="message" class="alert alert-success">
       <strong>Success!</strong> This alert box could indicate a successful or positive action.
    </div>
    */
  if (input) {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML =
      "<strong>Success!</strong> This alert box could indicate a successful or positive action.";
    messageElement.classList.add("alert", "alert-success");
  } else {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = "";
    messageElement.hidden = true;
  }
}
