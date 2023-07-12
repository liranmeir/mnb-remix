export function VideoCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <iframe
        loading="lazy"
        className="flex-1 w-full"
        src={'https://www.youtube.com/embed/DR1w_A48OhE?autoplay=0&modestbranding=1&showinfo=0&color=white'}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Card Title 1</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          sagittis, urna sed tincidunt aliquam.
        </p>
        <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">
          View Stats
        </a>
      </div>
    </div>
  );
}
