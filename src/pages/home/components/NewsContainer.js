const NewsContainer = () => {
  return (
      <>
          <img
              className="w-80 h-96 rounded-3xl object-cover"
              src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg"
              alt="news cover photo"
          />
          <div className=" flex flex-col gap-16">
              <h1 className="text-xl w-80 font-semibold">News Headline</h1>
              <p className="text-sm line-clamp-6">News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description News Story Description</p>
          </div>
      </>
  )
};

export default NewsContainer;