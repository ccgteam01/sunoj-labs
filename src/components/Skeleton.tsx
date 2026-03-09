const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const HeroSkeleton = () => (
  <section className="relative h-screen w-full bg-gray-900">
    <Skeleton className="absolute inset-0" />
  </section>
);

export const ResearchInterestsSkeleton = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-64 mx-auto mb-3" />
        <Skeleton className="h-1 w-24 mx-auto" />
      </div>
      <div className="flex flex-col items-center">
        <Skeleton className="w-[280px] h-[280px] md:w-[240px] md:h-[240px] rounded-xl" />
        <div className="flex gap-6 mt-6">
          <Skeleton className="w-12 h-12 rounded-full" />
          <Skeleton className="w-12 h-12 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

export const RecentNewsSkeleton = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-64 mx-auto mb-3" />
        <Skeleton className="h-1 w-24 mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start gap-3">
              <Skeleton className="w-9 h-9 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const RecentPublicationsSkeleton = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <Skeleton className="h-12 w-80 mx-auto mb-3" />
        <Skeleton className="h-1 w-24 mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
            <Skeleton className="w-full h-56" />
            <div className="p-6 space-y-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CoursesSkeleton = () => (
  <div className="grid sm:grid-cols-2 gap-3">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <Skeleton key={i} className="h-16 rounded-lg" />
    ))}
  </div>
);

export const LecturesSkeleton = () => (
  <div className="space-y-2">
    {[1, 2, 3, 4, 5].map((i) => (
      <Skeleton key={i} className="h-14 rounded-lg" />
    ))}
  </div>
);

export const NewsSkeleton = () => (
  <div className="space-y-12">
    {[1, 2, 3].map((i) => (
      <div key={i}>
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-8 w-20" />
        </div>
        <div className="flex flex-col gap-3 ml-12">
          {[1, 2, 3].map((j) => (
            <Skeleton key={j} className="h-16 rounded-lg" />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const PublicationsSkeleton = () => (
  <div className="space-y-12">
    {[1, 2].map((i) => (
      <div key={i}>
        <Skeleton className="h-8 w-20 mb-6" />
        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((j) => (
            <div key={j} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <Skeleton className="h-48 md:h-full" />
                <div className="md:col-span-2 p-6 space-y-3">
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-32 rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-48" />
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-10 w-40 rounded-lg" />
                    <Skeleton className="h-10 w-32 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const ResearchSpecificsSkeleton = () => (
  <div className="flex flex-col gap-12">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-card rounded-xl p-10 border border-border">
        <div className="flex items-start gap-5">
          <Skeleton className="w-14 h-14 rounded-xl shrink-0" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-7 w-64" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex flex-wrap gap-2 pt-2">
              <Skeleton className="h-7 w-24 rounded-full" />
              <Skeleton className="h-7 w-32 rounded-full" />
              <Skeleton className="h-7 w-28 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const CollaboratorsSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="bg-card rounded-xl p-6 border border-border">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    ))}
  </div>
);

export const ResourcesSkeleton = () => (
  <div className="space-y-8">
    <div className="bg-card rounded-xl p-8 border border-border">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="w-7 h-7" />
        <Skeleton className="h-7 w-32" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
    <div className="bg-card rounded-xl p-8 border border-border">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="w-7 h-7" />
        <Skeleton className="h-7 w-32" />
      </div>
      <div className="space-y-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-4 w-48" />
        ))}
      </div>
    </div>
  </div>
);

export const AwardsSkeleton = () => (
  <div className="bg-card rounded-xl p-8 border border-border">
    <div className="space-y-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="flex items-start gap-3">
          <Skeleton className="w-4 h-4 shrink-0 mt-1" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  </div>
);

export const GeneralResearchSkeleton = () => (
  <Skeleton className="w-full h-96 rounded-lg" />
);

export default Skeleton;
