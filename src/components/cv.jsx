import React, { useState } from 'react';

function CVPage() {
  const [pdfVisible, setPdfVisible] = useState(false);

  const handleShowPdf = () => {
    setPdfVisible(true);
  };

  return (
    <div>
      <h1>My CV</h1>
      <img src="/assets/cv.jpg" alt="Soft pink and baby blue water ripples together in a subtle texture." />
      <p>We developed brand positioning and design assets for the launch of a new colored water product.</p>
      <button onClick={handleShowPdf}>See PDF</button>
      {pdfVisible && (
        <iframe src="/assets/649369845.pdf" className="frame" />
      )}
    </div>
  );
}

export default CVPage;
