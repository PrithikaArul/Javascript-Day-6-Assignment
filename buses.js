window.onload=function(){
    let initialarray=[];
    
        if(localStorage.getItem("array")==null){
            localStorage.setItem("array",JSON.stringify(initialarray));
        }
    };
    
    
    
    
    function display(superarray=undefined){
        let tabledata="";
        let array;
    
        if(superarray==undefined){
            array=JSON.parse(localStorage.getItem("array"));
        }else{
            array=superarray;
        };
        
        document.getElementsByClassName("tdata")[0].innerHTML=tabledata;
    };


    display();
    
    
    function addBus(e){
        e.preventDefault();
        let nam={};
        let name=document.getElementById("name").value;
        let source=document.getElementById("source").value;
        let destination=document.getElementById("destination").value;
        let number=document.getElementById("number").value;
        let passengercapacity=document.getElementById("pc").value;
        nam.name=name;
        nam.source=source;
        nam.destination=destination;
        nam.number=number;
        nam.pc=passengercapacity;
    
        let array=JSON.parse(localStorage.getItem("array"));
        nam.push(array);
        localStorage.setItem("array",JSON.stringify(array));
        display();
    
        document.getElementById("name").value="";
        document.getElementById("source").value="";
        document.getElementById("destination").value="";
        document.getElementById("number").value="";
        document.getElementById("pc").value="";
    
    }
    
    
    function searchBySource(){
        let searchValue = document.getElementById("searchSource").value;
        let array = JSON.parse(localStorage.getItem("array"));
      let newdata = array.filter(function (superarray) {
        return (
         nam.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
      });
    
      display(newdata);
    };
    
    function searchByDestination(){
        let cityvalue=document.getElementById("searchDestination").value;
        let array = JSON.parse(localStorage.getItem("array"));
       let change=array.filter(function(superarray){
           return(
               nam.destination.toUpperCase().indexOf(cityvalue.toUpperCase())!=-1
           );
       });
       display(change);
    };