'use client';

// 1. Define the TypeScript interface for your props
interface AddBlogProps {
  driveFileId: string;
}

// 2. Apply the interface to the component
export default function AddBlog({ driveFileId }: AddBlogProps) {
  const previewUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

  return (
    <div 
      style={{ 
        width: '100%', 
        maxWidth: '1000px', // Prevents it from getting absurdly wide on large screens
        margin: '0 auto',   // Centers the component
        borderRadius: '12px', 
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' // Adds a subtle, modern shadow
      }}
    >
      <object
        data={previewUrl}
        type="application/pdf"
        width="100%"
        height="700px"
        aria-label="PDF Document Viewer"
      >
        <iframe
          src={previewUrl}
          width="100%"
          height="700px"
          style={{ border: 'none' }}
          title="Google Drive PDF Preview"
        >
          <p style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
            আপনার browser PDF support করে না।{' '}
            <a 
              href={previewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#2563eb', textDecoration: 'underline' }}
            >
              এখানে দেখুন
            </a>
          </p>
        </iframe>
      </object>
    </div>
  );
}

// Use করুন
<AddBlog driveFileId="1loJSiozratYJ8chMCLOypcUDfUhxCKAz" />

