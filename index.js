const data=[
    {
    "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
    "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
    },
    {
    "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
    "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
    },
    {
    "title": "Moderna Booster May Wane After 6 Months",
    "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
    },
    {
    "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
    "link":"https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
    
    },
    {
    "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
    "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
    },
    {
    "title": "We Urgently Need a New National COVID-19 Response Plan",
    "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
    }
    ]
    
   data.map(function (e){
    var div=document.createElement("div")
    var div2=document.createElement("div")
    var a=document.createElement("a")
    a.setAttribute("href", e.link)
    var a2=document.createElement("a")
    a2.setAttribute("href", e.link)
    div.setAttribute("id", "title")
    div2.setAttribute("id", "titleLeft")
    var h3=document.createElement("h3");
    h3.textContent=e.title
    var h3L=document.createElement("h3");
    h3L.textContent=e.title
    div.append(h3)
    div2.append(h3L)
    a.append(div)
    a2.append(div2)
    let bodyRight=document.querySelector("#bodyRight").append(a)
    let bodyLeft=document.querySelector("#forgrid").append(a2)

   })
