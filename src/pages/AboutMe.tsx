import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { useBlogPosts } from "@/hooks/use-sanity";
import { sizedImage } from "@/lib/sanity";

const FALLBACK_IMG = "https://cdn.prod.website-files.com/68a2db4c5dd3ad2de5b3cf0f/68b01cb5237a8c9ca2ca6bad_Abstract%20Fluid%20Forms.avif";

const AboutMe = () => {
  const posts = (useBlogPosts([]).data ?? []) as any[];

  return (
    <PageLayout>
      <PageHero
        title="About Me"
        description="Personal reflections, stories, and perspectives from Prof. R. B. Sunoj."
      />

      <section className="py-12 bg-transparent">
        <div className="container">
          <div className="flex flex-col gap-10 w-full md:w-4/5 mx-auto">
            {posts.map((post: any, i: number) => (
              <motion.article
                key={post._id || i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid md:grid-cols-2 gap-0 bg-card rounded-3xl border border-border overflow-hidden card-hover"
              >
                <div className={i % 2 === 1 ? "md:order-last" : ""}>
                  <img
                    src={post.imageUrl ? (sizedImage(post.imageUrl, 1000) as string) : FALLBACK_IMG}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-72 md:h-full min-h-[320px] object-cover bg-background"
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tighter text-foreground mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-foreground/80 text-lg leading-relaxed mb-8">{post.body}</p>
                  {post.slug && (
                    <Link
                      to={`/about-me/${post.slug}`}
                      className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent/90 transition-colors group tracking-tighter"
                    >
                      Read Article
                      <div className="bg-white rounded-full text-accent p-1.5 transition-transform group-hover:translate-x-1">
                        <ArrowRight size={16} />
                      </div>
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
            {posts.length === 0 && (
              <p className="text-center text-muted-foreground">No posts yet.</p>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutMe;
