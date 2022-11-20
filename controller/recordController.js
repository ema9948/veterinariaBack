import moment from "moment";
import Patient from "../model/Patient.js";
import Records from "../model/Records.js";

export const allRecords = async (req, res) => {
  const uid = req.uid; //? user id
  const { id } = req.params; //? id patient

  try {
    const allRecords = await Records.findAll({ where: { patient_id: id } });
    const patient = await Patient.findOne({ where: { id, user_id: uid } });
    if (!patient) return res.sendStatus(404);
    return res.status(200).json(allRecords);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const addRecord = async (req, res) => {
  const uid = req.uid; //? user id
  const { id } = req.params; //? id patient
  const { description, preci } = req.body;
  const date = moment().format("llll");
  try {
    const patient = await Patient.findOne({ where: { id, user_id: uid } });
    if (!patient) return res.sendStatus(404);

    const newRecord = Records.create({
      description,
      date,
      preci,
      patient_id: id,
    });
    return res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export const patchRecord = async (req, res) => {
  const uid = req.uid; //? user id
  const patient_id = req.params; //? patient id
  const { description, preci, id } = req.body; //? id pacht
  try {
    const patient = await Patient.findOne({
      where: { id: patient_id.id, user_id: uid },
    });

    if (!patient) return res.sendStatus(400);
    const record = await Records.findOne({
      where: { id, patient_id: patient_id.id },
    });
    if (!record) return res.sendStatus(404);
    await record.update({ description, preci });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export const deleteRecord = async (req, res) => {
  const uid = req.uid; //? user id
  const { id } = req.params; //? record id
  try {
    const record = await Records.findOne({ where: { id } });
    if (!record) return res.sendStatus(404);
    const patient = await Patient.findOne({
      where: { id: record.patient_id, user_id: uid },
    });
    if (!patient) return res.sendStatus(401);
    await record.destroy();
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};
