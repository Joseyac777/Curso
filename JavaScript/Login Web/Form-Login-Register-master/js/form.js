let correo = document.getElementById("correo");
let pass = document.getElementById("pass");

let RegCorreo = document.getElementById("reg-correo");
let RegPass = document.getElementById("reg-pass")
let RegRepPass = document.getElementById("reg-rep-pass")


(function(){
    $(document).ready(function(){
        $('.alt-form').click(function(){
            $('.form-content').animate({
                height: "toggle",
                opacity: 'toggle'
            }, 600);
        });

        let formRegistro = document.getElementsByName('form-input');
        
        for (let i = 0; i < formRegistro.length; i++) {
            formRegistro[i].addEventListener('blur', function(){
                if (this.value.length >= 1) {
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                } else if (this.value.length = " ") {
                    this.nextElementSibling.classList.add('error');
                    this.nextElementSibling.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.remove('active');
                }
            })
        }

    })
}())
