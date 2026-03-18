'use client';

export default function PDFViewer({ fileId }: { fileId: string }) {
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
    }}>
      <iframe
        src={previewUrl}
        width="100%"
        height="700px"
        style={{ border: 'none', display: 'block' }}
        title="PDF Viewer"
        allow="autoplay"
      />
    </div>
  );
}

// Use করুন — prop নাম fileId
<PDFViewer fileId="1mA67ud3ND0wkA6ElOn6pO2-oBR2G6jDe" />
