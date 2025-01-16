import { ImageCard } from "@/components/ImageCard";
import { Template } from "@/components/Template";

export default function GalleryPage() {
  return (
    <Template>
      <section className="grid grid-cols-3 gap-8">
        <ImageCard></ImageCard>
      </section>
    </Template>
  );
}
