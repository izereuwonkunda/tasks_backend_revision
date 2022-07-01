import express from "express";

import {getTasks,getTask,getTaskSearch,deleteTask,updateTask, createTask} from '../controllers/task'
const router=express.Router();
import {auth} from '../middleware/auth'
router.get('/',auth,getTasks);
router.get('/:id',getTask);
router.post('/',auth,createTask);
router.put('/:id',auth,updateTask);
router.delete('/:id',auth,deleteTask);
router.get('/search/:query',auth,getTaskSearch);

export default router