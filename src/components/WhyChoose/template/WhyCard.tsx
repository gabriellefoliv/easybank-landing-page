import { CardContainer, WhyCardDescription, WhyCardIcon, WhyCardTitle } from "./WhyCardStyle";

interface WhyCardProps {
    icon: any,
    title: string,
    description: string
}

function WhyCard({icon, title, description}:WhyCardProps) {
    return(
        <CardContainer>
            <WhyCardIcon src={icon}/>
            <WhyCardTitle>{title}</WhyCardTitle>
            <WhyCardDescription>{description}</WhyCardDescription>
        </CardContainer>
    )
}

export default WhyCard