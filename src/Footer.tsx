import React from 'react';

const Footer = () => {
  const years = [2025, 2024, 2023]; // Add more years as needed
  const baseUrl = '/will-you-be-my-valentine'; // Adjust the base URL as needed

  const handleYearClick = (year: number) => {
    window.location.href = `${baseUrl}/${year}/index.html`; // Adjust the path as needed
  };

  return (
    <footer className="fixed top-0 w-full bg-red-800 text-white py-2">
      <div className="container mx-auto text-center">
        <span>Select Year: </span>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className="mx-2 hover:underline"
          >
            {year}
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
