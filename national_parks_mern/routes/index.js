const path = require("path");
const router = require("express").Router();
const APIRoutes = require("./api/vapark");

router.use("/api", APIRoutes);

module.exports = router;
