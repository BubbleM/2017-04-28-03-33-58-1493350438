describe("A suite of basic function",function(){
	var name;
	it("Game test",function(){
		input="X|X|X|X|X|X|X|X|X|X||XX";
		var exp=300;
		expect(exp).toEqual(getBowlingScore(input));
	});
	it("Game test",function(){
		input="9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||";
		var exp=90;
		expect(exp).toEqual(getBowlingScore(input));
	});
	it("Game test",function(){
		input="5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5";
		var exp=150;
		expect(exp).toEqual(getBowlingScore(input));
	});
	it("Game test",function(){
		input="X|7/|9-|X|-8|8/|-6|X|X|X||81";
		var exp=167;
		expect(exp).toEqual(getBowlingScore(input));
	});        
})