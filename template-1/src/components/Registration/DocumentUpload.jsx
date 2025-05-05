// components/Registration/DocumentUpload.jsx
import { useCallback, useState } from 'react';

export default function DocumentUpload({ documents, onUpload }) {
  const [dragging, setDragging] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUpload(e.dataTransfer.files);
    }
  }, [onUpload]);

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
        dragging ? 'border-gold-500 bg-gold-500/10' : 'border-white/30'
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <UploadIcon className="w-12 h-12 text-gold-500" />
        <p className="text-white font-medium">
          {dragging ? 'Drop your files here' : 'Drag & drop documents here'}
        </p>
        <p className="text-white/60 text-sm">or</p>
        <button className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white rounded-md transition-colors">
          Browse Files
        </button>
      </div>
    </div>
  );
}