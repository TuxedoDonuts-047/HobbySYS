/* GET home page */
const about = function(req, res){
res.render('about-text', { 
	title: 'About', 
	pageHeader: {
	title: 'About Us',
	strapline: 'The main purpose of this army list is to store army lists for specific tabletop wargames. The games that this army list applies to are Warhammer 40K, Warhammer The Horus Heresy, Warhammer Age of Sigmar and Blood Bowl.'
	}
	});
};
module.exports = {
about
};