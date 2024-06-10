function Hero({ img, title, rating, producers }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${img})`,
        width: "100%",
        height: "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-text">
        <h2>Destaque do Mês</h2>
        <h1
          style={{
            marginTop: "1rem",
          }}
        >
          {title}
        </h1>
      </div>
      <div className="hero-info">
        <p className="rating">{rating} /10</p>
        <p>{producers}</p>
      </div>
    </div>
  );
}
export default Hero;
