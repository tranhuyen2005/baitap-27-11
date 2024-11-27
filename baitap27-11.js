//bài 1
function checkAge(age) {
    if(age>=18) {
        return "Người lớn";
    } else {
        return "Trẻ vị thành niên";
    }
}
//bài 2
function checkEvenOdd(number) {
    if(number%2==0) {
        return "Chẵn";
    } else {
        return "Lẻ";
    }
}
//bài 3
function compareNumbers(a,b) {
    if (a>b) {
        return "a lớn hơn b";
    } else if(b>a) {
        return "b lớn hơn a";
    } else {
        return "Hai so bằng nhau";
    }
}
function checkInteger(number) {
    if(number%1==0) {
        return "Là số nguyên";
    } else {
        return "Không là số nguyên";
    }
}
function convertNumberToMonth(month) {
    switch(month) {
        case 1:
            return "Tháng Một";
            break;
        case 2:
            return "Tháng Hai";
            break;
        case 3:
            return "Tháng Ba";
            break;
        case 4:
            return "Tháng Tư";
            break;
        case 5:
            return "Tháng Năm";
            break;
        case 6:
            return "Tháng Sáu";
            break;
        case 7:
            return "Tháng Bảy";
            break;
        case 8:
            return "Tháng Tám";
            break;
        case 9:
            return "Tháng Chín";
            break;
        case 10:
            return "Tháng Mười";
            break;
        case 11:
            return "Tháng Mười Một";
            break;
        case 12:
            return "Tháng Mười Hai";
            break;
        default:
            return "Tháng không hợp lệ";
            break;
    }
}
function calculateShipping(khoangcach) {
    if(khoangcach<=5) {
        return 7000;
    } else {
        return 7000+(khoangcach-5)*2000;
    }
}
function gradeExam(diem) {
    if(diem>=90) {
        return "Xuất sắc";
    } else if(diem>=80 && diem<90) {
        return "Giỏi";
    } else if(diem>=70 && diem<80) {
        return "Khá";
    } else if(diem>=60 && diem<70) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}
function runTests() {
    console.log("Bài 1: Kiểm tra tuổi");
    console.log(checkAge(18));//người lớn
    console.log(checkAge(15));//trẻ vị thành niên

    console.log("\n Bài 2: Kiểm tra số chẵn lẻ");
    console.log(checkEvenOdd(10));//chẵn
    console.log(checkEvenOdd(9));//lẻ

    console.log("\n Bài 3: So sánh");
    console.log(compareNumbers(2,10));
    console.log(compareNumbers(12,1));
    console.log(compareNumbers(12,12));

    console.log("Bài 4: Kiểm tra số nguyên");
    console.log(checkInteger(2));
    console.log(checkInteger(12.2));

    console.log("\n Bài 5: Chuyển số thành tháng");
    console.log(convertNumberToMonth(1));
    console.log(convertNumberToMonth(13));

    console.log("\n Bài 6: Tính phí vận chuyển");
    console.log(calculateShipping(4));//7000
    console.log(calculateShipping(10));//7000 + 5 * 2000 = 12000

    console.log("\n Bài 7: Xếp loại điểm thi");
    console.log(gradeExam(95)); // Xuất sắc
    console.log(gradeExam(85)); // Giỏi
    console.log(gradeExam(75)); // Khá
    console.log(gradeExam(65)); // Trung bình
    console.log(gradeExam(50)); // Yếu
}
runTests();