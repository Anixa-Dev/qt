import moment from "moment";
import "moment/locale/en-gb";

// Set the default locale
moment.locale("en-gb");

// Configure moment to use strict parsing
moment.parseTwoDigitYear = function (input) {
  return moment.parseTwoDigitYear(input);
};

export default moment;
