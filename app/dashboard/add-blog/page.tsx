'use client';

export default function AddBlog({ driveFileId }) {
  const previewUrl = 
    `https://drive.google.com/file/d/${driveFileId}/preview`;

  return (
    <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <object
        data={previewUrl}
        type="application/pdf"
        width="100%"
        height="700px"
      >
        <iframe
          src={previewUrl}
          width="100%"
          height="700px"
          style={{ border: 'none' }}
        >
          <p>
            আপনার browser PDF support করে না।
            <a href={previewUrl} target="_blank">
              এখানে দেখুন
            </a>
          </p>
        </iframe>
      </object>
    </div>
  );
}

// Use করুন
<PDFViewer driveFileId="1loJSiozratYJ8chMCLOypcUDfUhxCKAz" />

