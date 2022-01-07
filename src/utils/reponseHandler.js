module.exports.successHandler = (res, data, message) => {
  res.status(200).json({
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
