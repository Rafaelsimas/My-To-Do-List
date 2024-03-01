const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTasks)
router.post('/edit', TaskController.updateTasksPost)

router.get('/dash', TaskController.dashboardScreen)
router.get('/all', TaskController.showData)
router.get('/', TaskController.loginScreen)

module.exports = router