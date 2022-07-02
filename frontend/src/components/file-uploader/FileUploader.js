import { useRef, useState } from 'react';
import { FileButton } from './styledFileUploader';
import { Label } from '../startup-form/styledStartupForm';

const FileUploader = ({ message, uploadType, label, labelType, fieldName, setFieldValue }) => {
  const fileInput = useRef(null);
  const filePreview = useRef();
  const [buttonText, setButtonText] = useState(message);
  const [error, setError] = useState(false);

  function handleClick(e) {
    fileInput.current.click();
  }

  // ==== Begin file selection handling ====
  // store file and update display
  function handleChange(e) {
    if (e.target.value.length > 0) {
      // Display loading UX
      filePreview.current.style.backgroundImage = null;
      setButtonText('Loading...');
      // upload file
      const selectedFile = e.target.files[0];
      // update displays
      handleFileInput(selectedFile);
      // update form value
      setFieldValue(`${fieldName}`, selectedFile);
    }
  }

  // === Begin updating display ===
  // Determines file type uploaded
  function handleFileInput(selectedFile) {
    if (uploadType === 'image') {
      handleImageFile(selectedFile);
    }
    if (uploadType === 'pdf') {
      handlePdfFile(selectedFile);
    }
  }

  // Display selected file path as button text
  function handlePdfFile(selectedFile) {
    if (selectedFile.type === 'application/pdf' && selectedFile.size < 10485760){
      setButtonText(selectedFile.name);
      setError(false);
    } else {
      setButtonText('Must be a PDF under 10 MB');
      setError(true);
    }
  }

  // Display selected image and remove button text
  function handleImageFile(selectedFile) {
    if (selectedFile.size < 2097152 && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
      setImageBackground(selectedFile);
      setButtonText('');
      setError(false);
    } else {
      setButtonText('SELECT JPG/PNG UNDER 2MB');
      setError(true);
    }
  }

  // Display selected image as input background
  function setImageBackground(selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    filePreview.current.style.backgroundImage = `url(${imageUrl})`;
  }
  // === End updating display ===
  // ===== End file selection handling =====

  return (
    <>
      <Label labelType={labelType} style={{ color: error && '#ff0000' }}>
        {label}
        <input
          type="file"
          ref={fileInput}
          name={fieldName}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <FileButton
          type="button"
          uploadType={uploadType}
          onClick={handleClick}
          ref={filePreview}
          error={error}
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {buttonText}
        </FileButton>
      </Label>
    </>
  );
};

export default FileUploader;
