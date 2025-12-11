// Logic for site settings/content 
// controllers/settingsController.js
const SiteSetting = require('../models/SiteSetting');

// @desc    Get site settings (Public)
// @route   GET /api/v1/settings
const getSettings = async (req, res) => {
  try {
    // Try to find the settings document
    let settings = await SiteSetting.findOne();

    // If no settings exist yet, create a default one
    if (!settings) {
      settings = await SiteSetting.create({});
    }

    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update site settings (Admin)
// @route   PUT /api/v1/admin/settings
const updateSettings = async (req, res) => {
  try {
    // Check if settings exist, if not create, otherwise update (Upsert logic)
    // We use findOneAndUpdate with upsert: true
    // We assume there is only ever one document, so we find the first one
    const settings = await SiteSetting.findOne();

    let updatedSettings;
    
    if (settings) {
        // Update existing
        updatedSettings = await SiteSetting.findByIdAndUpdate(
            settings._id, 
            req.body, 
            { new: true } // Return the updated document
        );
    } else {
        // Create new if somehow deleted
        updatedSettings = await SiteSetting.create(req.body);
    }

    res.json(updatedSettings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getSettings, updateSettings };