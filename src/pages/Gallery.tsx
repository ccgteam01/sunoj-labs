import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import AlbumCover from "@/components/AlbumCover";
import AlbumCarousel from "@/components/AlbumCarousel";
import { useAlbums } from "@/hooks/use-sanity";
import { ArrowLeft } from "lucide-react";
import { sizedImage } from "@/lib/sanity";

const fallbackAlbums = [
  {
    _id: "1",
    title: "RBS Group",
    description: "Team gatherings and celebrations",
    photos: [
      "https://cdn.sanity.io/images/m2fbgni0/production/392ffb473a5a29be068a84ca60d9c69f32ee5b7f-618x410.jpg",
      "https://cdn.sanity.io/images/m2fbgni0/production/1087ec51543631a75ecb63a45e4a9c064dab8796-618x410.jpg",
      "https://cdn.sanity.io/images/m2fbgni0/production/9ef8e259acb8b87d2672e4d67ed618ec61dc6baf-620x465.jpg",
            "https://cdn.sanity.io/images/m2fbgni0/production/f10e49c4f6d5c5b53ac682534b32e508d58f9ce6-620x465.jpg",

    ],
  }
];

const Gallery = () => {
  const { data: albums } = useAlbums(fallbackAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const visibleAlbums = (albums as any[]).filter((album) => album.photos?.length > 0);

  return (
    <PageLayout>
      <PageHero
        title="Group Life"
        description="A glimpse into our research environment, conferences, collaborations, and group activities."
      />

      <section className="py-12 bg-transparent">
        <div className="container">
          {!selectedAlbum ? (
            /* Album covers */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleAlbums.map((album) => (
                <AlbumCover
                  key={album._id}
                  photos={album.photos}
                  title={album.title}
                  onClick={() => setSelectedAlbum(album)}
                />
              ))}
            </div>
          ) : (
            /* All photos of the opened album, in the page */
            <div>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={18} /> All albums
                </button>
                <h2 className="text-2xl font-heading font-bold text-foreground">{selectedAlbum.title}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {(selectedAlbum.photos as string[]).map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="aspect-square overflow-hidden rounded-lg border border-border group"
                  >
                    <img
                      src={sizedImage(photo, 600)}
                      alt={`${selectedAlbum.title} ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedAlbum && lightboxIndex !== null && (
          <AlbumCarousel
            photos={selectedAlbum.photos ?? []}
            title={selectedAlbum.title}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;
