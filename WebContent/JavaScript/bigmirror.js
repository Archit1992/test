/**
 * author : Archit Gajjar
 */
$(document).ready(function(){
	$.ajax({
		url : 'https://private-f3b4b-interview2.apiary-mock.com/data',
		success : function(data) {
			$('#img1').attr('src',data[2].image);
			$('#img2').attr('src',data[0].image);
			$('#img3').attr('src',data[1].image);
			
			$('#p1').html((data[2].name).toUpperCase());
			$('#p2').html((data[0].name).toUpperCase());
			$('#p3').html((data[1].name).toUpperCase());
			var datelist = getDate(data[0].timestamp, data[1].timestamp, data[2].timestamp);
			$('#t1').html(datelist[2]);
			$('#t2').html(datelist[1]);
			$('#t3').html(datelist[2]);
		},
		error: function(xhr, status){
			alert("Not found!");
		}
	});
	
	$('#task1').click(function(){
		$.ajax({
			url : 'https://private-f3b4b-interview2.apiary-mock.com/data',
			success : function(data) {
				$('#secret').html(data[0].secret);
				$('#sec_color').attr("style", 'background-color : '+data[0].secret);
				
			},
			error: function(xhr, status){
				alert("Not found!");
			}
		})
	})
	$('#task2').click(function(){
		$.ajax({
			url : 'https://private-f3b4b-interview2.apiary-mock.com/data',
			success : function(data) {
				$('#secret').html(data[1].secret);
				$('#sec_color').attr("style", 'background-color : '+data[1].secret);
			},
			error: function(xhr, status){
				alert("Not found!");
			}
		})
	})
	$('#task3').click(function(){
		$.ajax({
			url : 'https://private-f3b4b-interview2.apiary-mock.com/data',
			success : function(data) {
				$('#secret').html(data[2].secret);
				$('#sec_color').attr("style", 'background-color : '+data[2].secret);
			},
			error: function(xhr, status){
				alert("Not found!");
			}
		})
	})
	
	function getDate(timestamp1,timestamp2,timestamp3 ){
		var list= [timestamp1,timestamp2,timestamp3];
		var answer=[];
		for(var i=0; i<=list.length; i++){
			var theDate = new Date(list[i] * 1000);
			val = (theDate.getMonth()+1)+" / "+theDate.getDate()+" / "+theDate.getFullYear();
			answer.push(val);
		}
		return answer;
	}
})