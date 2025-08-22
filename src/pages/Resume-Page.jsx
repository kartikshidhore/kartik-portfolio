import {useState, useRef, useEffect} from "react";
import { Document, Page, pdfjs } from "react-pdf";
//import worker from 'pdfjs-dist/build/pdf.worker?worker';

//pdfjs.GlobalWorkerOptions.workerSrc = worker;

function Resume(){
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }
    return(
        <div className="flex flex-col items-center gap-4 p-4">
            <Document file="/Kartik-Resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="shadow-md"   
            >
            {Array.from({ length: numPages || 0 }, (_, index) =>(
                <Page
                key={`page_${index+1}`}
                pageNumber={index+1}
                width = {800}
                />
            ))}
            </Document>

            <a
            href="/Kartik Shidhore-July Resume.pdf"
            download
            className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded hover:scale-105 transition"
            >Download PDF</a>
        </div>
    );
};

export default Resume;