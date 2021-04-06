	function functionSuccess(data){
		$("#loading").hide();
		alert("Комментарий успешно добавлен!");
		document.comment.reset();
	}
	function functionBefore(){
		$("#loading").show();
	}

	$(document).ready(function() {
    $(".btn__submit").click(
		function(){
				var name = document.getElementById('name').value;

				var sex = document.querySelector("input[name='sex']:checked").value;

				var email = document.getElementById('email').value;

				var text = document.getElementById('text').value;

				var today = new Date();

				var dd = String(today.getDate()).padStart(2, '0');

				var mm = String(today.getMonth() + 1).padStart(2, '0');

				var yyyy = today.getFullYear();

				var date = mm + '/' + dd + '/' + yyyy;

			sendAjaxForm(name, sex, email, text, date);
			return false; 
		});
    loadcomment();
});

	function sendAjaxForm(name, sex, email, text, date) {
				$.ajax ({
					url: "php/send_data.php",
					type: "POST",
					data: ({name: name, email: email, sex: sex,date: date,text: text}),
					dataType: "html",
					beforeSend: functionBefore,
					success: functionSuccess
				});
}
		function loadcomment() {
				$.ajax ({
					url: "php/get_data.php",
					type: "POST",
					data: ({}),
					dataType: "html",
					beforeSend: functionBefore,
					success: funcSuccessLoad
				});
}

	function funcSuccessLoad (data) {
			data = JSON.parse(data);
			console.log(data);
			for(var key in data)
			{
			let massage = 
			`<div class="content">
			<div class="person__information">
				<div class="person__picture">
				<img src='img/${data[key].sex}.png' alt='${data[key].sex}' />
				</div>

				<div class="person__data">
					<div class="person__name">
						${data[key].name}
					</div>

					<div class="preson__email">
						${data[key].email}
					</div>

					<div class="person__date">
						${data[key].date}
					</div>
				</div>
			</div>
			<div class="content__text">
				${data[key].text}
			</div>
		</div>`;
			document.getElementById("content__area").insertAdjacentHTML('afterend', massage);
		}}