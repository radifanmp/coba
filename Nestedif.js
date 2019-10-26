var username = prompt("Username: ");
var password = prompt("Password: ");

if(username == "dumbways.id"){
    if(password == "dumbways123"){
        document.write("<h2>Selamat Anda Berhasil Login di dumbways.id</h2>")
    }

    else{
        document.write("<p>Password Salah, Coba Lagi</p>");
    }
}

else{
    document.write("<p>Anda Ilegal</p>")
}