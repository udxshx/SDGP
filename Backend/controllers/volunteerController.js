const Volunteer = require('../models/volunteerModel');
const mongoose = require('mongoose');

//get all volunteers
const getVolunteers = async (req, res) => {
    const volunteers = await Volunteer.find({}).sort({createdAt: -1});
    res.status(200).json(volunteers);
}

//get single volunteer
const getVolunteer = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No volunteer with that id');
    }

    const volunteer = await Volunteer.findById(id);

    if(!volunteer){
        return res.status(404).send('No volunteer with that id');
    }

    res.status(200).json(volunteer);
}

//create a volunteer
const createVolunteer = async (req, res) => {
    const { name, email, contact, address, image } = req.body;

    let emptyFields = [];

    if(!name){
        emptyFields.push('name');
    }

    if(!email){
        emptyFields.push('email');
    }

    if(!contact){
        emptyFields.push('contact');
    }

    if(!address){
        emptyFields.push('address');
    }

    if(!image){
        emptyFields.push('image');
    }

    if(emptyFields.length > 0){
        return res.status(400).send(`The following fields are required`, emptyFields);
    }

    const volunteer = new Volunteer({
        name,
        email,
        contact,
        address,
        image
    });

    await volunteer.save();

    res.status(201).json(volunteer);
}

//update a volunteer
const updateVolunteer = async (req, res) => {
    const { id } = req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No volunteer with that id'});
    }

    const volunteer = await Volunteer.findOneAndUpdate({_id: id},{
        ...req.body
    });

    if(!volunteer){
        return res.status(400).json({error: 'No volunteer with that id'});
    }

    res.status(200).json(volunteer);
}

//delete a volunteer
const deleteVolunteer = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No volunteer with that id'});
    }

    const volunteer = await Volunteer.findOneAndDelete({ _id: id });

    if(!volunteer){
        return res.status(400).json({error: 'No volunteer with that id'});
    }

    res.status(200).json(volunteer);
}

module.exports = {
    getVolunteers,
    getVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer
}