'use client';

interface PDFViewerProps {
  fileId: string;
}

export default function PDFViewer({ fileId }: PDFViewerProps) {
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <object
        data={pdfUrl}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      >
        <p>
          PDF দেখা যাচ্ছে না।{' '}
          
            href={`https://drive.google.com/file/d/${fileId}/view`}
            target="_blank"
            rel="noopener noreferrer"
          >
            এখানে দেখুন
          </a>
        </p>
      </object>
    </div>
  );
}
