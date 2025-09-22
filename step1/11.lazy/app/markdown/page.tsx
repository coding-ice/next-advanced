"use client";

import React, { Suspense, useState } from "react";

const Preview = React.lazy(() => delayForDemo(import("./preview")));

const MarkdownPage = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [textValue, setTextValue] = useState("hi");

  return (
    <div>
      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <br />
      <label>
        show preview
        <input
          type="checkbox"
          onChange={(e) => setShowPreview(e.target.checked)}
        />
      </label>
      {showPreview && (
        <Suspense fallback={<div>loading...</div>}>
          <Preview value={textValue} />
        </Suspense>
      )}
    </div>
  );
};

export default MarkdownPage;

const delayForDemo = (promise) => {
  return new Promise((resolve) => setTimeout(resolve, 3000)).then(
    () => promise
  );
};
