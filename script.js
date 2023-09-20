window.onload = init;
function init() {
    var esimene = Math.floor((Math.random() * 100) + 1);
    var teine = Math.floor((Math.random() * 100) + 1);
    document.getElementById("Value1").value = esimene;
    document.getElementById("Value2").value = teine;    
}
function DoAdd()
{
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var vastus = new Number(
        document.getElementById("vastus").value);

    if (vastus ==Value1+Value2){
        alert("õige!")
    }
    else {
       alert("vale haha!");
    }
        
}

function DoSub()
{
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var vastus = new Number(
        document.getElementById("vastus").value);
    if (vastus ==Value1-Value2){
        alert("õige!")
    }
    else {
       alert("vale haha!");
    }
}

function DoMul()
{
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var vastus = new Number(
        document.getElementById("vastus").value);
        if (vastus ==Value1*Value2){
            alert("õige!")
        }
        else {
           alert("vale haha!");
        }
    }
function DoDiv()
{
    // Obtain the current values of Value1 and Value2.
    var Value1 = new Number(
        document.getElementById("Value1").value);
    var Value2 = new Number(
        document.getElementById("Value2").value);
    var vastus = new Number(
        document.getElementById("vastus").value);
        if (vastus ==Value1/Value2){
            alert("õige!")
        }
        else {
           alert("vale haha!");
        } 
}
