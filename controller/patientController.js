import Patient from "../model/Patient.js";
import Records from "../model/Records.js";
import User from "../model/User.js";

export const allPatients = async (req, res) => {
  const uid = req.uid;
  try {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) return res.sendStatus(401);
    const allPatients = await Patient.findAll({ where: { user_id: uid } });
    return res.status(200).json(allPatients);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export const addPatient = async (req, res) => {
  const uid = req.uid;
  const { name, species, phone } = req.body;
  try {
    let patient = await Patient.findOne({ where: { name, species, phone } });
    const user = await User.findOne({ where: { id: uid } });
    if (patient) return res.sendStatus(401);
    if (!user) return res.sendStatus(404);

    patient = Patient.create({ name, species, phone, user_id: uid });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export const patchPatient = async (req, res) => {
  const { id } = req.params;
  const { name, species, phone } = req.body;
  const uid = req.uid;
  try {
    const patient = await Patient.findOne({ where: { id, user_id: uid } });
    if (!patient) return res.sendStatus(404);
    await patient.update({ name, species, phone });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;
  const uid = req.uid;
  try {
    await Patient.destroy({ where: { id, user_id: uid } });
    await Records.destroy({ where: { patient_id: id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};
