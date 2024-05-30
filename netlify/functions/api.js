import express, { Router } from "express";
import serverless from "serverless-http";
import statsCard from "../../api/index.js";
import repoCard from "../../api/pin.js";
import langCard from "../../api/top-langs.js";
import wakatimeCard from "../../api/wakatime.js";
import gistCard from "../../api/gist.js";

const api = express();

const router = Router();
router.get("/", statsCard);
router.get("/pin", repoCard);
router.get("/top-langs", langCard);
router.get("/wakatime", wakatimeCard);
router.get("/gist", gistCard);

api.use("/api/", router);

export const handler = serverless(api);
