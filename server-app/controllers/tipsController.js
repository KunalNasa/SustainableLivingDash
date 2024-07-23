const express = require('express');
const tipsModel = require('../models/tipsModel')

const postTips = async (req, res) => {
    try {
        const tips = req.body;
        const createTip = await tipsModel.insertMany(tips);
        res.status(201).send(createTip)
    } catch (error) {
        res.status(500).send({message : "Internal Server error"})   
    }
}
const getTips = async (req, res) => {
    try {
        const Tips = await tipsModel.find();
        console.log(Tips);
        res.status(200).send(Tips)
    } catch (error) {
        res.status(500).send({message : "Internal Server error"})
    }
}
const deleteTips = async (req, res) => {
    try {
        const deleted = await tipsModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send(deleted)
    } catch (error) {
        res.status(500).send({message : "Internal Server error"})  
    }
}
const updateTips = async (req, res) => {
    try {
        const findTip = await tipsModel.findById({_id : req.params.id});
        if(!findTip)
        {
            res.status(404).send({message : "Tip Not found"});
        }
        else
        {
            const updatedTip = await tipsModel.findByIdAndUpdate( 
                req.params.id,
                req.body,
                { new: true })
                res.status(201).send(updatedTip);
        }
    } catch (error) {
        res.status(500).json({message : "Internal Server error"})

    }
}
module.exports = {getTips, postTips, updateTips, deleteTips}