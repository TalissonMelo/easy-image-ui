"use client";

import { ImageCard } from "@/components/ImageCard";
import { Template } from "@/components/Template";
import { useImageService } from "../services/image/image.service";
import { useState } from "react";
import { Image } from "../services/image/image.resource";

export default function GalleryPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);

  async function searchImages() {
    const result = await useService.get();
    setImages(result);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard
        key={image.url}
        name={image.name}
        url={image.url}
        size={image.size}
        extension={image.extension}
        uploadDate={image.uploadDate}
      />
    );
  }

  return (
    <Template>
      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <input
            type="text"
            className="border ox-3 py-2 rounded-lg text-gray-900"
            placeholder="Type Name or Tags"
          />
          <select className="border px-4 py-2 rounded-lg text-gray-900">
            <option value="">All formats</option>
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="GIF">GIF</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={searchImages}
          >
            Search
          </button>
          <button className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg">
            Add New
          </button>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-8">
        {images.map(renderImageCard)}
      </section>
    </Template>
  );
}
