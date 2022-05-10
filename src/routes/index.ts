import { Router } from "express";
import pageController from "../controllers/pageController";
import searchController from "../controllers/searchController";

const router = Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", searchController.search);

export default router;
