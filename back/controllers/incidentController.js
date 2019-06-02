var express = require('express')
    , router = express.Router()
import IncidentRepo from '../repositories/incidentRepo.js';

router.get('/', async function (req, res) {
    const incidents = await IncidentRepo.findAll();

    res.send(incidents)
})

router.post('/', async function (req, res) {
    const incidents = await IncidentRepo.findAll();

    res.send(incidents)
})

router.put('/validate', async function (req, res) {
    const incidents = await IncidentRepo.findAll();

    res.send(incidents)
})

router.put('/invalidate', async function (req, res) {
    const incidents = await IncidentRepo.findAll();

    res.send(incidents)
})

module.exports = router;