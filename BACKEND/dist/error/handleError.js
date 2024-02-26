"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const errorBuilder = (err, res) => {
    res.status(404).json({
        name: err.name,
        message: err.message,
        success: err.success,
        status: err.status,
        error: err,
    });
};
const handleError = (err, req, res, next) => {
    errorBuilder(err, res);
};
exports.handleError = handleError;
