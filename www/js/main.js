function addEntry(){
    eel.addEntry(
        $("#lastname").val(),
        $("#firstname").val(),
        $("#surname").val(),
        $("#date").val(),
        $("#phone").val(),
        $("#email").val(),
        $("#speciality").val(),
        $("#year_of_entry").val(),
        $("#group").val()
    );
    window.database[Object.keys(window.database).length + 1] = [
        $("#lastname").val(),
        $("#firstname").val(),
        $("#surname").val(),
        $("#date").val(),
        $("#phone").val(),
        $("#email").val(),
        $("#speciality").val(),
        $("#year_of_entry").val(),
        $("#group").val()
    ];
    $("#database_table").empty();
    readDatabase(window.database);
}
function removeEntry(i){
    delete window.database[i];
    $("#database_table").empty();
    eel.removeEntry(window.database);
    readDatabase(window.database);
}