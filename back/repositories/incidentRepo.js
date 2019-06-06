import { Incident } from '../models/incident';

var autoIncrement = require('mongoose-auto-increment');
class IncidentRepo {
    constructor() {
        this.schema = global.mongoose.Schema({
            description: {
                type: String,
                required: true,
            },
            copName: String,
            date: Date,
            valid: {
                type: Boolean,
                default: false
            },
            hasVictims: {
                type: Boolean,
                default: false
            }
        });
        this.schema.plugin(autoIncrement.plugin, 'incident');
        this.model = new global.mongoose.model('incident', this.schema);
    }

    getIncidentModel(properties) {
        return this.model(properties);
    }

    getIncidentModelErrors(incident) {
        return incident.validateSync();
    }

    save(incident) {
        return incident.save();
    }

    findAll() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }

    findAllValid() {
        return this.model.find({ 'valid': true });
    }

    findAllInvalid() {
        return this.model.find({ 'valid': false });
    }
}

export default new IncidentRepo();