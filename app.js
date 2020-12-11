// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // Clear any existing data from the table
    tbody.html("");
    // Loop through each object in the data
    // append a row & cells for each value in the row 
    data.forEach((dataRow) => {
        // Append a row to the table body
        // tr = table row tag 
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        // Add each value as a table cell
        // td = table cell tag 
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
}
