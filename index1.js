// JavaScript Document
//var names=["yakoov","joe","John","Nav","harry","jenifer"];
//for( var i=0;i<=names.length;i++)
//{
//	var str=names[i].charAt(0);
//	if(str=="j" || str=="J")
//	{
//
//	console.log(GoodBye + names[i]);
//	
//	}
//	else
//	{
//		console.log(Hello  + names[i]);
//	}
//}




(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
   console.log("GoodBye " +names[i]);
  } else {
    console.log("Hello " +names[i]);
  }
}

})();
