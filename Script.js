

function copyText() { 
 
    
  document.getElementById("FinalResume").style.display ="flex"; //For Preview Resume Button
  document.getElementById("Dnbtn").style.display ="flex";       //For Download Resume Button
    
    
 


    // Heading Section:-

    var a1 = document.getElementById('FirstName').value;
    var a2 = document.getElementById('MiddleName').value;
    var a3 = document.getElementById('LastName').value;

    document.getElementById('H-Name').innerText =a1+" "+a2+" "+a3;

    

    var a4 = document.getElementById('Designation').value;
    var a5 = document.getElementById('Address').value;
    var a6 = document.getElementById('Email').value;
    var a7 = document.getElementById('PhoneNo').value;
 

    document.getElementById('H-Designation').innerText =a4;
    document.getElementById('H-Address').innerText =a5;
    document.getElementById('H-EmPh').innerText =a6+" | "+a7;
  


    // Career Objective section:-

    var b1 = document.getElementById('Summary').value;
    document.getElementById('CO-Summary').innerText =b1;

    //Experience Section:-
     
    // For Exp 1
     var b2 = document.getElementById('Ex-T1').value;
     var b3 = document.getElementById('Ex-C1').value;
     var b4 = document.getElementById('Ex-L1').value;
     var b5 = document.getElementById('Ex-Des1').value;
     var b6 = document.getElementById('Ex-Sd1').value;
     var b7 = document.getElementById('Ex-Ed1').value;
  
     document.getElementById('E1-T1C1L1').innerText =b2+" | "+b3+" | "+b4;
     document.getElementById('Edes1').innerText =b5;
     document.getElementById('From1').innerText = "From "+b6+"-"+b7;

    //For Exp2
     var b8 = document.getElementById('Ex-T2').value;
     var b9 = document.getElementById('Ex-C2').value;
     var b10 = document.getElementById('Ex-L2').value;
     var b11 = document.getElementById('Ex-Des2').value;
     var b12 = document.getElementById('Ex-Sd2').value;
     var b13 = document.getElementById('Ex-Ed2').value;
    
     document.getElementById('E2-T2C2L2').innerText =b8+" | "+b9+" | "+b10;
     document.getElementById('Edes2').innerText =b11;
     document.getElementById('From2').innerText = "From "+b12+"-"+b13;

       //For Exp3
       var b14 = document.getElementById('Ex-T3').value;
       var b15 = document.getElementById('Ex-C3').value;
       var b16 = document.getElementById('Ex-L3').value;
       var b17 = document.getElementById('Ex-Des3').value;
       var b18 = document.getElementById('Ex-Sd3').value;
       var b19 = document.getElementById('Ex-Ed3').value;
      
       document.getElementById('E3-T3C3L3').innerText =b14+" | "+b15+" | "+b16;
       document.getElementById('Edes3').innerText =b17;
       document.getElementById('From3').innerText = "From "+b18+"-"+b19;

 

    //Project Section:-

    var c1 = document.getElementById('PT-1').value;
    var c2 = document.getElementById('PD-1').value;
    var c3 = document.getElementById('PT-2').value;
    var c4 = document.getElementById('PD-2').value;
    var c5 = document.getElementById('PT-3').value;
    var c6 = document.getElementById('PD-3').value;

    document.getElementById('pt-1').innerText =c1;
    document.getElementById('pd-1').innerText =c2;
    document.getElementById('pt-2').innerText =c3;
    document.getElementById('pd-2').innerText =c4;
    document.getElementById('pt-3').innerText =c5;
    document.getElementById('pd-3').innerText =c6;

    //Education Section:-
  
    //10th:-

    var d1 = document.getElementById('School1').value;
    var d2 = document.getElementById('City1').value;
    var d4 = document.getElementById('Ed-Sd1').value;
    var d5 = document.getElementById('Ed-Ed1').value;
    var d6 = document.getElementById('Ed-B1').value;
    var d7 = document.getElementById('Per1').value;

    document.getElementById('Ed1').innerText =d1 +", "+d2;
    document.getElementById('EdFrom1').innerText =d4+"-"+d5;
    document.getElementById('Edd1').innerText =d6 + ","+"Secondary Education, Aggregate - "+d7; 
    
   
 
   

    //Skills Section:-


    var e1 = document.getElementById('Sk1').value;
    var e2 = document.getElementById('Sk2').value;
    var e3 = document.getElementById('Sk3').value;
    var e4 = document.getElementById('Sk4').value;
    var e5 = document.getElementById('Sk5').value;
    var e6 = document.getElementById('Sk6').value;

    document.getElementById('s1').innerText =e1;
    document.getElementById('s2').innerText =e2;
    document.getElementById('s3').innerText =e3;
    document.getElementById('s4').innerText =e4;
    document.getElementById('s5').innerText =e5;
    document.getElementById('s6').innerText =e6;

    //Achievements Section:-

    
    var f1 = document.getElementById('A1').value;
    var f2 = document.getElementById('A2').value;
    var f3 = document.getElementById('A3').value;
    var f4 = document.getElementById('A4').value;
    var f5 = document.getElementById('A5').value;
    var f6 = document.getElementById('A6').value;

    document.getElementById('a1').innerText =f1;
    document.getElementById('a2').innerText =f2;
    document.getElementById('a3').innerText =f3;
    document.getElementById('a4').innerText =f4;
    document.getElementById('a5').innerText =f5;
    document.getElementById('a6').innerText =f6;
   


// Download Resume in PDF Format:-

document.getElementById('download-btn').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;

  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Select the HTML element
  const content = document.getElementById('resume');

  // Use html2canvas to capture the HTML content
  html2canvas(content).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 190; // Width in mm (A4 page width - margins)
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Add the image to the PDF
    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save('Resume.pdf'); // Download the PDF
  });
});

 



    
    
 
    


    



     





    

  
}