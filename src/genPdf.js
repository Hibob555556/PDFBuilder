/*  ***************************************
 *          Author: Cayden Lunt           *
 *         Creation Date: 2-19-25         *
 *          Last Update: 2-19-25          *
 ****************************************** */

// import needed deps
import fs from "fs";
import PDFDocument from "pdfkit";

// a class with functions to generate a PDF
class genPDF {
  /**
   * @description Generates and returns a PDFDocument object to modify
   * @returns {PDFKit.PDFDocument}
   */
  createPDF() {
    const doc = new PDFDocument();                            // create a PDFDocument
    doc.pipe(fs.createWriteStream("./Output/output.pdf"));   // Pipe the PDF to a file
    return doc;                                               // return the PDF to be modified
  }

  /**
   * @description Save the PDF
   * @param {PDFKit.PDFDocument} doc
   * @example genPdf.savePDF(doc);
   */
  savePDF(doc) {
    doc.end();
  }
}

// export the class to be used
export default new genPDF();
