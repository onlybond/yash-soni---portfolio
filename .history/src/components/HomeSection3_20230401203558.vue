<template>
    <section class="container sectionHome3" data-scroll-section>
        <div class="overlay">
        </div>
        <div class="section-content">
            <h3 class="title">Education &amp; Experience</h3>
            <ul>
                <div class="overlay">
                    <li>
                        <span class="year">2006-2017</span>
                        <span class="description">St. Michael's</span>
                    </li>
                </div>
                <div class="overlay">
                    <li>
                        <span class="year">2017-2019</span>
                        <span class="description">Loyola Academy Junior</span>
                    </li>
                </div>
                <div class="overlay">
                    <li>
                        <span class="year">2020-2023</span>
                        <span class="description">Loyola Academy Degree</span>
                    </li>
                </div>
                <div class="overlay">
                    <li>
                        <span class="year">2015-2019</span>
                        <span class="description">Freelancing</span>
                    </li>
                </div>
                <div class="overlay">
                    <li>
                        <span class="year">2022-present</span>
                        <span class="description">Blur'd</span>
                    </li>
                </div>
            </ul>
        </div>
    </section>
</template>
<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    background-color:black;
    display: flex;
    align-items:start;
    justify-content: center;
    margin: 0;
    color:white;
}
.title{
    font-size:70px;
}
ul{
    list-style: none;
}
ul div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
ul div li span{
    font-size:30px;
    font-weight: 800;
}
ul div:nth-child(1){
    position: absolute;
    top:35%;
    left:30%;
}
ul div:nth-child(2){
    position: absolute;
    top:42%;
    left:40%;
}
ul div:nth-child(3){
    position: absolute;
    top:56%;
    left:30%;
}
ul div:nth-child(4){
    position: absolute;
    top:63%;
    left:40%;
}
ul div:nth-child(5){
    position: absolute;
    top:%;
    left:30%;
}
li span{
    width: 100px;
}
li span:nth-child(2){
    width: 200px;
}
</style>
