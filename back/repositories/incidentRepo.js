import { Incident } from '../models/incident';

var autoIncrement = require('mongoose-auto-increment');
class IncidentRepo {
    constructor() {
        this.schema = global.mongoose.Schema({
            description: {
                type: String,
                required: true,
            },
            valid: Boolean
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



}

export default new IncidentRepo();