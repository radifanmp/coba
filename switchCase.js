var undian = prompt("Selamat Anda Mendapatkan undian dari dumbways.id, silakan pilih hadiah dari 1 - 3 : ");

var hadiah = "";

switch(undian){
    case "1":
        hadiah = "Kaos";
        break;

    case "2":
        hadiah = "Macbook Air";
        break;

    case "3":
        hadiah = "Stiker";
        break;

    default:
        document.write("<h3>Yang bener pilih hadiah nya kalo mau dapat</h3>")
}


if(hadiah === ""){
    document.write("<h4>Kamu gagal dapat hadiah makanya jangan asal</h4>")
}

else{
    document.write("<h4>Selamat kamu dapat hadiah "+ hadiah +"</h4>")
}