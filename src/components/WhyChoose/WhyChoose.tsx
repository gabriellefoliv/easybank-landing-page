import { WhyCardContainer, WhyContainer, WhySubs, WhyText, WhyTitle } from "./WhyChooseStyle"
import WhyCard from "./template/WhyCard"

import online from '../../images/icon-online.svg'
import budgeting from '../../images/icon-budgeting.svg'
import onboarding from '../../images/icon-onboarding.svg'
import api from '../../images/icon-api.svg'

function WhyChoose() {
    return(
        <WhyContainer>
            <WhyText>
                <WhyTitle>Why choose Easybank?</WhyTitle>
                <WhySubs>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</WhySubs>
            </WhyText>
            <WhyCardContainer>
                <WhyCard
                    icon={online}
                    title="Online Banking"
                    description="Our modern web and mobile applications 
                    allow you to keep track of your finances wherever you
                    are in the world."
                />
                <WhyCard
                    icon={budgeting} 
                    title="Simple Budgeting" 
                    description="See exactly where your money goes each month. 
                    Receive notifications when you're close to hitting your limits."
                />
                <WhyCard
                    icon={onboarding} 
                    title="Fast Onboarding"
                    description="We don't do branches. Open your account in minutes 
                    online and start taking control of your finances right away."
                />
                <WhyCard
                    icon={api}
                    title="Open API" 
                    description="Manage your savings, investments, pension and much 
                    more from one account. Tracking your money has never been easier."
                />
            </WhyCardContainer>
        </WhyContainer>
    )
}

export default WhyChoose