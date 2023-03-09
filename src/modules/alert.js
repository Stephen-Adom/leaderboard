import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.js';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const successAlert = (message) => {
  Toast.fire({
    icon: 'success',
    title: message,
  });
};

export default successAlert;
