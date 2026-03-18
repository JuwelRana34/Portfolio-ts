'use client';

export default function AddBlog() {
  // সরাসরি URL বসিয়ে দিন — props না
    const previewUrl = "https://drive.google.com/file/d/1loJSiozratYJ8chMCLOypcUDfUhxCKAz/preview";

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
                                                                                  style={{ border: 'none' }}
                                                                                          title="PDF Viewer"
                                                                                                />
                                                                                                    </div>
                                                                                                      );
                                                                                                      }
<AddBlog/>