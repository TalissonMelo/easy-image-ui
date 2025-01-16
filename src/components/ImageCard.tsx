interface ImageCardProps {
  name?: string;
  size?: number;
  uploadDate?: string;
  url?: string;
  extension?: string;
}

export const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
  return (
    <div className="card relative bg-white rounded-md shadow-md transition-tranform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
      <img
        src={props.url}
        className="h-56 w-full object-cover rounded-t-md"
        alt=""
      />
      <div className="card-body p-4">
        <h5 className="text-xl font-semibold mb-2 text-gray-600">
          {props.name}
        </h5>
        <p className="text-gray-600">{props.size}</p>
        <p className="text-gray-600">{props.uploadDate}</p>
      </div>
    </div>
  );
};
