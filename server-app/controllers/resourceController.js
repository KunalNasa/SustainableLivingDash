const express = require('express');
const resourceModel = require('../models/resourceModel')

const postResources = async (req, res) => {
    try {
        const resources = req.body;
        const createResources = await resourceModel.insertMany(resources);
        res.status(201).send(createResources)
    } catch (error) {
        res.status(500).send({message : "Internal Server error"})   
    }
}
const getResources = async (req, res) => {
    try {
        const resources = await resourceModel.find();
        console.log(resources);
        res.status(200).send(resources)
    } catch (error) {
        res.status(500).send({message : "Internal Server error"})
    }
}
const deleteResource = async (req, res) => {
    try {
        const deleted = await resourceModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send(deleted)
    } catch (error) {
        res.status(500).send({message : "Internal Server error"})  
    }
}
const updateResource = async (req, res) => {
    try {
        const findResource = await resourceModel.findById({_id : req.params.id});
        if(!findResource)
        {
            res.status(404).send({message : "Tip Not found"});
        }
        else
        {
            const updatedResource = await resourceModel.findByIdAndUpdate( 
                req.params.id,
                req.body,
                { new: true })
                res.status(201).send(updatedResource);
        }
    } catch (error) {
        res.status(500).json({message : "Internal Server error"})

    }
}
module.exports = {getResources, postResources, updateResource, deleteResource}