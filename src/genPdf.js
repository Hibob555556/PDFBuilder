/*  ***************************************
 *          Author: Cayden Lunt           *
 *         Creation Date: 2-19-25         *
 *          Last Update: 3-3-25           *
 ****************************************** */

// import needed deps
import fs from "fs";
import PDFDocument from "pdfkit";

// declare colors
const RED = "\x1b[31m";
const WHITE = "\x1b[37m";

export class img {
  constructor(filePath, width = 250, height = 250) {
    this.filePath = filePath;
    this.width = width;
    this.height = height;
  }
}

export class txt {
  constructor(text, fontSize, fontColor, textDecoration = "none") {
    this.text = text;
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.textDecoration = textDecoration;
  }
}

// a class with functions to generate a PDF
export class genPDF {
  /**
   * @description Generates and returns a PDFDocument object to modify
   * @returns {PDFKit.PDFDocument}
   */
  createPDF() {
    const doc = new PDFDocument(); // create a PDFDocument
    doc.pipe(fs.createWriteStream("./Output/output.pdf")); // Pipe the PDF to a file
    return doc; // return the PDF to be modified
  }

  /**
   * @description Adds text to your PDF
   * @param {PDFKit.PDFDocument} doc
   * @param {txt} txt
   * @returns {PDFKit.PDFDocument}
   */
  addText(doc, txt) {
    let underline;
    let strike;
    let italicize;
    let bold;
    switch (txt.textDecoration.toLowerCase()) {
      case "underline":
        underline = true;
        break;
      case "strike":
        strike = true;
        break;
      case "italic":
        italicize = true;
        break;
      case "bold":
        bold = true;
        break;
      case "none":
        break;
      default:
        throw `${RED}Invalid Formatting Option${WHITE}`;
    }
    doc
      .fontSize(txt.fontSize)
      .fillColor(txt.fontColor)
      .text(txt.text, 0, 0, {
        underline: underline,
        strike: strike,
        oblique: italicize,
        stroke: bold,
      });
    return doc;
  }

  /**
   * @description Adds an image to your PDF
   * @param {PDFKit.PDFDocument} doc
   * @param {img} img
   * @returns {PDFKit.PDFDocument}
   */
  addImage(doc, img) {
    doc.image(img.filePath, 275, 0, { width: img.width, height: img.height });
    return doc;
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
