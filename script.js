// Setting today's date 
$(".currentDate").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var str 
// var str2

function createFields(){
    str = [8,9,10,11,12,1,2,3,4,5];
    for (let i = 0; i < str.length; i++) {
    //  localStorage.setItem(str[i], {todo:'', color: ''})
        var appendTr = $(".main").append("<tr>")

        var timeInterface = $("<td>")
            timeInterface.text(str[i])

        var todoInput = $("<td>")
            todoInput.attr('id', 'todoInput'+str[i])
            todoInput.append("<input id="+ str[i]+">")

        var saveBtn = $("<td>")
            var btnFunction = $("<button>")
            btnFunction.text("Save")
            btnFunction.addClass("saveTime")
            btnFunction.attr('searchkey',"todoInput"+str[i])
            btnFunction.attr('localstoragekey',str[i])

                saveBtn.append(btnFunction)
    
        appendTr.append(timeInterface, todoInput, saveBtn)

    }
}
createFields();
 
getInput();

$(".saveTime").on("click",saveInput)
var seperateInputs
var localstoragekey
var firstInput

function saveInput(){
    console.log($(this).attr("localstoragekey"))
    localstoragekey = $(this).attr("localstoragekey")
    // var localstoragekey = localStorage[$(this).attr("localstoragekey")]
    firstInput = $(this).parent().parent().children("#"+$(this).attr("searchKey")).children().val()

    seperateInputs = [{
        btnId: localstoragekey,
        inputValue: firstInput
    }]
    // localStorage.setItem(localstoragekey, firstInput);
    localStorage.setItem("Input", JSON.stringify(seperateInputs));
    console.log(seperateInputs)
    
}

function getInput(){
    var savedItem = JSON.parse(localStorage.getItem("Input"))
    // when it is an input dont use .text 
        $("#8").val(savedItem[0].inputValue)
        // $("#9").val(savedItem[1].inputValue)
        // $("#10").val(savedItem[2].inputValue)
        // $("#11").val(savedItem[3].inputValue)
        // $("#12").val(savedItem[4].inputValue)
        // $("#1").val(savedItem[5].inputValue)
        // $("#2").val(savedItem[6].inputValue)
        // $("#3").val(savedItem[7].inputValue)
        // $("#4").val(savedItem[8].inputValue)
        // $("#4").val(savedItem[9].inputValue)

    // $("#firstTime").val(savedItem[0].inputValue);
    
    console.log(savedItem[0].inputValue)
}

// CHANGING COLORS WITH TIME 



function colorSwitch(){
    for (let time = 0; time < str.length; time++) {
        if (moment().hour() <= str[time]){
            $("input").css({"background-color": "#F0FFFF"})
        } else if (moment().hour() >= str[time]){
            $("input").css({"background-color": "#4682B4"})
        }
    }
}
colorSwitch()
