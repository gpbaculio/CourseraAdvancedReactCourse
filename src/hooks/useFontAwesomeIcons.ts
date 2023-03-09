import { library } from "@fortawesome/fontawesome-svg-core";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons/faStackOverflow";

const useFontAwesomeIcons = () => {
  library.add(faEnvelope, faGithub, faLinkedin, faStackOverflow);
};

export default useFontAwesomeIcons;
