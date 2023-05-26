//Cargar de manera automatica los datos regostrados
// Busqueda por id
function findById(id) {
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/userRole/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (item) {
        $("#id").val(item.id)
        $("#roleId").val(item.roleId.id)
        $("#userId").val(item.userId.id)
        $("#state").val(item.state==true?'1':'0')      
    })
}

function loadTable() {
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/userRole',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (items) {
        var registros = "";
        items.forEach(function (item, index, array) {
            registros += `

                        <tr class="table-light">
                            <td>`+item.roleId.description+`</td>
                            <td>`+item.userId.user+`</td>
                            <td>`+(item.state==true?'Activo':'Inactivo')+`</td>
                            <td><button class="btnEdit" type="button" onclick="findById(`+item.id+`);"><i class="fi fi-rr-pencil"></i></button></td>
                            <td><button class="btnDelete" type="button" onclick="deleteById(`+item.id+`);"><i class="fi fi-rr-trash"></i></button></td>
                        </tr>
                        `;
        })
        $("#dataResult").html(registros);   
    })
}

//Accion para eliminar un registro seleccionado 
function deleteById(id){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/userRole/' + id,
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        loadTable();
    })
}


//Accion de adicionar un registro
function Add(){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/userRole',
        data: JSON.stringify({
            roleId: {
                id:$("#roleId").val()
            },
            userId: {
                id:$("#userId").val()
            },  
            state: parseInt($("#state").val()),
            userCreationId: 1,
            dateCreation: new Date()
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        //Cargar datos
        loadTable();

        //Limpiar formulario
        clearData();
    })
}


//Accion de actualizar un registro
function Update(){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/userRole/' + $("#id").val(),
        data: JSON.stringify({
            roleId: {
                id:$("#roleId").val()
            },
            userId: {
                id:$("#userId").val()
            },  
            state: parseInt($("#state").val()),
            userCreationId: 1,
            dateCreation: new Date(),
            userModificationId: 1,
            dateModification: new Date()
        }),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (result) {
        //Cargar datos
        loadTable();

        //Limpiar formulario
        clearData();
    })
}

// Función para limpiar datos
function clearData(){
    $("#id").val(""),
    $("#roleId").val(""),
    $("#userId").val(""),
    $("#state").val("")
}