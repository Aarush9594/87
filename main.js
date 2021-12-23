student_array = []
function submit(){
    display_student = []
    for (i=1;i<5;i++){
        var student_name = document.getElementById("name_of_the_student_"+i).value;
        console.log(student_name)
        student_array.push(student_name)
    }
    console.log(student_array)
    var length_of_array = student_array.length
    console.log(length_of_array)
    for (j=0;j<length_of_array;j++){
        display_student.push("<h4>NAME - "+student_array[j]+"</h4>")
        console.log(display_student)
    }
    console.log(display_student)
    document.getElementById("display_name_with_commas").innerHTML=display_student
    var remove_comma = display_student.join(" ");
    console.log(remove_comma)
    document.getElementById("display_name_without_commas").innerHTML=remove_comma
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
student_array.sort()
console.log(student_array)
display_sorted_student = []
var length_of_array = student_array.length
console.log(length_of_array)
for (j=0;j<length_of_array;j++){
    display_sorted_student.push("<h4>NAME - "+student_array[j]+"</h4>")
    console.log(display_sorted_student)
}
var remove_comma = display_sorted_student.join(" ");
    console.log(remove_comma)
document.getElementById("display_name_without_commas").innerHTML=remove_comma
}