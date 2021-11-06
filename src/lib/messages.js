import Swal from "sweetalert2";

export const confirmation_message = async message => {
  let result = await Swal.fire({
    title: "Внимание",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Да, продолжить",
    cancelButtonText: "Отмена"
  });

  return result;
};

export const confirmation_message_html = async message => {
  let result = await Swal.fire({
    title: "Внимание",
    html: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Да, продолжить",
    cancelButtonText: "Отмена"
  });

  return result;
};

export const error_message = async (title, message) => {
  await Swal.fire({
    icon: "error",
    title: title,
    text: message
  });
};

export const error_message_html = async (title, message) => {
  message = message.replace(/"/g, "");

  await Swal.fire({
    icon: "error",
    title: title,
    html: message
  });
};

export const warning_message_html = async (title, message) => {
  message = message.replace(/"/g, "");

  await Swal.fire({
    icon: "warning",
    title: title,
    html: message
  });
};

export const success_message = async (title, message) => {
  await Swal.fire({
    icon: "success",
    title: title,
    text: message
  });
};

export const warning_message = async (title, message) => {
  await Swal.fire({
    icon: "warning",
    title: title,
    text: message
  });
};
