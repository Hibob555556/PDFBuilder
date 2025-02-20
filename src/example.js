/*  ***************************************
 *          Author: Cayden Lunt           *
 *         Creation Date: 2-19-25         *
 *          Last Update: 2-19-25          *
 ****************************************** */

// import needed deps
import genPdf from "./genPdf.js";

let pdf = genPdf.createPDF();                       // Create a PDF to modify    
pdf.fontSize(25).text('Hello, World!', 100, 100);     // Write text to the PDF
genPdf.savePDF(pdf);                                // save the PDF
