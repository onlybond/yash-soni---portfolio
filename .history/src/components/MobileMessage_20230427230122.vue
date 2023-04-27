<template>
    <div class="mobile-message">
        <p>Mobile view is still in construction.<br/> Please open this website on a desktop/laptop.</p>
    </div>
</template>
<script>
export default {
    name: "MobileMessage"
};
</script>
<style>
.mobile-message {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-align: center;
    background-color:black
}
p{
    width: 100vw;
    height: 100vh;
    color: #fff;
}
</style>