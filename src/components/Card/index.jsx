export const Card = ({ img, author, title, description }) => {
  return(
    <div className="article-card">
      <img src={img} alt="card-image" />
      <div>
        <span>{`By ${author}`}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}