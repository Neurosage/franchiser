let date = new Date(2022, 0, 1);

let div = document.querySelector("#continue");
div.addEventListener("click", function(e) {
    cont_date();
})

function date_to_string(d) {

    let result = "";
    let m = d.getMonth();
    switch(m) {
        case 0: result = "January"; break;
        case 1: result = 'February';break;
        case 2: result=('March');break;
        case 3: result=('April');break;
        case 4: result=('May');break;
        case 5: result=('June');break;
        case 6: result=('July');break;
        case 7: result=('August');break;
        case 8: result=('September');break;
        case 9: result=('October');break;
        case 10: result=('November');break;
        case 11: result=('December');break;
    }

    let date = d.getDate();
    let date_text = date.toString();

    result =result.concat(' ');
    result=result.concat(date_text);
    result=result.concat(', ');

    let year_text = d.getFullYear().toString();
    result=result.concat(year_text);

    return result;

}

function put_date_button() {
    let str = date_to_string(date);
    let date_div = document.querySelector("#date");

    date_div.innerHTML = str;
}

function cont_date() {
    date.setDate(date.getDate() + 1);
    put_date_button();
}