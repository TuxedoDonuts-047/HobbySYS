/* GET 'login' page */
const login = function(req, res){
res.render('login', { 
		title: 'login',
		pageHeader: { 
		title: 'Customer Login',
		strapline: 'Sign In'
 		}
	});
};
/* GET 'hobbyInfo' page */
const hobbyInfo = function(req, res){
res.render('hobby-Info', { 
		title: 'Customer Account',
		pageHeader: {
		title: 'Customer Account Details',
		strapline: 'Account Details'
		}, 
		hobby: [{
                username: 'Donnacha O Donoghue',
                password: 'Tucca',
                email: 'tucca003@gmail.com',
                selectGame: 'Warhammer 40k',
                armyPoints: '1000 pts',
                armyList: 'Blood Angels Liberator Assault Group 1000pt ......'
                }]});
};
/* GET 'Registration' page */
const register = function(req, res){
res.render('register', { 
		title: 'Registration',
		pageHeader: {
		title: 'Registration',
		strapline: 'Register Account'
		} 
	});
};
module.exports = {
login,
hobbyInfo,
register
};
