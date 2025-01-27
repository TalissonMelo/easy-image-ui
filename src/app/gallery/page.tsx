"use client";

import { ImageCard } from "@/components/ImageCard";
import { Template } from "@/components/Template";
import { useImageService } from "../services/image/image.service";
import { useState } from "react";
import { Image } from "../services/image/image.resource";
import Link from "next/link";
import { Button } from "@/components/button/Button";
import { InputText } from "@/components/input/InputText";
import { useNotification } from "@/components/notification";
import { AuthenticatedPage } from "@/components/AuthenticatedPage";

export default function GalleryPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const notification = useNotification();

  async function searchImages() {
    setLoading(true);
    const result = await useService.get(query, extension);
    setImages(result);
    setLoading(false);

    if (!result.length) {
      notification.notify("No results found!", "warning");
    }
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
    <AuthenticatedPage>
      <Template loading={loading}>
        <section className="flex flex-col items-center justify-center my-5">
          <div className="flex space-x-4">
            <InputText
              placeholder="Type Name or Tags"
              onChange={(event) => setQuery(event.target.value)}
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

            <Button
              style="bg-blue-500 hover:bg-blue-300"
              label="Search"
              onClick={searchImages}
            />

            <Link href="/form">
              <Button
                style="bg-yellow-500 hover:bg-yellow-300"
                label="Add New"
              />
            </Link>
            <Link href="/login">
              <Button
                style="bg-red-500 hover:bg-red-300"
                type="button"
                label="Cancel"
              />
            </Link>
          </div>
        </section>
        <section className="grid grid-cols-4 gap-8">
          {images.map(renderImageCard)}
        </section>
      </Template>
    </AuthenticatedPage>
  );
}
