
import { AspectRatio } from "@/Components/ui/aspect-ratio";
import { Card, CardContent } from "@/Components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectVideoPreviewProps {
  videoUrl: string;
  title: string;
}

const ProjectVideoPreview = ({ videoUrl, title }: ProjectVideoPreviewProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="shadow-md border-0">
      <CardContent className="p-0 overflow-hidden rounded-lg">
        <AspectRatio ratio={16/9} className="bg-gray-100">
          <iframe
            src={videoUrl}
            title={`${title} - Video Preview`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </AspectRatio>
      </CardContent>
    </Card>
  );
};

export default ProjectVideoPreview;
