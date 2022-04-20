var tagFullName = $('#fullName');
var tagGroup = $('#group');
var tagEmail = $('#email');
var tagPhone = $('#phone');
var buttonChanging = $('#buttonChanging');
var cardBody = $('#cardBody');
var bttnCheck = $('.bttnCheck')
var bttnAccept = $('.bttnAccept');
var bttnCancel = $('.bttnCancel')

var allInfo = {tagEmail, tagGroup, tagFullName, tagPhone};

function changefullName(fullName = 'Empty'){
    tagFullName.text(fullName);
}

function changegroup(group = 'Empty'){
    tagGroup.text(group);
}

function changeemail(email = 'Empty'){
    tagEmail.text(email);
}

function changephone(phone = 'Empty'){
    tagPhone.text(phone);
}

function inputData(){

    /*allInfo.each(function(){
        $(this).html('<input></input>');
    });*/
    tagEmail.html('<input class="text-input" id="entEmali" required placeholder="Enter your Email"></input>');
    tagFullName.html('<input class="text-input" id="entFullname" required placeholder="Enter your full name"></input>');
    tagGroup.html('<input class="text-input" id="entGroup" required placeholder="Enter your group"></input>');
    tagPhone.html('<input class="text-input" id="entPhone" required placeholder="Enter your phone"></input>');
    bttnCheck.html('<button  type="submit" class="bttnAccept">Save</button><button type="reset" class="bttnCancel">Cancel</button>');
}

function bttnAccept1(){
    var arr = [];
    $("input").each(function(index, element) {
    arr.push($(this).val());
    });
    changefullName(arr[0]);
    changegroup(arr[1]);
    changeemail(arr[2]);
    changephone(arr[3]);
    $('.bttnCheck :button').each(function(){
        $(this).remove();
    });
}

buttonChanging.click(function () { 
    inputData();
});

function soundClick() { 
    var audio = new Audio(); // Создаём новый элемент Audio 
    audio.src = 'Bruno Major - The Most Beautiful Thing.mp3'; // Указываем путь к звуку "клика" 
    audio.autoplay = true; // Автоматически запускаем 
  } 
 
soundClick();

$('.bttnCheck').on('click', '.bttnAccept', function (e) {
    bttnAccept1();
});

$('.bttnCheck').on('click', '.bttnCancel', function (e) {
    changefullName();
    changegroup();
    changeemail();
    changephone();
    $('.bttnCheck :button').each(function(){
        $(this).remove();
    });
});

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if(keyName == "Enter"){
        bttnAccept1();
    }
  });

  $('.navbar-nav .nav-link.active').animate({
      'padding':'-30px'
  }).animate({
    'padding':'8px'
});