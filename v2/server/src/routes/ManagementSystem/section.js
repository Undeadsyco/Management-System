const router = require('express').Router();
const { SectionController } = require('../../controllers');

router.get('/', (req, res) => res.status(200).json({ message: 'route is accessable' }));
router.get('/get_all', SectionController.getAllSections);
router.post('/add_new', SectionController.addNewSection);
router.put('/update_one', SectionController.updateOneSection);
router.delete('/delete_one/:id', SectionController.deleteSectionById);

module.exports = router;
