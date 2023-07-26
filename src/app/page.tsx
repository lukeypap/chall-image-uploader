import Footer from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 pb-4">
      <ImageUploader />
      <Footer />
    </main>
  );
}
