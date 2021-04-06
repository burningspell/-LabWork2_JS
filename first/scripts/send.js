function functionBefore () {
			$("#loading").show();
		}

function functionSuccess (data) {
			$("#loading").hide();
			data = JSON.parse(data);
			console.log(data);
			for(var key in data)
			{
			let massage = 
			`<div class='content'>
				<div class="content__picture" style="background: url('${data[key].url}') no-repeat; background-size: 100%;">
				</div>

				<div class="content__information">
					<div class="information__theme">
						${data[key].theme}
					</div>

					<div class="information__text">
						${data[key].text}
					</div>
				</div>
			</div>`;
			document.getElementById("main").insertAdjacentHTML('beforeend', massage);
		}}

		$(document).ready(function () {
			$("#button__more").bind("click", function(){
				var count = document.getElementById('main').getElementsByClassName('content').length;
				$.ajax ({
					url: "php/3.php",
					type: "POST",
					data: ({kol: 5, tek: count}),
					dataType: "html",
					beforeSend: functionBefore,
					success: functionSuccess
				});
			});
			
		});
