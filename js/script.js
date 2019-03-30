 ///a project by Abdulrazaq Raji
    ///15/30GC006
    ///Electrical and electronics Engineering
$(document).ready(function(){
    console.log("hello world am linked to the page");
    $("#calVol").on("click",function(){
        
        var vnl = $('#vnl').val();
        var vfl = $('#vfl').val();
        console.log(vnl +""+ vfl);
       var  Fvr = ((vnl-vfl)/vfl)*100 ;
        console.log(Fvr);
        this.text= "toggled"
        $("#result1").text(Fvr);
    }) ;       


    $("#calEff").on('click',function(){
        
    
    //Variable Decleartion
    var V = $('#vol').val();
    var I = $('#cur').val();
    var R = $('#res').val();
   var Ia = $('#curA').val();
   var If = $('#curF').val();
   var C = $('#cor').val();
   var eff = (V*I)/(V*I+((Ia^2)*R)+(If*V)+C);
       $("#result2").text(eff);
        console.log(eff);
    }) ; 

});

