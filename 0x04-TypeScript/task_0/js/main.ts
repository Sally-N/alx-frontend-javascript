interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Barbie',
  lastName: 'Barbz',
  age: 28,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Just',
  lastName: 'Ken',
  age: 26,
  location: 'New York',
};

const studentsList: Student[] = [ student1, student2 ];

// render a table using vanilla javascript
document.addEventListener('DOMContentLoaded', () => {
  const table: HTMLTableElement = document.createElement('table');
  const tableBody: HTMLTableSectionElement = document.createElement('tbody');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const rowHead: HTMLTableRowElement = thead.insertRow(0);
  const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
  const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

  cell1Head.innerHTML = "firstName";
  cell2Head.innerHTML = "location";
  table.append(thead);

  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const nameCell: HTMLTableCellElement = document.createElement('td');
    nameCell.textContent = student.firstName;
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);

  });


  table.appendChild(tableBody);
  document.body.appendChild(table);
})
