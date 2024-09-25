function caesarCipher(str, shift) {  let result = "";  for (let i = 0; i < str.length; i++) {    let charCode = str.charCodeAt(i);    if (charCode >= 65 && charCode <=  90) {      result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);    } else if (charCode >= 97 && charCode <= 122) {      result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);       } else {      result += str[i];     }  }   return result;}

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has('x')) {
    const yourCompany = document.getElementById('your-company');
    const companyName = caesarCipher(searchParams.get('x'), -3);
    yourCompany.innerText = companyName
}

console.log(caesarCipher('lalluvia.com', 3))

///export a dynamic version of page as downlodable pdf
function makePdf() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF('l', 'mm', [1500, 1400]);
    var pdfjs = document.querySelector('#divID');
    doc.html(pdfjs, {
        callback: function(doc) {
            doc.save("newpdf.pdf");
        },
        x: 12,
        y: 12
    });               
} 

