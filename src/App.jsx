import React from 'react';
import './index.css';
import Card from './Card';
import Footer from './Footer';


function App() {
    return (
        <>
            <h1><b>Top 5 Netflix Series</b></h1>
            <div class="row">
                <div class="col-md-4">
                    <Card name="Stranger Things" imgsrc="images/1.jpg" content="Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers that is streaming on Netflix." link="https://www.netflix.com/watch/80229873?trackId=255824129"
                    />
                </div>

                <div class="col-md-4">
                    <Card name="Breaking Bad" imgsrc="images/2.jpg" content="Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts." link="https://www.netflix.com/watch/70236047?trackId=255824129"/>
                </div>

                <div class="col-md-4">
                    <Card name="Money Heist" imgsrc='images/3.jpg' content="A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history " link="https://www.netflix.com/search?q=money%20heist&jbv=80192098"/>
                </div>

                <div class="col-md-4">
                    <Card name="Peaky Blinders" imgsrc="images/4.jpg" content="Peaky Blinders is a British crime drama. Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. " link="https://www.netflix.com/watch/80003008?trackId=255824129"/>
                </div>

                <div class="col-md-4">
                    <Card name="Lucifer" imgsrc="images/5.jpg" 
                    content="Lucifer, the original fallen angel, who has become dissatisfied with his life in hell. After abandoning his throne and retiring to Los Angeles." link="https://www.netflix.com/watch/80138257?trackId=255824129"/>
                </div>
            </div>
            
            <Footer/>
        </>
    );
}

export default App;