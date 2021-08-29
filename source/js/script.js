const telValue = document.querySelector(".recording-info__input-phone");
telValue.addEventListener("input", () => {
    telValue.value = telValue.value.replace(/\D/g,'');
});
