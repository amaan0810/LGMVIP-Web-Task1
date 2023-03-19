var AddBtn = $('#add');
var TaskBar= $('#myUL');
var Reset=$('#rstbtn');
var checkboxes;
function add() {
    if($('#myInput').val()==''){
      alert("Please Enter the Text");
    }
    else{
    const listLength = $('#myUL li').length + 1;
    const li = $('<li>',{'class':'list-group-item'});
    const id = 'checkbox' + listLength;
    const label = $('<label>', {class: 'form-check-label', text: $('#myInput').val(), for:id})
    const checkbox = $('<input >', {class: 'form-check-input  me-1', type: 'checkbox', value: '', id:id});
    var delbtn=$('<button>',{
      'class':'btn btn-danger cls',
      click: function() {
        this.parentElement.remove();
      }
    })
    var delico=$('<i>',{
       'class':'bi bi-x'
    })
    delbtn.append(delico); 
    li.append(delbtn); 
    li.append(checkbox);
    li.append(label);
    TaskBar.append(li);
    $('#myInput').val('');
    eventAdder();
  }
}

$(document).ready(function(){ 
  $('#myUL li button').each(function(i) {
    $(this).on('click', function() {
      this.parentElement.remove();
    })
  })
  console.log($('#myUL li button'))
})

function eventAdder(){
  var checkboxes=document.querySelectorAll(".form-check-input");
  var labels=document.querySelectorAll(".form-check-label");
  console.log(checkboxes);
  for(var i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener("click",function(){
      for(var i=0;i<checkboxes.length;i++){
        if (checkboxes[i].checked) {
          labels[i].style.textDecoration="line-through";
          console.log(labels[i]);
        }
        else {
          labels[i].style.textDecoration="none";
        }
      }
    });
  }
}

eventAdder();
