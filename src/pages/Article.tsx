import { useParams, Link } from "react-router-dom";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useBlogPost } from "@/hooks/use-sanity";
import { sizedImage } from "@/lib/sanity";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-foreground/85 text-lg leading-relaxed mb-5">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground mt-8 mb-3">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-accent pl-5 italic text-foreground/80 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-foreground/85 text-lg">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-foreground/85 text-lg">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:opacity-80">{children}</a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.url ? (
        <img src={sizedImage(value.url, 1000)} alt="" loading="lazy" className="w-full rounded-xl border border-border my-8" />
      ) : null,
  },
};

const Article = () => {
  const { slug } = useParams();
  const post = useBlogPost(slug || "").data;

  return (
    <PageLayout>
      <article className="pt-28 pb-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <Link to="/about-me" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={18} /> Back to About Me
          </Link>

          {!post ? (
            <p className="text-muted-foreground">Loading…</p>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6 leading-tight">{post.title}</h1>
              {post.imageUrl && (
                <img src={sizedImage(post.imageUrl, 1200)} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-2xl border border-border mb-10" />
              )}
              <div>
                <PortableText value={post.content || []} components={components} />
              </div>
            </>
          )}
        </div>
      </article>
    </PageLayout>
  );
};

export default Article;
