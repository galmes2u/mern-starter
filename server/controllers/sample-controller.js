const { Sample } = require('../models');

module.exports = {
  async createSample({ body }, res) {
    const sample = await Sample.create(body);

    if (!sample) {
      return res.status(400).json({ message: 'Unable to create sample' });
    }

    res.status(200).json(sample);
  },
  
  async getAllSamples(req, res) {
    const allSamples = await Sample.find({});

    if (!allSamples) {
      return res.status(400).json({ message: 'No samples found' });
    }

    res.status(200).json(allSamples);
  },

  async getSampleById({ params }, res) {
    const sample = await Sample.findById(params.id);

    if (!sample) {
      return res.status(400).json({ message: 'No sample found by that id' });
    }

    res.status(200).json(sample);
  },
};
