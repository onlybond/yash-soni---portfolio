<template>
    <section class="container sectionHome3" data-scroll-section ref="section">
        <div>
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

<script>
export default {
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.$refs.section.classList.add("animate");
                } else {
                    this.$refs.section.classList.remove("animate");
                }
            });
        }, { threshold: 0.5 });
        observer.observe(this.$refs.section);
    }
}
</script>

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
    right: 30%;
}

ul li:nth-child(5) {
    position: absolute;
    top: 85%;
    left: 25%;
}

li {
    overflow: hidden;
}

.overlay span {
    margin: 2px 20px;
    opacity: 0;
    z-index: -1;
    animation: textReveal 1s ease-in forwards;
    animation-delay: 1.5s;
}

.overlay::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 0%;
    height: 100%;
    background: white;
    z-index: 10;
}

[data-scroll-section].animate li:nth-child(1) .overlay::after {
    animation: slideEffect 2s cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 1s;
}
[data]
[data-scroll-section].animate li:nth-child(2) .overlay::after {
    animation: slideEffect 2s cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 3s;
}
[data-scroll-section].animate li:nth-child(3) .overlay::after {
    animation: slideEffect 2s cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 5s;
}
[data-scroll-section].animate li:nth-child(4) .overlay::after {
    animation: slideEffect 2s cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 7s;
}
[data-scroll-section].animate li:nth-child(5) .overlay::after {
    animation: slideEffect 2s cubic-bezier(0.19, 1, 0.22, 1);
    animation-delay: 9s;
}
@keyframes textReveal {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes slideEffect {
    0% {
        left: 0;
        width: 0;
    }

    50% {
        left: 0;
        width: 100%;
    }

    100% {
        left: 100%;
        width: 0;
    }
}

</style>
