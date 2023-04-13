<template>
    <section class="container sectionHome3" data-scroll-section>
        <div class="overlay">
        </div>
        <div class="section-content">
            <h3 class="title">Education &amp; Experience</h3>
            <ul>
                <li>
                    <div class="overlay">
                        <span class="year">2006-2017</span>
                        <span class="description">St. Michael's</span>
                    </div>
                </li>
                <li>
                    <div class="overlay">
                        <span class="year">2017-2019</span>
                        <span class="description">Loyola Academy Junior</span>
                    </div>
                    </li>
                <li>
                    <div class="overlay">
                        <span class="year">2020-2023</span>
                        <span class="description">Loyola Academy Degree</span>
                    </div>
                </li>
                <li>
                    <div class="overlay">
                        <span class="year">2015-2019</span>
                        <span class="description">Freelancing</span>
                    </div>
                </li>
                <li>
                    <div class="overlay">
                        <span class="year">2022-present</span>
                        <span class="description">Blur'd</span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 0;
    color: white;
}

.title {
    font-size: 70px;
}

ul {
    list-style: none;
}

ul div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

ul li span {
    font-size: 40px;
    font-weight: 800;
}

ul li:nth-child(1) {
    position: absolute;
    top: 25%;
    left: 25%;
}

ul li:nth-child(2) {
    position: absolute;
    top: 40%;
    left: 40%;
}

ul li:nth-child(3) {
    position: absolute;
    top: 55%;
    left: 25%;
}

ul li:nth-child(4) {
    position: absolute;
    top: 70%;
    right:30%;
}

ul li:nth-child(5) {
    position: absolute;
    top: 85%;
    left: 25%;
}

li span {
    /* width: 100px; */
    margin: 2px 20px;
    /* z-index: -1; */
}

.overlay {
    background-color: none;
    /* opacity: 0; */
    Animation:slide 3s ease;
}
@keyframes slide {
    0%{
        transform: translateX(100%);
        background-color:none;
    }
    100%{
        transform: translateX(100%);
        background-color:blue;
    }
}
</style>
