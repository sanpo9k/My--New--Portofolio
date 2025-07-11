import React from "react";

function ExperiencePage() {
  return (
    <div>
      {/* Section */}
      <div className="flex justify-between items-center pb-2">
        <div className="pt-4">
          <h1 className="underline font-bold text-2xl">&gt;&gt; Sari Tirta Group</h1>
        </div>
        <div>
          <h1>(February - August 2025)</h1>
        </div>
      </div>
      <div>
        <h6 className="text-sm font-semibold"> &#x2015; Software Engineer Intern</h6>
      </div>
      <div>
        <ul className="text-sm list-disc pl-5">
          <li>Conducted multiple tests to ensure the functionality and reliability of the internal procurement application.</li>
          <li>Performed thorough debugging to identify and resolve issues within the internal procurement system.</li>
          <li>Implemented and enhanced various user interface components to improve the application's usability.</li>
        </ul>
      </div>
      {/* Section */}
      <div className="flex justify-between items-center">
        <div className="pt-6">
          <h1 className="underline font-bold text-2xl">&gt;&gt; PT. Wide & Pin</h1>
        </div>
        <div>
          <h1>(September - August 2024)</h1>
        </div>
      </div>
      <div>
        <h6>&#x2015; Administration Support Intern</h6>
      </div>
      <div>
        <ul className="text-sm list-disc pl-5">
          <li>Developed a strong understanding of the professional work environment.</li>
          <li>Strengthened office administration skills.</li>
          <li>Gained confidence in engaging with diverse teams.</li>
        </ul>
      </div>
    </div>
  );
}

export default ExperiencePage;
