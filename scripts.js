let idCounter=0;
$('button').click(()=>{
    let todo = $('#todo').val();
    $(".todo").append(`<li class="todoitem" id="li${idCounter}"> <span> ${todo} </span> <img class="bin" id="bin${idCounter}" src="./trash.svg" alt="">
    <img class="check" id="check${idCounter}" src="./tick.svg" alt=""> </li>`);
    $('input').val('');
    idCounter++;
    $(".bin").click(function (event){
        let del = $(event.target).parent();
        $(del).remove();
    });
    $(".check").click(function(event){
        let check = $(event.target).parent()[0].id;
        if($(`#${check} span`).hasClass("checked")){
            console.log("checked")
            $(`#${check} span`).removeClass();
        }else{
            $(`#${check} span`).attr("class","checked");
        }
    });
});
