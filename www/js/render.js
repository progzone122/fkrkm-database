    eel.loadDatabase();
    eel.expose(readDatabase);
    function readDatabase(response){
        window.database = response;
        if(window.location.href == "http://localhost:8000/index.html"){
            for(let i in window.database){
                $("#database_table").append(`
                    <tr>
                        <th scope="row">` + i + `</th>
                        <td>` + window.database[i][0] + `</td>
                        <td>` + window.database[i][1] + `</td>
                        <td>` + window.database[i][2] + `</td>
                        <td>` + window.database[i][3] + `</td>
                        <td>` + window.database[i][4] + `</td>
                        <td>` + window.database[i][5] + `</td>
                        <td>` + window.database[i][6] + `</td>
                        <td>` + window.database[i][7] + `</td>
                        <td>` + window.database[i][8] + `</td>
                    </tr>
                `);
            }
        }
        if(window.location.href == "http://localhost:8000/add.html"){
            $("#database_table").append(`
                <tr>
                    <th scope="row"></th>
                    <td><input type="text" class="form-control" placeholder="" aria-label="Прізвище" aria-describedby="basic-addon1" id="lastname"></td>
                    <td><input type="text" class="form-control" placeholder="" aria-label="Ім'я" aria-describedby="basic-addon1" id="firstname"></td>
                    <td><input type="text" class="form-control" placeholder="" aria-label="По батькові" aria-describedby="basic-addon1" id="surname"></td>
                    <td><input class="form-control" type="date" id="date"></td>
                    <td><input type="text" class="form-control" placeholder="" aria-label="Телефон" aria-describedby="basic-addon1" id="phone"></td>
                    <td><input type="email" class="form-control" placeholder="" aria-label="Email" aria-describedby="basic-addon1" id="email"></td>
                    <td><input type="text" class="form-control" placeholder="" aria-label="Спеціальність" aria-describedby="basic-addon1" id="speciality"></td>
                    <td><input type="text" class="form-control" placeholder="" aria-label="Рік вступу" aria-describedby="basic-addon1" id="year_of_entry"></td>
                    <td><input type="text" class="form-control" placeholder="" aria-label="Група" aria-describedby="basic-addon1" id="group"></td>
                    <td><button type="button" class="btn btn-outline-success" onclick="addEntry()"><i class="bi bi-plus-lg"></i></button></td>
                </tr>
            `);
            for(let i in window.database){
                $("#database_table").append(`
                    <tr>
                        <th scope="row">` + i + `</th>
                        <td>` + window.database[i][0] + `</td>
                        <td>` + window.database[i][1] + `</td>
                        <td>` + window.database[i][2] + `</td>
                        <td>` + window.database[i][3] + `</td>
                        <td>` + window.database[i][4] + `</td>
                        <td>` + window.database[i][5] + `</td>
                        <td>` + window.database[i][6] + `</td>
                        <td>` + window.database[i][7] + `</td>
                        <td>` + window.database[i][8] + `</td>
                        <td><button type="button" class="btn btn-outline-danger" onclick="removeEntry(` + i + `)"><i class="bi bi-x-lg"></i></button></td>
                    </tr>
                `);
            }
        }
        console.log(window.database);
    }