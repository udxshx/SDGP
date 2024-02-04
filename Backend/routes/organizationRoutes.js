const express = require('express');
const {
    getOrganizations,
    getOrganization
} = require('../controllers/organizationController');
const router = express.Router();

//get all organizations
router.get('/', getOrganizations);

//get single organization
router.get('/:id', getOrganization);

module.exports = router;