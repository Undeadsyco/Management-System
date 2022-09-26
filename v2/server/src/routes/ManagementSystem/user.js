const router = require('express').Router();
const user = require('../../models/employee/managementUsers');

router.get('/', (req, res) => {
  res.status(200).send('looks good');
});

router.post('/add_new_user', (req, res) => {
  user.create(req.body).then(() => {
    res.status(200).json({ message: 'Successfully added new user' });
  }).catch((err) => console.log(err));
});

module.exports = router;
