import express from "express";
import { something } from "@controllers/page";

const pageRouter = () => {
	const router = express.Router();
	router.use("/", pageRouter);
	return router;
};

export { pageRouter };
