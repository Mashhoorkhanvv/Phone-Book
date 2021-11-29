var selectedRow=null;
function onFormSubmit(e){
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow==null){
        insertNewRecord(formData);
    }
    else{
        Updaterecord(formData);
    }
    resetForm();
}
// retreive data
function readFormData(){
    var formData={};
    formData['name']=document.getElementById('name').value;
    formData['address']=document.getElementById('address').value;
    formData['phoneno']=document.getElementById('phoneno').value;
    formData['email']=document.getElementById('email').value;
    return formData;
}
//insert data
function insertNewRecord(data){
    var table=document.getElementById("phonebook").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.name;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.address;   
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.phoneno;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.email;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>`
}

//editdata
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('name').value=selectedRow.cells[0].innerHTML;
    document.getElementById('address').value=selectedRow.cells[1].innerHTML;
    document.getElementById('phoneno').value=selectedRow.cells[2].innerHTML;
    document.getElementById('email').value=selectedRow.cells[3].innerHTML;
}

//Updaterecord
function Updaterecord(formData){
    selectedRow.cells[0].innerHTML=formData.name;
    selectedRow.cells[1].innerHTML=formData.address;
    selectedRow.cells[2].innerHTML=formData.phoneno;
    selectedRow.cells[3].innerHTML=formData.email;
}

//deletedata
function onDelete(td){
    if(confirm('Are you sure to delete Record')){
        row=td.parentElement.parentElement;
        document.getElementById('phonebook').deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset
function resetForm(){
    document.getElementById('name').value='';
    document.getElementById('address').value='';
    document.getElementById('phoneno').value='';
    document.getElementById('email').value='';
}
