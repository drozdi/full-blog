const express = require('express');
const {
	getRoles,
	getUsers,
	updateUser,
	deleteUser,
} = require('../controllers/user.controller');
const mapUser = require('../helpers/mapUser');
const hasRole = require('../middlewares/hasRole');
const ROLES = require('../constants/roles');
const router = express.Router({ mergeParams: true });
const auth = require('../middlewares/auth');
router.use(auth);

router.get('/', hasRole([ROLES.ADMIN]), async (req, res) => {
	const users = await getUsers();

	res.send({ data: users.map(mapUser) });
});

router.get('/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
	const roles = getRoles();

	res.send({ data: roles });
});

router.patch('/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	const newUser = await updateUser(req.params.id, {
		role: req.body.roleId,
	});

	res.send({ data: mapUser(newUser) });
});

router.delete('/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteUser(req.params.id);

	res.send({ error: null });
});

module.exports = router;
