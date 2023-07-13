export function VideoCard() {
  const date = "23/12/2020";
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <iframe
        loading="lazy"
        className="flex-1 w-full"
        src={
          "https://www.youtube.com/embed/DR1w_A48OhE?autoplay=0&modestbranding=1&showinfo=0&color=white"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{date}</h3>

        <div>
          
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            </div>
          </div>

          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            </div>
          </div>
        </div>

        <a href="#" className="text-blue-500 font-semibold mt-4 inline-block">
          View Stats
        </a>
      </div>
    </div>
  );
}
