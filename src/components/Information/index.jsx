import banking from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import onboarding from '../../images/icon-onboarding.svg';
import api from '../../images/icon-api.svg';

export const Information = () => {
  return (
    <section className="information">
      <div className='information-hero'>
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank account into your finantial hub.
          Control your finances like never before.
        </p>
      </div>
      <div className='information-wrapper'>
        <div>
          <img src={banking} alt='banking-icon'/>
          <h3>Online banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>
        <div>
          <img src={budgeting} alt='budgeting-icon'/> 
          <h3>Simple budgeting</h3>
          <p>See exactly where your money goes each month.
            Receive notifications when you're close to your hitting limits.
          </p>
        </div>
        <div>
          <img src={onboarding} alt='onboarding-icon'/>
          <h3>Fast onboarding</h3>
          <p>
            We don't do branches. Open your account in minutes online and stark taking control of your finances right away.
          </p>
        </div>
        <div>
          <img src={api} alt='api-icon'/>
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  )
}