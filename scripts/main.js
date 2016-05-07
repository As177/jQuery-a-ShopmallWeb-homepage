 $(function(){
   $("#nav li").hover(function(){
   	$(this).find(".whyNav").show();
   },function(){
   	$(this).find(".whyNav").hide();
   }); 	   
  $("#inputSearh").focus(function(){
  	$(this).addClass("focus");
  	if($(this).val()==this.defaultValue){
  		$(this).val("");
  	}
  }).blur(function(){
  	$(this).removeClass("focus");
  	if ($(this).val()=='') {
  		$(this).val(this.defaultValue);
  	}
  }).keyup(function(e){
  	if(e.which == 13)
  		{alert('提交表单');}
  })
 })