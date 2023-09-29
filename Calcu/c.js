var result=document.getElementById("return");



function display(number){
result.value+=number;/*first data will be store and after this all data will be shown in inputs*/

}
function calculate()
{
    var final_no=result.value;
    var final_result=eval(final_no);
    result.value=final_result;
}
function clrs()
{
result.value= "0";
}
function dle()
{
    result.value=result.value.slice(0,-1);

}