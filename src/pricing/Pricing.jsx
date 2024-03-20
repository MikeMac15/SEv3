import { FullPricingDiv, Title1, Title2 } from "./pricing_style";
import './calendly.css'
export default function Pricing(){

    const calendlyPopup = () => {
        Calendly.initPopupWidget({url: 'https://calendly.com/soaringeagleedcenter/30min'});
        return false;
    }

    return (
        <FullPricingDiv>
        <Title1>
            We Believe in Affordable Education for All
        </Title1>
        
        <Title2>
            Reach Out and Let's Work Together! Schedule an initial meeting with us by pressing the button below and we can make a plan that best suits your budget and educational goals.
        </Title2>

        

<a className="calendlyButton" href="https://calendly.com/soaringeagleedcenter/30min" target="_blank">Schedule a time with me</a>

        
        </FullPricingDiv>
    )
}