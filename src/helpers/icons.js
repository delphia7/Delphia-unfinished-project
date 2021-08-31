import {
      faPhoneVolume, 
      faMapMarkerAlt, 
      faClock
} from "@fortawesome/free-solid-svg-icons";

import { library} from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
      return library.add(faPhoneVolume, faMapMarkerAlt, faClock);
};

export default Icons;