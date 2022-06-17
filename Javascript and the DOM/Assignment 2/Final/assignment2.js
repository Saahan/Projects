let table = document.createElement("table");

let tableDiv = document.getElementById("tableDiv");

let d1 = new Date();

let addEventData = []; //Add data array to store added events

tableDiv.appendChild(table);

table.setAttribute("id", "mainTable");
table.setAttribute("border", 1);

document.getElementById("RowColSubmit").onclick = RowColSubmit;

function RowColSubmit() {
  let x = document.getElementById("rows").value;
  let y = document.getElementById("columns").value;

  for (var i = 0; i < x; i++) {
    let tr = document.createElement("tr");
    addEventData[i] = [];

    for (var j = 0; j < y; j++) {
      addEventData[i][j] = [];

      let td = document.createElement("td"); //create td

      let div = document.createElement("div"); //create divs to put inside td
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");

      let a1 = document.createElement("a"); //Create links to view and add events
      let v1 = document.createElement("a");

      div.innerHTML = d1.toDateString(); //add date content to date div and content to links
      a1.innerHTML = "Add Events";
      v1.innerHTML = "View Events";

      div.setAttribute("id", "d-" + i + "-" + j); //set IDs for divs
      div1.setAttribute("id", "a-" + i + "-" + j);
      div2.setAttribute("id", "v-" + i + "-" + j);

      a1.setAttribute("href", "#"); //add attributes to links (This is where to put the prompt to add events)
      v1.setAttribute("href", "#");

      a1.onclick = addData; //add an event using this link, call addData function
      v1.onclick = viewData; //view an event using this link, call viewData function

      tr.appendChild(td);

      td.appendChild(div); //append divs to td
      td.appendChild(div1);
      td.appendChild(div2);

      div1.appendChild(a1); //append links to div1 and div2
      div2.appendChild(v1);

      d1.setDate(d1.getDate() + 1); //increment date in div
    }
    document.getElementById("mainTable").appendChild(tr); //append tr to table div
  }
}

function addData(e) {
  lnk = e.srcElement.parentNode;

  let idArr = lnk.id.split("-");

  data1 = prompt("Add an Event");

  addEventData[+idArr[1]][+idArr[2]].push(data1);

  console.log(addEventData);
}

function viewData(e) {
  lnk = e.srcElement.parentNode;

  let idArr = lnk.id.split("-");

  alert("Number of events added are:" + addEventData[+idArr[1]][+idArr[2]].length);
}
