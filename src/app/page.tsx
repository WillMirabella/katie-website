
export default function Home() {
  const sampleImages = [
    { src: "/api/placeholder/300/400", alt: "Sample photo 1" },
    { src: "/api/placeholder/300/400", alt: "Sample photo 2" },
    { src: "/api/placeholder/300/400", alt: "Sample photo 3" },
    { src: "/api/placeholder/300/400", alt: "Sample photo 4" },
    { src: "/api/placeholder/300/400", alt: "Sample photo 5" },
    { src: "/api/placeholder/300/400", alt: "Sample photo 6" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Katie M</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to my corner of the internet! I&apos;m passionate about exploring the world, 
            sharing stories, and finding beauty in everyday moments. Through my writing and 
            travels, I aim to connect with others who share a curiosity about life and a 
            love for authentic experiences. Here you&apos;ll find my thoughts, adventures, and 
            the moments that inspire me most.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[3/4] relative bg-accent-light">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Photo {index + 1}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
