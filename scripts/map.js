function myFunction() {
    //document.getElementById("myFrame").src = "https://wwf.orghttps://www.google.com/maps?q=' + address + city + '&output=embed";
    let address = document.getElementById('addr-field').value;
    let city = document.getElementById('city-field').value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('MyFrame');
    iframeElement.src = place;
}