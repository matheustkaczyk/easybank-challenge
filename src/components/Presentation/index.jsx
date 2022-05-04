import phones from '../../images/image-mockups.png';

export const Presentation = () => {
  return (
    <div>
      <div>
        <img src={phones} alt="phone-mockups" />
      </div>
      <div>
        <h1>Next generation digital banking</h1>
        <p>Take your finantial life online. Your EasyBank account will be a one-stop shop for spending, saving, budgeting, investing and much more.</p>
      </div>
    </div>
  )
}