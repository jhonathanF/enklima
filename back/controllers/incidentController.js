var express = require('express')
    , router = express.Router()
import IncidentRepo from '../repositories/incidentRepo.js';
const verifyJWT = require('../utils/jwtUtil');

router.get('/valid', verifyJWT.normalUser, async function (req, res) {
    const incidents = await IncidentRepo.findAllValid();
    res.send(incidents)
})

router.get('/invalid', verifyJWT.adminUser, async function (req, res) {
    const incidents = await IncidentRepo.findAllInvalid();
    res.send(incidents)
})

router.get('/all', verifyJWT.adminUser, async function (req, res) {
    const incidents = await IncidentRepo.findAll();
    res.send(incidents)
})


router.post('/', verifyJWT.adminUser, async function (req, res) {
    let incident = req.body;
    incident.date = new Date();
    const incidentModel = IncidentRepo.getIncidentModel(incident);
    const newIncident = await incidentModel.save();
    res.send(newIncident)
})

router.put('/updateValidation', verifyJWT.adminUser, async function (req, res) {
    const incidentFound = await IncidentRepo.findById(req.query.id);
    incidentFound.valid = req.body.valid
    const incidentModel = IncidentRepo.getIncidentModel(incidentFound);
    const incident = await incidentModel.save();
    res.send(incident)
})

router.delete('/', verifyJWT.adminUser, async function (req, res) {
    const incidentFound = await IncidentRepo.findById(req.query.id);
    await incidentFound.deleteOne();
    res.send(incident)
    res.send(incidents)
})

module.exports = router;