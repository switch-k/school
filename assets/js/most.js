$('#myModal').modalSteps();

var callback = function (){
    console.log('Congratulations!');
}
$('#modal-sample').modalSteps({
    completeCallback: callback
});

