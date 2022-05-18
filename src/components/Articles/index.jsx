import { data } from '../../data.jsx';
import { Card } from '../Card/index.jsx';

export const Articles = () => {
  return (
    <section className="articles">
      <div>
        <h1>Latest Articles</h1>
      </div>
      <div className='articles-wrapper'>
        {
          data.map(({ image, author, title, description }) => {
            return <Card key={title} img={image} author={author} title={title} description={description}/>
          })
        }
      </div>
    </section>  
  )
}