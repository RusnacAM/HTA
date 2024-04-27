const NewsContainer = ({ newsInfo }) => {
  return (
      <>
          <img
              className="max-w-80 h-96 rounded-3xl object-cover"
              src={newsInfo.image}
              alt="news cover photo"
          />
          <div className=" flex flex-col gap-16">
              <h1 className="text-xl w-80 font-semibold">{newsInfo.title}</h1>
              <p className="text-sm line-clamp-6">{newsInfo.description}</p>
              <p className="align-bottom text-xs pt-8 font-semibold text-gray-500">Posted: {newsInfo.date}</p>
          </div>
      </>
  )
};

export default NewsContainer;