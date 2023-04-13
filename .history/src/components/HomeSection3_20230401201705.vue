<template>
    <section class="container sectionHome3" data-scroll-section>
        <div class="overlay">
        </div>
        <div class="section-content">
            <h3 class="title">Education &amp; Experience</h3>
            <ul>
                <div class="overlay">
                </div>
                <div class="overlay">
                </div>
                <div class="overlay">
                </div>
                <li>
                    <span class="year">2006-2017</span>
                    <span class="description">St. Michael's</span>
                </li>
                <li>
                    <span class="year">2017-2019</span>
                    <span class="description">Loyola Academy Junior</span>
                </li>
                <li>
                    <span class="year">2020-2023</span>
                    <span class="description">Loyola Academy Degree</span>
                </li>
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
.container {
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
    z-index: 1;
}

.section-content {
    position: relative;
    z-index: 2;
    color: white;
    padding-top: 50px;
}

.section-content h3 {
    font-size: 48px;
    margin-bottom: 50px;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 24px;
}

li {
    margin-bottom: 30px;
}

.year {
    display: inline-block;
    width: 150px;
    font-weight: bold;
}

.description {
    display: inline-block;
    margin-left: 20px;
}

.overlay-text {
    position: relative;
    display: inline-block;
}

.overlay-text::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.5s ease-out;
}

.overlay-text.reveal::before {
    opacity: 0;
}

.overlay-text span {
    position: relative;
    z-index: 2;
}
</style>
