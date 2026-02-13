import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import AlbumCover from "@/components/AlbumCover";
import AlbumCarousel from "@/components/AlbumCarousel";
import { useAlbums } from "@/hooks/use-sanity";

const fallbackAlbums = [
  {
    _id: "1",
    title: "Lab Events",
    description: "Team gatherings and celebrations",
    photos: [
      "https://cdn.sanity.io/images/m2fbgni0/production/392ffb473a5a29be068a84ca60d9c69f32ee5b7f-618x410.jpg",
      "https://cdn.sanity.io/images/m2fbgni0/production/1087ec51543631a75ecb63a45e4a9c064dab8796-618x410.jpg",
      "https://cdn.sanity.io/images/m2fbgni0/production/9ef8e259acb8b87d2672e4d67ed618ec61dc6baf-620x465.jpg",
    ],
  },
  {
    _id: "2",
    title: "Conferences",
    description: "Research presentations and networking",
    photos: [
      "https://cdn.sanity.io/images/m2fbgni0/production/f10e49c4f6d5c5b53ac682534b32e508d58f9ce6-620x465.jpg",
    ],
  },
];

const Gallery = () => {
  const { data: albums } = useAlbums(fallbackAlbums);
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  return (
    <PageLayout>
      <section className="py-24 bg-background">
        <div className="container max-w-6xl">
          <SectionHeading title="Group Life" subtitle="A glimpse into our research environment, conferences, collaborations, and group activities." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album: any) => (
              <AlbumCover
                key={album._id}
                photos={album.photos}
                title={album.title}
                onClick={() => setSelectedAlbum(album)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedAlbum && (
          <AlbumCarousel
            photos={selectedAlbum.photos}
            title={selectedAlbum.title}
            onClose={() => setSelectedAlbum(null)}
          />
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default Gallery;
