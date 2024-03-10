//1) Використовуючи делегуваня, відстежуй на формі 
//подію input і щоразу записуй у локальне сховище 
//об'єкт з полями email і message, у яких зберігай 
//поточні значення полів форми.Нехай ключем для
//сховища буде рядок "feedback-form-state".
// 2) Під час завантаження сторінки перевіряй стан 
//сховища, і якщо там є збережені дані, то 
//заповнюй ними поля форми.В іншому випадку 
//поля повинні бути порожніми.
//3) Під час сабміту форми очищай сховище і поля 
//форми, а також виводь у консоль об'єкт з полями 
//email, message та їхніми поточними значеннями.
const form = document.querySelector(".feedback-form")
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit)
function handleInput(event) {
    event.preventDefault()
    const email = form.elements.email.value;
    const message = form.elements.message.value
    const data = {
        email: email,
        message: message
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
function handleSubmit(event) {
    event.preventDefault()
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    localStorage.removeItem("feedback-form-state");
    form.reset()
}
 
