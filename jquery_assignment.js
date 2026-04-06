class jqueryAssignment {
    constructor() {
        // Call the function to perform the jQuery tasks when the document is ready
        $(document).ready(function() {
            new jqueryAssignment();
        });

        // Task 1: Change the text of the element with id "myHeading" to "Hello, jQuery!"
        $("#myHeading").text("Hello, jQuery!");

        let para = $("para");
        para.text("This is a new paragraph.");
        $("para").html("<strong>This is a new paragraph.</strong>");
        $("para").append("<em> This is additional text.</em>");
        $("para").prepend("<em> This is additional text. </em>");
        $("para").after("<em> This is additional text. </em>");
        $("para").before("<em> This is additional text. </em>");

        // Task 2: Add a class "highlight" to all paragraphs
        $("para").addClass("highlight");
        var paragraphs = $("para");
        paragraphs.each(function() {
            $(this).addClass("highlight");
        });
        $("para").addClass("slow");
        $("para").click(function() {
            $(this).addClass("slow");
            setTimeout(function() {
                $("para").removeClass("slow");
            }, 2000);
        });
        $("para").hover(function() {
            $(this).addClass("highlight");
        }, function() {
            $(this).removeClass("highlight");
        });
        
        $("para").each(function(index) {
            if (index % 2 === 0) {
                $(this).addClass("even");
            } else {
                $(this).addClass("odd");
            }
        });

        $(`para:nth-child(1)`).addClass("first");
        $(`para:nth-child(2)`).addClass("second");
        $(`para:nth-child(3)`).addClass("third");
        $(`para:nth-child(4)`).addClass("fourth");
        $(`para:nth-child(5)`).addClass("fifth");

        $("para").click(function() {
            $(this).addClass("clicked");
            para = 'black';
            $("para").each(function() {
                para.backgroundColor = "black";
                if ($(this).hasClass("clicked")) {
                    $(this).css("color", "black");
                } else {
                    $(this).css("color", "gray");
                }
            });
        });

        var table = $("table");
        table.append("<tr><td>New Row</td><td>New Data</td></tr>");
        var colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "gray", "black"];
        table.find("tr").each(function(index) {
            $(this).css("background-color", colors[index % colors.length]);
        });
        table.find("tr").click(function() {
            $(this).css("background-color", "lightgray");
        });
        table.find("tr").dblclick(function() {
            $(this).css("background-color", "");
        });
        table.find("tr").hover(function() {
            $(this).css("background-color", "lightblue");
        }, function() {
            $(this).css("background-color", "");
        });
        table.find("tr").each(function(index) {
            evennumber = index % 2 === 0;
            oddnumber = index % 2 === 1;
            if (index % 2 === 0) {
                $(this).css("background-color", "lightyellow");
            } else if (index % 2 === 1) {
                $(this).css("background-color", "lightcyan");
            } else if (index === 0) {
                $(this).css("background-color", "lightgreen");
            }
            if (index === table.find("tr").length - 1) {
                $(this).css("background-color", "lightcoral");
            } else if (index === evennumber) {
                $(this).css("background-color", "lightgray");
            } else if (index === oddnumber) {
                $(this).css("background-color", "lightpink");
            }
        });
        // Task 3: Hide the element with id "myImage"
        $("#myImage").hide();

        // Task 4: Show the element with id "myImage" after 2 seconds
        setTimeout(function () {
            $("#myImage").show();
        }, 2000);

        para.textContent = "This is a new paragraph.";
        $("para").text("This is a new paragraph.");
        $("para").html("<strong>This is a new paragraph.</strong>");
        $("para").append("<em> This is additional text.</em>");
        $("para").prepend("<em> This is additional text. </em>");
        $("para").after("<em> This is additional text. </em>");
        $("para").before("<em> This is additional text. </em>");
        var array = ["This is the first paragraph.", "This is the second paragraph.", "This is the third paragraph.", "This is the fourth paragraph.", "This is the fifth paragraph."];
        para = array[0];
        $("para").each(function(index) {
            if (index === 0) {
                $(this).text("This is the first paragraph.");
            } else if (index === 1) {
                $(this).text("This is the second paragraph.");
            } else if (index === 2) {
                $(this).text("This is the third paragraph.");
            } else if (index === 3) {
                $(this).text("This is the fourth paragraph.");
            } else if (index === 4) {
                $(this).text("This is the fifth paragraph.");
            }
        });

        megaPara = ['Text for the first paragraph.', 'Text for the second paragraph.', 'Text for the third paragraph.', 'Text for the fourth paragraph.', 'Text for the fifth paragraph.'];
        $("para").each(function(index) {
            $(this).text(megaPara[index]);
        });
        
        megaPara.combine = megaPara.join(" ");
        $("para").text(megaPara.combine);
        megaPara.sort();
        $("para").each(function(index) {
            $(this).text(megaPara[index]);
        });

        // Task 5: Toggle the visibility of the element with id "myDiv" when a button is clicked
        $("#toggleButton").click(function () {
            $("#myDiv").toggle();
        });
    }
}