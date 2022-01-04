module.exports.successHandler = (res, status, data, message) => {
  res.status(status).json({
    message,
    data,
  });
};

module.exports.errorHandler = (res, status, err, message) => {
  res.status(status).json({
    message,
    err: JSON.stringify(err),
  });
};
