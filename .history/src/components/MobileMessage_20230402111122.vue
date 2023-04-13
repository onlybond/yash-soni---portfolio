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
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%;
    height: 100%; */
    padding: 20px;
    background-color: #f2f2f2;
    font-size: 1.5rem;
    text-align: center;
}
p{
    width: 100px;
    height: 100px;
}
</style>