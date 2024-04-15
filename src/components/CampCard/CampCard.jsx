const CampCard = ({ title, description, url, photoURL }) => {
  return (
    <div className="card w-96 px-4 lg:px-0 bg-white dark:bg-slate-700 shadow-lg rounded-lg hover:shadow-2xl transition-all">
      <figure>
        <img src={photoURL} alt="campeigns" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-sky-800 dark:text-white">{title}</h2>
        <p className="text-slate-700 dark:text-white">{description}</p>
        <div className="card-actions justify-end ">
          <a
            href={url}
            className="btn btn-primary text-white font-iransans font-bold"
          >
            مشاهده کمپین
          </a>
        </div>
      </div>
    </div>
  );
};

export default CampCard;
