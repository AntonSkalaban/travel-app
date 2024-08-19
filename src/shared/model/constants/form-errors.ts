export const formErrors = {
  email: {
    require: { en: "Email is Require", ru: "Email обязателен" },
    invalid: { en: "invalid Email", ru: "Email некоректен" },
  },
  firstName: {
    require: { en: "First Name is required", ru: "Имя обязательно" },
  },
  lastName: {
    require: { en: "Last Name is required", ru: "Фамилия обязательно" },
  },
  fullName: {
    require: { en: "Full Name is required", ru: "ФИЛ обязательно" },
    regex: {
      en: "Full name must only contain letters and spaces",
      ru: "Должно содержать буквы и пробелы",
    },
  },
  phone: {
    require: { en: "Phone number is required", ru: "Телефон обязателен" },
    length: {
      en: "Must be exactly 11 characters long",
      ru: "Должен содержать 11 цифр",
    },
  },
  message: {
    require: { en: "message is required", ru: "Сообщение обязательно" },
    max: {
      en: "Max length 300",
      ru: "Максимальная длина 300 символов",
    },
  },
};
