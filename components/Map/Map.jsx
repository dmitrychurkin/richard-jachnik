import Script from "next/script";
import { memo } from "react";

const Map = () => (
    <>
        <iframe className="gmap" width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=200&amp;height=400&amp;hl=en&amp;q=2%20Heathfield%20Park%20Newtonhill+(Richard%20from%20Aberdeen)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='http://maps-generator.com/ru'>maps-generator.com</a><Script src='https://embedmaps.com/google-maps-authorization/script.js?id=6df80774474c6b0d69f6a34f247d354782f43907' />
    </>
);

export default memo(Map);
