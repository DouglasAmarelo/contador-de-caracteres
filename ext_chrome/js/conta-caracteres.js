jQuery.fn.contaCaracteres = function() {
	this.each(function(){
		elem = $(this);
		var contador = $('<div class="resultado">Caracteres: <span>0</span></div>');
		elem.after(contador);
		elem.data("campocontador", contador);

		elem.keyup(function(){
			var elem = $(this);
			var campocontador = elem.data("campocontador");
			campocontador.html('Caracteres: <span>' + elem.val().length + '</span>' );
		});
	});
	return this;
};