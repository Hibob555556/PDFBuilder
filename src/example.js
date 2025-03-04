/*  ***************************************
 *          Author: Cayden Lunt           *
 *         Creation Date: 2-19-25         *
 *          Last Update: 2-19-25          *
 ****************************************** */

// import needed deps
import { img, txt, genPDF } from "./genPdf.js";

const pdfBuilder = new genPDF();

let pdf = pdfBuilder.createPDF();
let text = new txt("Hello PDFBuilder!", 20, "blue");
// Photo by Mario Cuadros: https://www.pexels.com/photo/looking-through-a-aircraft-window-3082851/
let image = new img("./src/Image.jpg", 450, 300);

pdfBuilder.addImage(pdf, image);
pdfBuilder.addText(pdf, text);

pdfBuilder.savePDF(pdf);
