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
    font-size: 1.5rem;
    text-align: center;
}
p{
    width: 400px;
    height: 100px;
}
</style>