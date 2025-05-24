
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "@inertiajs/react";
 
import { BlogPost } from "@/data/props";

const BlogPage = ({blogs}:{blogs:BlogPost[]}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();
  
  const filteredPosts = blogs.filter((post) =>
    [post.title, post.excerpt, post.category?.name]
      .some(field =>
        field?.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen">
     
      <div className="pt-20 bg-blue-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">{t('blogTitle')}</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            {t('blogSubtitle')}
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`/storage/${post.image}`} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-portfolio-blue font-medium">{post.category.name}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`}>
                      <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white w-full">
                        {t('readMore')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">{t('noArticles')}</p>
                <Button 
                  className="mt-4 bg-portfolio-blue hover:bg-portfolio-darkblue text-white"
                  onClick={() => setSearchTerm("")}
                >
                  {t('resetSearch')}
                </Button>
              </div>
            )}
          </div>
          
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white px-8">
                {t('loadMore')}
              </Button>
            </div>
          )}
        </div>
      </section>
      
       
    </div>
  );
};

export default BlogPage;
