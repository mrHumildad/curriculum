

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

