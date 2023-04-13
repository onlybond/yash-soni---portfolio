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
    align-items:center;
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
li{
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
li:nth-child(1){
    position: absolute;
    top:20px;
    left:-10px;
}
li span{
    width: 100px;
}
li span:nth-child(2){
    width: 200px;
}
</style>
