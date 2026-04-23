const { Document, Packer, Paragraph, TextRun, Header, Footer, AlignmentType, PageNumber, HeadingLevel, BorderStyle, WidthType, ShadingType } = require('docx');
const fs = require('fs');

// Create a reference template docx with professional styles
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Times New Roman", size: 24 } } // 12pt
    },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 36, bold: true, color: "1B3A5C", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "1B3A5C", font: "Arial" },
        paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "2E5984", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, color: "3D7AB5", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 60 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1200, bottom: 1440, left: 1440 },
        size: { width: 12240, height: 15840 } // Letter
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "VN-XUONG-UUV", font: "Arial", size: 16, color: "999999" })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Workshop X — ", font: "Arial", size: 16, color: "999999" }),
          new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "999999" }),
          new TextRun({ text: " / ", font: "Arial", size: 16, color: "999999" }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Arial", size: 16, color: "999999" })
        ]
      })] })
    },
    children: [
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Reference Template")] }),
      new Paragraph({ children: [new TextRun("Body text placeholder.")] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("D:/Workshop_X/1_Projects/VN-XUONG-UUV/Phase0-PreStudy/reference.docx", buf);
  console.log("Reference template created.");
});
