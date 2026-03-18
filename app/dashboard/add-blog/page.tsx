'use client';

interface PDFViewerProps {
  fileId: string;
}

export default function PDFViewer({ fileId }: PDFViewerProps) {
  // download এর বদলে view দিন
  const pdfUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <embed
        src={pdfUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
}

// Use করুন
<PDFViewer fileId="1mA67ud3ND0wkA6ElOn6pO2-oBR2G6jDe" />
