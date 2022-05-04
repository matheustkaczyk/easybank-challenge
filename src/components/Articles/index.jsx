import { data } from '../../data.jsx';
import { Card } from '../Card/index.jsx';

export const Articles = () => {
  return (
    <section className="articles">
      <h1>Latest Articles</h1>
      {
        data.map(({ image, author, title, description }) => {
          return <Card key={title} img={image} author={author} title={title} description={description}/>
        })
      }
    </section>  
  )
}