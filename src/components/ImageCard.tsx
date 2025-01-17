"use client";

import { Image } from "@/app/services/image/image.resource";

export const ImageCard: React.FC<Image> = (props: Image) => {
  function download() {
    window.open(props.url, "_blank");
  }

  return (
    <div className="card relative bg-white rounded-md shadow-md transition-tranform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
      <img
        onClick={download}
        src={props.url}
        className="h-56 w-full object-cover rounded-t-md"
        alt=""
      />
      <div className="card-body p-4">
        <h5 className="text-xl font-semibold mb-2 text-gray-600">
          {props.name}
        </h5>
        <p className="text-gray-600">{props.extension}</p>
        <p className="text-gray-600">{formatBytes(props.size)}</p>
        <p className="text-gray-600">{props.uploadDate}</p>
      </div>
    </div>
  );
};

function formatBytes(bytes: number = 0, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
