
import { useState } from "react";
import { router } from "@inertiajs/react";
 
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { MessageSquare, Book } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
 import { toast } from "@/hooks/use-toast";
import { BlogPost } from "@/data/props";


 
const BlogPostPage = ({ blogs }: {blogs:BlogPost}) => {
 
  const handleBack = () => {
    router.visit('/projects'); // Navigate back
  };
  const { t } = useLanguage();
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");

 

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentAuthor.trim() || !commentContent.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send the comment to a backend
    // Here we're just showing a toast notification
    toast({
      title: "Comment Submitted",
      description: "Your comment has been submitted and is awaiting moderation."
    });
    
    // Reset the form
    setCommentAuthor("");
    setCommentContent("");
  };

  return (
    <div className="min-h-screen">
      
      <div className="pt-20 bg-blue-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <Book size={20} />
              <span>{blogs.category.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{blogs.title}</h1>
            <div className="flex items-center mt-6">
              <div className="mr-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
                  {blogs.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="font-medium">{blogs.author}</p>
                <p className="text-sm opacity-80">{blogs.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
              <div className="h-80 overflow-hidden">
                <img 
                  src={`/storage/${blogs.image}`} 
                  alt={blogs.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogs.content }} />
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="mt-12">
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="mr-2 text-portfolio-blue" />
                <h2 className="text-2xl font-bold">{t('comments')} ({blogs.comments.length})</h2>
              </div>
              
              {blogs.comments.length > 0 ? (
                <div className="space-y-6">
                  {blogs.comments.map((comment) => (
                    <div key={comment.id} className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-portfolio-blue rounded-full flex items-center justify-center text-white mr-3">
                          {comment.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium">{comment.author}</h4>
                          <p className="text-sm text-gray-500">{comment.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mb-6">Be the first to leave a comment!</p>
              )}
              
              {/* Add Comment Form */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{t('leaveComment')}</h3>
                <form onSubmit={handleSubmitComment}>
                  <div className="mb-4">
                    <Label htmlFor="author">Name</Label>
                    <Input 
                      id="author"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      placeholder="Your name"
                      className="mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="comment">{t('yourComment')}</Label>
                    <Textarea 
                      id="comment" 
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      placeholder="Write your comment here..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white"
                  >
                    {t('submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
   
    </div>
  );
};

export default BlogPostPage;
