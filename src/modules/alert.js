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

const successAlert = () => {
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully',
  });
};

export default successAlert;
