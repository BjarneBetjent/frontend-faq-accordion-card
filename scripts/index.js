let faqArray = document.getElementsByClassName("faq");

function faqOnclick (event)
{
    resetFAQStyling();
    const faqElement = getFAQNode(event.target);
    const answerDiv = faqElement.querySelector(".answer");
    const h2Element = faqElement.querySelector("h2");
    answerDiv.style.display = "block";
    h2Element.style.fontWeight = "700";
    
}

function getFAQNode (element)
{
    let faqElement = element;
    while(faqElement.className != "faq")
    {
        faqElement = faqElement.parentNode;
    }
    return faqElement;    
}

function resetFAQStyling ()
{
    for(let i = 0; i < faqArray.length; i++)
    {
        faqArray[i].querySelector("h2").style.fontWeight = "400";
        faqArray[i].querySelector(".answer").style.display = "none";
    }
}



for(let i = 0; i < faqArray.length; i++)
{
    faqArray[i].addEventListener("click", faqOnclick);
}

