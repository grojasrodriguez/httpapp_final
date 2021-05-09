 const http=require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        "content-type": "text/html",
    });
    res.end("<h1>Hello World from Wake Tech Community College</h1>, <img src=https://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/shutterstock_data_science_aslysun-200x170.jpg alt=Data Science width=150 height=150/>, <p> My name is Gabriela Rojas. I am taking Data Science at Wake Tech Community College. I decided on Data Science because it its a perfect complement to my career. I have a Bachelor's Degree in Business and for the last 10 years of my career, I have been working with the development of Business Intelligence in the bank industry. For the moment, I am evaluating the possibility to continue for a bachelor's degree, but for now, I am completely motivated and satisfied with all the new things I am learning. I am sure the degree will help me so much in the future to achieve my professional goals. </p>");
});

server.listen(8080, () => {
    console.log("Listening to requests on Port 8080");
});