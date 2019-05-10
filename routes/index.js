var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

/* GET home page. */
var User = require('../models/user');
var Skill = require('../models/skill');
var Experience = require('../models/experience');
var Need = require('../models/need');
var Answer = require('../models/answer');

var attachStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/../public/files/uploads');
    },
    filename: function (req, file, callback) {
        rand = Date.now() + path.extname(file.originalname);
        callback(null, file.fieldname + '-' + rand);
        // console.log(file.filename);
    }
});
// var attachFilter       = function (req, file, callback) {
//     if (!file.originalname.match(/\.(mp4|m4a|3gp|mkv)$/)) {
//         return callback(new Error("Invalid file format: should be an attach file"), false);
//     }
//     callback(null, true);
// };
var attachConfig = multer({
    storage: attachStorage,
    // fileFilter: attachFilter(),
    limits: {
        fileSize: 20 * 1024 * 1024
    }
});

router.post('/login', function (req, res, next) {
    if (!req.body.name || !req.body.sid) {
        res.status(400).send({
            success: false,
            message: 'BadRequest'
        })
    }
    else {
        console.log(req.body.sid);
        User.findOne({
            sid: req.body.sid
        })
            .then((user) => {
                if (user) {
                    if (req.body.name === req.body.name) {
                        res.status(200).send({
                            success: true,
                            userId: user._id
                        })
                    }
                    else {
                        res.status(400).send({
                            success: false,
                            message: "BadRequest: invalid sid or name."
                        })
                    }
                }
                else {
                    var newUser = new User({
                        name: req.body.name,
                        sid: req.body.sid
                    })
                    newUser.save()
                        .then(savedUser => {
                            res.status(200).send({
                                success: true,
                                userId: savedUser._id
                            })
                        })
                        .catch(err => {
                            res.status(500).send({
                                success: false,
                                error: err,
                                message: 'ServerError: failed to save the user.'
                            })
                        })
                }
            })
            .catch(err => {
                res.status(500).send({
                    success: false,
                    message: 'ServerError: failed to find the user.',
                    error: err
                })
            })
    }

});

// router.post('/skill', function (req, res, next) {
//     if (req.headers.token) {
//         Skill.findOne({
//             userId: req.headers.token
//         })
//             .then((skill) => {
//                 if (skill) {
//                     skill.inDesign = req.body.inDesign;
//                     skill.photography = req.body.photography;
//                     skill.graphicDesign = req.body.graphicDesign;
//                     skill.documentation = req.body.documentation;
//                     skill.composition = req.body.composition;
//                     skill.music = req.body.music;
//                     skill.ejra = req.body.ejra;
//                     skill.translation = req.body.translation;
//                     skill.save()
//                         .then((savedSkill) => {
//                             res.status(200).send({
//                                 success: true,
//                                 skill: savedSkill
//                             })
//                         })
//                         .catch((err) => {
//                             res.status(500).send({
//                                 success: false,
//                                 message: 'ServerError: failed to save the skill.',
//                                 error: err,
//                             })
//                         })
//                 }
//                 else {
//                     console.log(req.body.inDesign);
//                     let newSkill = new Skill({
//                         userId: req.headers.token
//                     });
//                     newSkill.inDesign = req.body.inDesign;
//                     newSkill.photography = req.body.photography;
//                     newSkill.graphicDesign = req.body.graphicDesign;
//                     newSkill.documentation = req.body.documentation;
//                     newSkill.composition = req.body.composition;
//                     newSkill.music = req.body.music;
//                     newSkill.ejra = req.body.ejra;
//                     newSkill.translation = req.body.translation;
//                     newSkill.save()
//                         .then((savedSkill) => {
//                             res.status(200).send({
//                                 success: true,
//                                 skill: savedSkill
//                             })
//                         })
//                         .catch((err) => {
//                             res.status(500).send({
//                                 success: false,
//                                 message: 'ServerError: failed to save the skill.',
//                                 error: err,
//                             })
//                         })
//                 }
//             })
//             .catch((err) => {
//                 res.status(500).send({
//                     success: false,
//                     message: 'ServerError: failed to find the Skill.',
//                     error: err,
//                 })
//             })
//     }
//     else {
//         res.status(401).send({
//             success: false,
//             message: 'unAuthorized.'
//         })
//     }
// });

// router.post('/experience', function (req, res, next) {
//     if (req.headers.token) {
//         Experience.findOne({
//             userId: req.headers.token
//         })
//             .then((experience) => {
//                 if (experience) {
//                     experience.seo = req.body.seo;
//                     experience.frontEnd = req.body.frontEnd;
//                     experience.backEnd = req.body.backEnd;
//                     experience.devOps = req.body.devOps;
//                     experience.uiUx = req.body.uiUx;
//                     experience.ProductManagement = req.body.ProductManagement;
//                     experience.Test = req.body.Test;
//                     experience.save()
//                         .then((savedexperience) => {
//                             res.status(200).send({
//                                 success: true,
//                                 experience: savedexperience
//                             })
//                         })
//                         .catch((err) => {
//                             res.status(500).send({
//                                 success: false,
//                                 message: 'ServerError: failed to save the experience.',
//                                 error: err,
//                             })
//                         })
//                 }
//                 else {
//                     console.log(req.body.inDesign);
//                     let newExperience = new Experience({
//                         userId: req.headers.token
//                     });
//                     newExperience.seo = req.body.seo;
//                     newExperience.frontEnd = req.body.frontEnd;
//                     newExperience.backEnd = req.body.backEnd;
//                     newExperience.devOps = req.body.devOps;
//                     newExperience.uiUx = req.body.uiUx;
//                     newExperience.ProductManagement = req.body.ProductManagement;
//                     newExperience.Test = req.body.Test;
//                     newExperience.save()
//                         .then((savedExperience) => {
//                             res.status(200).send({
//                                 success: true,
//                                 experience: savedExperience
//                             })
//                         })
//                         .catch((err) => {
//                             res.status(500).send({
//                                 success: false,
//                                 message: 'ServerError: failed to save the experience.',
//                                 error: err,
//                             })
//                         })
//                 }
//             })
//             .catch((err) => {
//                 res.status(500).send({
//                     success: false,
//                     message: 'ServerError: failed to find the experience.',
//                     error: err,
//                 })
//             })
//     }
//     else {
//         res.status(401).send({
//             success: false,
//             message: 'unAuthorized.'
//         })
//     }
// });

// router.post('/need', function (req, res, next) {
//     if (req.headers.token) {
//         Experience.findOne({
//             userId: req.headers.token
//         })
//             .then((need) => {
//                 if (need) {
//                     need.Q1 = req.body.Q1;
//                     need.Q2 = req.body.Q2;
//                     need.Q3 = req.body.Q3;
//                     need.save()
//                         .then((savedNeed) => {
//                             res.status(200).send({
//                                 success: true,
//                                 need: savedNeed
//                             })
//                         })
//                         .catch((err) => {
//                             res.status(500).send({
//                                 success: false,
//                                 message: 'ServerError: failed to save the need.',
//                                 error: err,
//                             })
//                         })
//                 }
//                 else {
//                     console.log(req.body.inDesign);
//                     let newNeed = new Need({
//                         userId: req.headers.token
//                     });
//                     newNeed.Q1 = req.body.Q1;
//                     newNeed.Q2 = req.body.Q2;
//                     newNeed.Q3 = req.body.Q3;
//                     newNeed.save()
//                         .then((savedNeed) => {
//                             res.status(200).send({
//                                 success: true,
//                                 need: savedNeed
//                             })
//                         })
//                         .catch((err) => {
//                             res.status(500).send({
//                                 success: false,
//                                 message: 'ServerError: failed to save the need.',
//                                 error: err,
//                             })
//                         })
//                 }
//             })
//             .catch((err) => {
//                 res.status(500).send({
//                     success: false,
//                     message: 'ServerError: failed to find the need.',
//                     error: err,
//                 })
//             })
//     }
//     else {
//         res.status(401).send({
//             success: false,
//             message: 'unAuthorized.'
//         })
//     }
// });

router.post('/upload', attachConfig.single('attach'), function (req, res, next) {
    console.log(req.file);
    if (!req.headers.token) {
        res.status(401).send({
            success: false,
            message: 'UnAuthorized.'
        })
    }
    else {
        User.findOne({
            _id: req.headers.token
        })
            .then((user) => {
                if (user) {
                    if (user.uploads.length) {
                        if (user.uploads.length >= 5) {
                            res.status(400).send({
                                success: false,
                                message: 'you can upload just 5 files.'
                            })
                        }
                        else
                            user.uploads.push(req.file.filename);
                    }
                    else {
                        user.uploads = [];
                        user.uploads.push(req.file.filename);
                    }
                    user.save()
                        .then((savedUser) => {
                            res.status(200).send({
                                success: true,
                                message: 'file uploaded',
                                fileName: req.file.filename
                            })
                        })
                        .catch((err) => {
                            res.status(500).send({
                                success: false,
                                error: err,
                                message: 'ServerError: failed to save the user data.'
                            })
                        })
                }
                else {
                    res.status(401).send({
                        success: false,
                        message: "UnAuthorized."
                    })
                }
            })
            .catch((err) => {
                res.status(500).send({
                    success: false,
                    message: 'ServerError: failed to find the user.',
                    error: err,
                })
            })
    }
});

router.get('/attachList', function (req, res, next) {
    console.log(req.headers.id);
    if (req.headers.token) {
        User.findOne({
            _id: req.headers.token
        })
            .then(user => {
                if (user) {
                    res.status(200).send({
                        success: true,
                        userId: req.headers.token,
                        attachments: user.uploads
                    })
                }
                else {
                    res.status(401).send({
                        success: false,
                        message: 'UnAuthorized.'
                    })
                }
            })
            .catch(err => {
                res.status(500).send({
                    success: false,
                    message: 'ServerError: failed to find the user.',
                    error: err,
                })
            })
    }
    else {
        res.status(401).send({
            success: false,
            message: 'UnAuthorized.'
        })
    }
});

router.get('/download', function (req, res, next) {
    if (req.headers.token) {
        if (req.headers.filename) {
            User.findOne({
                _id: req.headers.token
            })
                .then(user => {
                    if (user) {
                        res.status(200).download(__dirname + '/../public/files/uploads/' + req.headers.filename);
                    }
                    else {
                        res.status(401).send({
                            success: false,
                            message: 'UnAuthorized.'
                        })
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        success: false,
                        message: 'ServerError: failed to find the user.',
                        error: err,
                    })
                })
        }
        else {
            res.status(400).send({
                success: false,
                message: 'missing filename.'
            })
        }

    }
    else {
        res.status(401).send({
            success: false,
            message: 'UnAuthorized.'
        })
    }
});

router.post('/delete', function (req, res, next) {
    if (req.headers.token) {
        if (req.body.filename) {
            User.findOne({
                _id: req.headers.token
            })
                .then(user => {
                    if (user) {
                        user.uploads.splice(user.uploads.indexOf(req.body.filename), 1);
                        user.save();
                        res.status(200).send({
                            success: true,
                            user
                        })
                    }
                    else {
                        res.status(401).send({
                            success: false,
                            message: 'UnAuthorized.'
                        })
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        success: false,
                        message: 'ServerError: failed to find the user.',
                        error: err,
                    })
                })
        }
        else {
            res.status(400).send({
                success: false,
                message: 'missing filename.'
            })
        }
    }
    else {
        res.status(401).send({
            success: false,
            message: 'UnAuthorized.'
        })
    }
});

router.post('/answer', function (req, res, next) {
    if (req.headers.token) {
        var newAnswer = new Answer({
            userId: req.headers.token
        });
        newAnswer.inDesign = req.body.inDesign;
        newAnswer.photography = req.body.photography;
        newAnswer.graphicDesign = req.body.graphicDesign;
        newAnswer.documentation = req.body.documentation;
        newAnswer.composition = req.body.composition;
        newAnswer.music = req.body.music;
        newAnswer.ejra = req.body.ejra;
        newAnswer.translation = req.body.translation;
        newAnswer.seo = req.body.seo;
        newAnswer.frontEnd = req.body.frontEnd;
        newAnswer.backEnd = req.body.backEnd;
        newAnswer.devOps = req.body.devOps;
        newAnswer.uiUx = req.body.uiUx;
        newAnswer.ProductManagement = req.body.ProductManagement;
        newAnswer.Test = req.body.Test;
        newAnswer.Q1 = req.body.Q1;
        newAnswer.Q2 = req.body.Q2;
        newAnswer.Q3 = req.body.Q3;
        newAnswer.save()
            .then((answer) => {
                res.status(200).send({
                    success: true,
                    answer
                })
            })
            .catch((err) => {
                res.status(500).send({
                    success: false,
                    message: 'ServerError: failed to save the answer.',
                    error: err,
                })
            })
    }
    else {
        res.status(401).send({
            success: false,
            message: 'unAuthorized.'
        })
    }
});

module.exports = router;
