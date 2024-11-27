document.addEventListener("DOMContentLoaded", function () {
    const selector = document.getElementById("number-selector");
    const tableContainer = document.getElementById("multiplication-table");
  
    // Function to generate multiplication table
    function generateTable(number) {
      let tableHTML = `<h2>Multiplication Table for ${number}</h2><table>`;
      for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${number} x ${i}</td><td>=</td><td>${number * i}</td></tr>`;
      }
      tableHTML += `</table>`;
      tableContainer.innerHTML = tableHTML;
    }
  
    // Initially display the table for number 1
    generateTable(1);
  
    // Event listener to update table when a new number is selected
    selector.addEventListener("change", function () {
      const selectedNumber = parseInt(selector.value);
      generateTable(selectedNumber);
    });
  });
  