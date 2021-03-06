
$(document).ready(function() {
    
    displayQuoteFromArray();

    $("#next_quote").click(function() {
        $('#main').fadeOut(1200, displayQuoteFromArray);
    });

    function displayQuote(response) {
            console.log(response.quote);
            $("#quote").text(response.quote);
            $('#author').text(response.author);

            $('#main').fadeIn(1200); 
        }
	
    function displayQuoteFromArray() {
        var myQuotes = [
	        {
	            author: "C S Lewis",
	            quote:"A sum can be put right; but only by going back till you find the error and working it afresh from that point, never by simply going on."
	        },
	        {
	            author: "John Dewey",
	            quote:"It is a familiar and significant saying that a problem well put is half-solved."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"The most effective debugging tool is still careful thought, coupled with judiciously placed print statements."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"90% of the functionality delivered now is better than 100% delivered never."
	        },
	        {
	            author: "Albert Einstein",
	            quote:"A clever person solves a problem. A wise person avoids it."
	        },
	        {
	            author: "Albert Einstein",
	            quote:"The formulation of the problem is often more essential than its solution, which may be merely a matter of mathematical or experimental skill."
	        },
	        {
	            author: "Atul Gawande",
	            quote:"We always hope for the easy fix: the one simple change that will erase a problem in a stroke. But few things in life work this way. Instead, success requires making a hundred small steps go right."
	        },
	        {
	            author: "Antoine de Saint-Exupery",
	            quote:"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"If you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"When you are working on a problem, you sometimes get so close to it that you can’t see all the options. You miss elegant solutions because the creative part of your mind is suppressed by the intensity of your focus."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"Programming is a social activity."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"The only way to go fast, is to go well."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king."
	        },
	        {
	            author: "Eric Schmidt",
	            quote:"There's nothing that cannot be found through some search engine or on the Internet somewhere."
	        },
	        {
	            author: "Donald Knuth",
	            quote:"Programming is the art of telling another human being what one wants the computer to do."
	        },
	        {
	            author: "Donald Knuth",
	            quote:"Programs are meant to be read by humans and only incidentally for computers to execute."
	        },
	        {
	            author: "Donald Knuth",
	            quote:"Always remember, however, that there’s usually a simpler and better way to do something than the first way that pops into your head."
	        },
	        {
	            author: "Bjarne Stroustrup",
	            quote:"The most fundamental problem in software development is complexity. There is only one basic way of dealing with complexity: divide and conquer."
	        },
	        {
	            author: "Bjarne Stroustrup",
	            quote:"The most important single aspect of software development is to be clear about what you are trying to build."
	        },
	        {
	            author: "Bjarne Stroustrup",
	            quote:"It's easy to win forgiveness for being wrong; being right is what gets you into real trouble."
	        },
	        {
	            author: "Joshua Block",
	            quote:"I will cheerfully spend literally hours on identifier names: variable names, method names, and so forth, to make my code readable."
	        },
	        {
	            author: "Ken Thompson",
	            quote:"It's always good to take an orthogonal view of something. It develops ideas."
	        },
	        {
	            author: "Ken Thompson",
	            quote:"When in doubt, use brute force."
	        },
	        {
	            author: "Linus Torvalds",
	            quote:"Bad programmers worry about the code. Good programmers worry about data structures and their relationships."
	        },
	        {
	            author: "Rob Pike",
	            quote:"Data dominates. If you've chosen the right data structures and organized things well, the algorithms will almost always be self-evident."
	        },
	        {
	            author: "Rob Pike",
	            quote:"Object-oriented design is the roman numerals of computing."
	        },
	        {
	            author: "Rob Pike",
	            quote:"Eventually, I decided that thinking was not getting me very far and it was time to try building."
	        },
	        {
	            author: "Eric Schmidt",
	            quote:"The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"Controlling complexity is the essence of computer programming."
	        },
	        {
	            author: "Robert C. Martin",
	            quote:"Programmers must avoid leaving false clues that obscure the meaning of code."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"Another effective [debugging] technique is to explain your code to someone else. This will often cause you to explain the bug to yourself."
	        },
	        {
	            author: "Alexander Graham Bell",
	            quote:"Great discoveries and improvements invariably involve the cooperation of many minds."
	        },
	        {
	            author: "Christopher Strachey",
	            quote:"You can't see the semantic wood for the syntactic trees."
	        },
	        {
	            author: "Nita Leland",
	            quote:"Pay attention to the inner voice that tells you when something feels right. Much of your creative problem-solving occurs at an unconscious level."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"One university computer center kept a teddy bear near the help desk. Students with mysterious bugs were required to explain them to the bear before they could speak to a human counselor."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"Mechanical rules are never a substitute for clarity of thought."
	        },
	        {
	            author: "Brian Kernighan",
	            quote:"Believe the terrain, not the map."
	        },
	        {
	            author: "Scott Berkun",
	            quote:"The best lesson from the myths of Newton and Archimedes is to work passionately but to take breaks. Sitting under trees and relaxing in baths lets the mind wander and frees the subconscious to do work on our behalf."
	        },
	        {
	            author: "Scott Berkun",
	            quote:"Increasing creativeness doesn’t require anything more than increasing your observations: become more aware of possible combinations."
	        },
	        {
	            author: "Scott Berkun",
	            quote:"The bottleneck is never code or creativity; it's lack of clarity."
	        },
	        {
	            author: "Mary Poppendieck",
	            quote:"The biggest cause of failure in software-intensive systems is not technical failure; it’s building the wrong thing."
	        },
	        {
	            author: "Mary Poppendieck",
	            quote:"The most successful development occurs when developers talk directly to customers or are part of business teams."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"The big optimizations come from refining the high-level design, not the individual routines."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"Spend your time on the 20 percent of the refactorings that provide 80 percent of the benefit."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"The single most important reason to create a routine is to reduce a program's complexity. Create a routine to hide information so that you won't need to think about it."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"Few people can understand more than three levels of nested ifs."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"The most challenging part of programming is conceptualizing the problem, and many errors in programming are conceptual errors."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"Modern software is inherently complex, and no matter how hard you try, you'll eventually bump into some level of complexity that's inherent in the real-world problem itself."
	        },
	        {
	            author: "Steve McConnell",
	            quote:"It's better to strive for a good solution and avoid disaster rather than trying to find the best solution."
	        },
	        {
	            author: "Robert H Schuller",
	            quote:"Again and again, the impossible problem is solved when we see that the problem is only a tough decision waiting to be made."
	        },
	        {
	            author: "Sherlock Holmes",
	            quote:"When you have eliminated the impossible, whatever remains, however improbable, must be the truth."
	        },
	        {
	            author: "Thomas Alba Edison",
	            quote:"I have not failed. I've just found 10,000 ways that won't work."
        } 
        ];
        var random = Math.floor(Math.random() * myQuotes.length);
        if ($("#quote").text().localeCompare(myQuotes[random].quote) == 0 ) {
             random = Math.floor(Math.random() * myQuotes.length);
        }
        displayQuote(myQuotes[random]);
        
    }
    

}); //end of document ready
