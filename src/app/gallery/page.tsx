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
      <button className="bg-gray-500" onClick={searchImages}>
        Search image
      </button>
      <section className="grid grid-cols-4 gap-8">
        {images.map(renderImageCard)}
      </section>
    </Template>
  );
}
