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
function saveData() {
    const email = form.elements.email.value.trim();
    const message =  form.elements.message.value.trim();
    const data = {
        email: email,
        message: message
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit)
function handleInput(event) {
    
    saveData();
}
function handleSubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message =  form.elements.message.value.trim();
    if (!email || !message) {
        console.log({email, message});
    };
    localStorage.removeItem("feedback-form-state");
    form.reset()
}
if (localStorage.getItem("feedback-form-state")) {
    const storedData = JSON.parse(localStorage.getItem("feedback-form-state"));

    form.elements.email.value = storedData.email;
    form.elements.message.value = storedData.message
}

