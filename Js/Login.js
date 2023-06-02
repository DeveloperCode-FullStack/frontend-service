function Login() {
    let user = document.getElementById('txtuser').value;
    let password = document.getElementById('txtpassword').value;
    localStorage.setItem('user','user');
    localStorage.setItem('password','password');


    //Datos de ingreso de la aplicación User: 1234 Pass: 1234
    if (user == 0 && password ==0) {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            denyButtonText: `No continuar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.assign('Dashboard.html');
            } else if (result.isDenied) {
                Swal.fire('Se canceló el ingreso', '', 'info')
                Clear();
            }
        })

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error en la autenticación',
            text: 'Revisa que los datos ingresados son correctos',
        })
        Clear();
    }
}

function SignOut(){
    Swal.fire({
        title: '¡Hasta pronto!',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Cerrar Sesión',
        denyButtonText: `Continuar en la Sesión`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            window.location.assign('login.html');
        } else if (result.isDenied) {
            Swal.fire('Se continúa en la sesión', '', 'info')
            Clear();
        }
    })
}

function Clear() {
    document.getElementById('txtuser').value = '';
    document.getElementById('txtPassword').value = '';
}

//pintar permiso

function loadPermission(){
    
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/user/permission/J12/1234',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        
    }).done(function (items) {
        var permission = `
                <span class="modulo">Seguridad</span>
                <li>
                    <a href="Board.html" target="workSpace">
                        <i class="fi fi-rr-layout-fluid"></i>
                        <span class="links_name">Tablero</span>
                    </a>
                    <span class="tooltip">Tablero</span>
                </li>
                <li class="profile">
                    <div class="profile-details">
                        <img src="../Asset/Img/myAvatar.png" alt="profileImg">
                        <div class="name_job">
                            <div class="name">Johan Celis</div>
                            <div class="job">Administrador</div>
                        </div>
                        
                    </div>

                    <a id="log_out" name='cerrar' onclick="SignOut()"><i class='bx bx-log-out bx-lg'  ></i></a>
                </li>
        `;
        items.forEach(function (item, index, array) {
            permission += `
                <li>
                    <a href="`+item.moduleRoute+`/`+item.viewRoute+`" target="workSpace">
                        <i class="`+item.viewIcon+`"></i>
                        <span class="links_name">`+item.viewLabel+`</span>
                    </a>
                    <span class="tooltip">`+item.viewLabel+`</span>
                </li>
            `;
        })
        $("#dataPermission").html(permission);   
    })
}
