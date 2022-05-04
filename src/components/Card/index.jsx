export const Card = ({ img, author, title, description }) => {
  return(
    <div>
      <img src={img} alt="card-image" />
      <div>
        {`By ${author}`}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}