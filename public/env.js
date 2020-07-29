console.log('env loaded')

$(document).ready(function(){
    setInterval(()=>{
        $.get("/random",(result)=>{
            $("#randomNumber").html(result)
        })
    },1000)
    $('#btnWeather').click(function(){
        alert('BTN WEATHER CLICKED')
        $.get( '/weather', function( data ) {
            console.log('data',data)
            // $( ".result" ).html( data );
            // alert( "Load was performed." );
          });
    })  
    $('#btnSum').click(function(){
        let num1=$('#numberone').val()
        let num2=$('#numbertwo').val()
        console.log(num1)
        console.log(num2)
        let data={
            num1,num2
        }
        $.get('/adder',data,function(result){
            console.log(result)
            $('#result').val(result.result)
        })

    })

   
})



