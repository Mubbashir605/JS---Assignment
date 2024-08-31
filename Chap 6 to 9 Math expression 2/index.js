// Question 1
    document.write("Answer 1:-<br><br>")

    var a = 6
    document.write("The value of a is: ", a,"<br>")
    document.write("<br>The value of ++a is: ", ++a)
    document.write("<br>Now the value of a is: ", a,"<br>")

    document.write("<br>The value of a++ is: ", a++)
    document.write("<br>Now the value of a is: ", a,"<br>")

    document.write("<br>The value of --a is: ", --a)
    document.write("<br>Now the value of a is: ", a,"<br>")

    document.write("<br>The value of --a is: ", a--)
    document.write("<br>The value of a is: ", a,"<br><br>")

// Question 2
    document.write("Answer 2:-<br><br>")

        a = 2
        b = 1

    // After --a = 1 (decrement)
    // After --b = 0 (decrement)
    // After b++ = 1 (increment)
    // After b-- = 1 (decrement but return the value before decrement)

    document.write("a is ",a,"<br>")
    document.write("b is ", b,"<br>")
    var result = --a - --b + ++b + b--;
    document.write("The result of the expression is: ", result,"<br><br>")
    
// Question 3 
    document.write("Answer 3:-<br><br> Prompt & Alert ")

    var name = prompt ("Please enter your name")
    alert ("Hello! " + name )

    document.write("<br><br>")

// Question 5
    document.write("Answer 5:-<br><br> ")

    var num = prompt ("Enter a number :(Default number is 5):" ) ||5

    document.write(num,"X 1 = ",  num * 1,"<br>");
    document.write(num,"X 2 = ",  num * 2,"<br>");
    document.write(num,"X 3 = ",  num * 3,"<br>");
    document.write(num,"X 4 = ",  num * 4,"<br>");
    document.write(num,"X 5 = ",  num * 5, "<br>");
    document.write(num,"X 6 = ",  num * 6,"<br>");
    document.write(num,"X 7 = ",  num * 7,"<br>");
    document.write(num,"X 8 = ",  num * 8,"<br>");
    document.write(num,"X 9 = ",  num * 9,"<br>");
    document.write(num,"X 10 = ", num * 10,"<br><br>");

// Question 6 
    document.write("Answer 6:-<br><br> ")

    var subject1 = "English"
    var subject2 = "Urdu"
    var subject3 = "Math"

    var eachSubject = 100   
    var English = 63
    var Urdu = 59
    var Math = 72

    var totalMarks = eachSubject * 3
    var obtainedMarks = English + Urdu + Math
    var per = (obtainedMarks / totalMarks) * 100
    document.write(subject1 , English + "<br>", subject2 , Urdu + "<br>", subject3 , Math + "<br>")

    document.write("Total marks is ",totalMarks,"<br>")
    document.write("Obtained marks is ",obtainedMarks,"<br>")
    document.write("the percentage of marks is ",per,"<br>")







    





    

