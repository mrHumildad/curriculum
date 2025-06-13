function caesarCipher(str, shift) {  let result = "";  for (let i = 0; i < str.length; i++) {    let charCode = str.charCodeAt(i);    if (charCode >= 65 && charCode <=  90) {      result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);    } else if (charCode >= 97 && charCode <= 122) {      result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);       } else {      result += str[i];     }  }   return result;}

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has('x')) {
    const yourCompany = document.getElementById('your-company');
    const companyName = caesarCipher(searchParams.get('x'), -3);
    yourCompany.innerText = companyName
}

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
const langButt = document.getElementById('traducer');
function getBeforeQuestionMark(str) {
    const questionIndex = str.indexOf('?'); // Find the position of the '?'
    
    if (questionIndex === -1) {
        return str; // If '?' is not found, return the whole string
    }
    
    return str.substring(0, questionIndex); // Return the string from the beginning to the '?'
}

// Function to return the string from the first occurrence of '?' to the end
/* function getAfterQuestionMark(str) {
    const questionIndex = str.indexOf('?'); // Find the position of the '?'
    
    if (questionIndex === -1) {
        return ''; // If '?' is not found, return an empty string
    }
    
    return str.substring(questionIndex); // Return the string from '?' to the end
} */
const swapLang = () => {
    const URL = window.location.href;
    lang = document.documentElement.lang;
    const x = getAfterQuestionMark(URL);
    const cleanURL = document.URL.substr(0,document.URL.lastIndexOf('/'));
		console.log(cleanURL)
    /* let array = ['en', 'es', 'it', 'ca'];
    let suffix = ['', 'index_ES.html', '_IT', '_CA']
    let index = array.indexOf(lang);
    if (index === array.length - 1) {
      index = 0
    } else index++;
		window.location.href = cleanURL + suffix[index] + x; */
}
langButt.addEventListener('click', swapLang)



