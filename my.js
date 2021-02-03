function checkYear() {
    let year = document.getElementById('year').value;
    let result = '';
    can = year % 10;
    chi = year % 12;


    switch(can) {
        case 0:
            result = "Canh";
            break;
        case 1:
            result = "Tân";
            break;
        case 2:
            result = "Nhâm";
            break;
        case 3:
            result = "Quý";
            break;
        case 4:
            result = "Giáp";
            break;
        case 5:
            result = "Ất";
            break;
        case 6:
            result = "Bính";
            break;
        case 7:
            result = "Đinh";
            break;
        case 8:
            result = "Mậu";
            break;
        case 9:
            result = "Kỷ";
            break;
    }

    switch(chi) {
        case 0:
            result += " thân";
            break;
        case 1:
            result += " Dậu";
            break;
        case 2:
            result += " Tuất";
            break;
        case 3:
            result += " Hợi";
            break;
        case 4:
            result += " Tí";
            break;
        case 5:
            result += " Sửu";
            break;
        case 6:
            result += " Dần";
            break;
        case 7:
            result += " Mẹo";
            break;
        case 8:
            result += " Thìn";
            break;
        case 9:
            result += " Tị";
            break;
        case 10:
            result += " Ngọ";
            break;
        case 11:
            result += " Mùi";
            break;
    
    }

    document.getElementById('result').innerHTML = "Năm " + year + " là năm " + result

}