import React, { useState } from "react";
import FormSelect from "./FormSelect";
import { saveAs } from "file-saver";
import useColor from "./../../hooks/useColor";
import ErrorToast from "./ErrorToast";
import { Toast } from "bootstrap";
function Download({ urls }) {
  const { BRAND_COLOR } = useColor();
  const [currentOption, setCurrentOption] = useState(2);
  const [error, setError] = useState(false);
  const options = [];
  if (!urls) return;
  if (urls.raw) options.push({ label: "High", value: 3 });
  if (urls.full) options.push({ label: "Normal", value: 2 });
  if (urls.regular) options.push({ label: "Low", value: 1 });
  let url;
  if (currentOption === 1) url = new URL(urls.raw);
  else if (currentOption === 2) url = new URL(urls.full);
  else url = new URL(urls.regular);
  const saveImage = (url) => {
    try {
      saveAs(url, "PickSomePic Wallpapers");
    } catch (error) {
      setError(true);
    }
  };
  if (error) {
    <ErrorToast
      error="Can't Download the Pic, try Again..."
      id="downloadError"
    />;
    const toast = new Toast(document.getElementById("downloadError"));
    toast.show();
  }
  return (
    <div className="d-flex">
      <FormSelect
        options={options}
        value={currentOption}
        onChange={(currentOption) => setCurrentOption(currentOption)}
      />
      <button
        className={`download btn btn-outline-${BRAND_COLOR} mx-3`}
        onClick={() => saveImage(url.toString())}
      >
        Free Download
      </button>
    </div>
  );
}

export default Download;
