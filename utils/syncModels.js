import Records from "../model/Records.js";
import Patient from "../model/Patient.js";
import User from "../model/User.js";

export const sync = () => {
  User.sync();
  Patient.sync();
  Records.sync();
};
export default sync;
