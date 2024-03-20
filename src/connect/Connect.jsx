import { FullConnectDiv } from "./connect_style";
import { InlineWidget } from "react-calendly";

export default function Connect() {

    return (<>
        <FullConnectDiv >

            <InlineWidget height='500px' url="https://calendly.com/soaringeagleedcenter/30min?hide_gdpr_banner=1" />

        </FullConnectDiv>
    </>)
}