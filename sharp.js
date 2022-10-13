let myform = document.getElementById('my-form');
let Amount = document.getElementById('Amount');
let Description = document.getElementById('description');
let Category = document.getElementById('category');
let msg = document.getElementsByClassName('msg');
let userList = document.getElementById('parentList')


// call the Event to do task
myform.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

savetolocalStorage(e);
}

//Save Details to LOcal Storage
function savetolocalStorage(event){
    event.preventDefault();

    let Amount = event.target.Amount.value;
    let Description =event.target.description.value;
    let Category =event.target.category.value;
    const obj ={
        Amount ,
       Description,
        Category 
    };

    localStorage.setItem(obj.Amount , JSON.stringify(obj));
    ShowOnScreen(obj);
}


// Show Details in Screen
function ShowOnScreen(detail){
    const parentNode = document.getElementById('parentList');
    const childHTML  = `<li id =${detail.Amount}> ${detail.Amount} - ${detail.Description} - ${detail.Category}  
    <button onclick= EditDetails('${detail.Amount}','${detail.Description}','${detail.Category}')>EDIT</button>
    <button onclick= deleteDetails('${detail.Amount}')>Delete</button> </li>`;
    parentNode.innerHTML += childHTML;

      //clear fields
      Amount.value = '';
      Description.value = '';
      Category.value = '';
}

  //Delete from Local Storage
function deleteDetails(amount){
    localStorage.removeItem(amount);
    removeFromScreen(amount);

}

// delete from Screen Display
function removeFromScreen(amount){
    const parentNode = document.getElementById('parentList');
    const childToBeDeleted = document.getElementById(amount);

    parentNode.removeChild(childToBeDeleted)
}

  //  Edits The DEtails
function EditDetails(Amount,Description,Category){
    document.getElementById('Amount').value = Amount;
    document.getElementById('description').value = Description;
    document.getElementById('category').value = Category;

    deleteDetails(Amount);
    

}