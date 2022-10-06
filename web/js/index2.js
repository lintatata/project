
document.querySelector(".keep-but").onclick=function(){
  html2canvas(document.querySelector(".mid-box")).then(canvas => {
    
    var contentWidth = canvas.width;
    var contentHeight = canvas.height;
    var imgWidth = 595.28;
    var imgHeight = 552.28/contentWidth * contentHeight;
    var pageData = canvas.toDataURL('image/png',1.0);
    const pdf = new jspdf.jsPDF('', 'pt', 'a4')
    pdf.addImage(pageData,'jpeg', 0, 0, imgWidth, imgHeight);
    pdf.save(`1.pdf`)
  });
}