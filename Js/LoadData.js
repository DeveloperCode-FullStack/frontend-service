function loadModulo(){ 
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/module',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function(items){
        var registros = `<option selected="" selected disabled hidden>--- Seleccione ---</option>`;
        items.forEach(function(item, index, array){
            registros += `
                <option value="`+item.id+`">`+item.code+` - `+item.label+`</option>
            `;
        })
        $("#moduleId").html(registros);
    })
}

function loadRole(){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/role',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function(items){
        var registros = `<option selected="" selected disabled hidden>--- Seleccione ---</option>`;
        items.forEach(function(item, index, array){
            registros += `
                <option value="`+item.id+`">`+item.code+` - `+item.description+`</option>
            `;
        })
        $("#roleId").html(registros);
    })
}

function loadView(){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/view',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function(items){
        var registros = `<option selected="" selected disabled hidden>--- Seleccione ---</option>`;
        items.forEach(function(item, index, array){
            registros += `
                <option value="`+item.id+`">`+item.label+`</option>
            `;
        })
        $("#viewId").html(registros);
    })
}

function loadPerson(){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/person',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function(items){
        var registros = `<option selected="" selected disabled hidden>--- Seleccione ---</option>`;
        items.forEach(function(item, index, array){
            registros += `
                <option value="`+item.id+`">`+item.document+` - `+item.firstName+`</option>
            `;
        })
        $("#personId").html(registros);
    })
}

function loadUser(){
    $.ajax({
        url: 'http://localhost:9000/backend-service/api/security/user',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function(items){
        var registros = `<option selected="" selected disabled hidden>--- Seleccione ---</option>`;
        items.forEach(function(item, index, array){
            registros += `
                <option value="`+item.id+`">`+item.user+`</option>
            `;
        })
        $("#userId").html(registros);
    })
}