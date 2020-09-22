let array=[
    {
        name:"Prithika",
        age:"17",
        city:"Chennai",
        salary:1200000
    },
    {
        name:"Angeline",
        age:"18",
        city:"Chennai",
        salary:1300000
    },
    {
        name:"Reena",
        age:"25",
        city:"Bombay",
        salary:1100000
    }
];

function display(superarray){
    let tabledata="";
    

    superarray.forEach(function(array,index){
        let currentrow=`<tr>
        <td>${array.name}</td>
        <td>${array.age}</td>
        <td>${array.city}</td>
        <td>${array.salary}</td>
        <td>
        <button onclick='deleteName(${index})'>delete</button>
        </tr>`;

        tabledata+=currentrow;
        
    });
    document.getElementsByClassName("tdata")[0].innerHTML=tabledata;
}
display(array);


function searchByName(){
    let searchValue = document.getElementById("searchName").value;
  let newdata = array.filter(function (superarray) {
    return (
    array.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
};

function searchByCity(){
    let searchCity = document.getElementById("searchCity").value;
  let change = array.filter(function (superarray) {
    return (
    array.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(change);
};



function deleteName(index) {
    array.splice(index, 1);
    display(array);
};