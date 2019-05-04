//модальне вікно через 5 секунд, після згоди більне не виходить
function modalWin() {
    
     if (localStorage.getItem('modalYesBtn') != 1) {
        $('#exampleModal').modal('show');
        $('#modal-yes-btn').on('click', function () {
            $('#exampleModal').modal('hide');
            localStorage.setItem('modalYesBtn', 1);
        })
     }
    
   
    
}

setTimeout (modalWin, 1000);