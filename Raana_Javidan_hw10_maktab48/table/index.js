//////////////defining input cells////////
var table = document.getElementById("myTable");
// var row_counter = document.getElementById("row_counter");
var services = document.getElementById("services");
var description = document.getElementById("description");
var unit = document.getElementById("unit");
var quantity = document.getElementById("quantity");
var unit_price = document.getElementById("unit_price");
var off = document.getElementById("off");
var tax = document.getElementById("tax");
var total = document.getElementById("total");


////////////
let save = []
let total_sum = 0
let row_counter = 0
let total_tax = 0

function saveFunc(){
    let cell_array = {};
    let selectedTextService = services.options[services.selectedIndex].text;
    cell_array["key"]= row_counter;
    cell_array["services"]= services.value;
    cell_array["description"]= description.value;
    cell_array["unit"]= unit.value;
    cell_array["quantity"]= quantity.value;
    cell_array["unit_price"]= unit_price.value;
    cell_array["off"]= off.value;
    cell_array["tax"]= tax.value;
    cell_array["total"]= total.value;
    cell_array["svgs"]= '<td id="operations"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 9v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"/></svg></td>';



    ///////formuls////////////
    let multy = Number(quantity.value * unit_price.value)
    // console.log(multy);
    let off2 = off.value*1000
    // console.log(off2);
    let total2 = multy - off2 + Number(tax.value)
    cell_array["total"]= total2
    // console.log(total2);
    row_counter++;

    ///mohasebate kol//////////
    total_sum += total2
    save.push(cell_array)
    // console.log(save);
    total_sum += total2
    total_tax += Number(tax.value);
    document.getElementById('total_sum_p').innerText =`  مبلغ کل : ${total_sum} ریال `; 
    document.getElementById('total_tax_p').innerText =  `  مالیلات کل : ${total_tax} ریال `;
}

function myFunc(){
    let row = table.insertRow(-1)
    let cell = [];
    for (let i = 0; i<= 9; i++){
        cell[i]= row.insertCell(i);
    }

    cell[0].innerHTML = row_counter
    cell[1].innerHTML = save[save.length-1]["services"];
    cell[2].innerHTML = save[save.length-1]["description"];
    cell[3].innerHTML = save[save.length-1]["unit"];
    cell[4].innerHTML = save[save.length-1]["quantity"];
    cell[5].innerHTML = save[save.length-1]["unit_price"];
    cell[6].innerHTML = save[save.length-1]["off"];
    cell[7].innerHTML = save[save.length-1]["tax"];
    cell[8].innerHTML = save[save.length-1]["total"];
    cell[9].innerHTML ='<td id="operations"><svg xmlns="http://www.w3.org/2000/svg" width="15" height=15" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M16 9v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"/></svg></td>';

    

    services.value = "";
    description.value = "";
    unit.value = "";
    quantity.value = "";
    unit_price.value = "";
    off.value = "";
    tax.value = "";
    total.value = "";


}