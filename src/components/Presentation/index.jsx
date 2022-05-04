import phones from '../../images/image-mockups.png';
import { Button } from '../Button';

export const Presentation = () => {
  return (
    <div className="presentation">
      <div className="hero-images">
        <img src={phones} alt="phone-mockups" />
      </div>
      <div className="hero-text">
        <h1>Next generation digital banking</h1>
        <p>Take your finantial life online. Your EasyBank account will be a one-stop shop for spending, saving, budgeting, investing and much more.</p>
        <Button text='Request invite' type="button" />
      </div>
    </div>
  )
}