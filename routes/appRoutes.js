import { Router } from 'express'
import * as teachers from '../controllers/appController.js'

const router = Router()

router.get('/', teachers.listTeachers)
router.get('/departamento', teachers.listDepartment)
router.get('/turmas', teachers.listClasses)
router.get('/:id', teachers.getTeacherById)
router.post('/', teachers.createTeacher)
router.post('/turmas/:id', teachers.addClass)
router.put('/:id', teachers.updateTeacher)
router.delete('/:id', teachers.deleteTeacher)

export default router