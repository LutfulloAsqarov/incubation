// Formani yuborish uchun funksiya
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Forma yuborilishini oldini olish

    // Ma'lumotlarni olish
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;

    // Ma'lumotlarni ko'rsatish
    alert("Xabar yuborildi!\nIsm: " + name + "\n
