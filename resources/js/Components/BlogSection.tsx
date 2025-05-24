
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { useLanguage } from "../contexts/LanguageContext";
import { BlogPost } from "@/data/props";
 

const BlogSection = ({blogPosts}:{blogPosts:BlogPost[]}) => {
  const { t } = useLanguage();
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-portfolio-blue font-medium mb-2">{t('blog')}</p>
            <h2 className="text-3xl md:text-4xl font-bold">{t('blogTitle')}</h2>
          </div>
          <Link href="/blog">
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white">
              {t('viewAll')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="rounded-xl overflow-hidden card-shadow transition-transform hover:-translate-y-2 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                <img
                  src={`/storage/${post.image}`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-portfolio-blue px-3 py-1 rounded-full text-sm font-medium">
                  {post.category.name}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="link" className="p-0 text-portfolio-blue hover:text-portfolio-darkblue">
                    {t('readMore')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
