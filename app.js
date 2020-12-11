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
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if there was a date entered 
    // If there was, filter the data using that date
    if (date) {
        //Apply the filter to the data and only keep those rows
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data, if any
    buildTable(filteredData);
}

// Attach an event to listen for the form button to be clicked
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);
