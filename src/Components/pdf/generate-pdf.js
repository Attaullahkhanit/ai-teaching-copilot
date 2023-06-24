import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ImDownload, ImDownload3 } from 'react-icons/im';
import DocumentFileCard2 from '../DownloadCard/DocumentFileCard2';
import domToImage from 'dom-to-image';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PDFGenerator = (props) => {
  const generatePDF = () => {
    console.log("dododo")

   
// const htmlString =props.content
// // Register fonts
// pdfMake.vfs = pdfFonts.pdfMake.vfs; 
// // Convert HTML to image data URL
// domToImage.toPng(document.getElementById('html-container'))
//   .then(function (dataUrl) {
//     // Convert image data URL to pdfMake image object
//     const image = {
//       image: dataUrl,
//       width: 500, // Replace with the actual width of the HTML container
//       height: 300 // Replace with the actual height of the HTML container
//     };

//     // Create a PDF document
//     const documentDefinition = {
//       content: [
//         { text: 'HTML to PDF', style: 'header' },
//         image
//       ]
//     };
//     const pdfDoc = pdfMake.createPdf(documentDefinition); 
//     // Download the PDF file
//     pdfDoc.download('example.pdf');
//   })
//   .catch(function (error) {
//     console.error('Error converting HTML to image:', error);
//   });
    const docDefinition = {
      content: [
        {
          text: "Teaching Copilot.com",
          style: 'header'
        },
        {
          
          text: props.content.replace(/<br\s*\/?>/gi, "\n"),
          style: 'html'
        }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 20]
        },
        body: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  };

  return ( 
    <>
   { props.isItDownLoadLst?
    <button onClick={generatePDF} style={{  border:"none", background:"none", width: "100%"}}><DocumentFileCard2 title={props.title?props?.title:"content... "} fileid={props.fileid} className='fs-2 text-info pb-2 ' style={{float:"right"}}/> <p style={{color:"grey"}}>Created At {props?.created_at}</p>
    </button>:
       <ImDownload3 onClick={generatePDF} className='fs-2  ' style={{cursor: "pointer", padding: "3px" , float: "right", position: "relative", zIndex: 99999,  float: "right" , float:"right", color: '#036CFF'}}/> }

       </>
  );
};

export default PDFGenerator;


