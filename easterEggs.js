///// calculate age in years and days
const birthDate = new Date(253536050000)
const now = Date.now()
const years = document.getElementById("years")
const days = document.getElementById("days")
let ageMs = now - birthDate
daysMs = ageMs % 31536000000 
years.innerText = Math.round(ageMs/31536000000)
days.innerText = Math.round(daysMs/86400000)
///export a dynamic verion of page as downlodable pdf
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

