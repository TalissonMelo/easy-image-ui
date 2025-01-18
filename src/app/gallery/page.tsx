"use client";

import { ImageCard } from "@/components/ImageCard";
import { Template } from "@/components/Template";
import { useImageService } from "../services/image/image.service";
import { useState } from "react";
import { Image } from "../services/image/image.resource";
import Link from "next/link";

export default function GalleryPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
    setLoading(true);
    const result = await useService.get(query, extension);
    setImages(result);
    setLoading(false);
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
    <Template loading={loading}>
      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <input
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="border ox-3 py-2 rounded-lg text-gray-900"
            placeholder="Type Name or Tags"
          />
          <select
            onChange={(event) => setExtension(event.target.value)}
            className="border px-4 py-2 rounded-lg text-gray-900"
          >
            <option value="">All formats</option>
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="GIF">GIF</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300"
            onClick={searchImages}
          >
            Search
          </button>
          <Link href="/form">
            <button className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-green-300">
              Add New
            </button>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-8">
        {images.map(renderImageCard)}
      </section>
    </Template>
  );
}
