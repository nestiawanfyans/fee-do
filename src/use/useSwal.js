import Swal from "sweetalert2";

export const useSwal = () => {
    const baseOptions = {
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    }

    const Modal = {
        options: baseOptions,
        Fire() {
            return new Promise((resolve, reject) => {
                Swal.fire(this.options).then(r => {
                    if (r.isConfirmed) {
                        resolve(r)
                    }
                }).catch((e) => {
                    reject(e)
                })
            })
        },
        Confirm(params) {
            this.options = {
                ...baseOptions,
                ...params,
                icon: 'warning',
                confirmButtonText: 'Yes, submit now!'
            }

            return this
        },
        Input(params) {
            this.options = {
                ...baseOptions,
                ...params
            }

            return this
        },
        htmlInput(params) {
            this.options = {
                ...baseOptions,
                ...params,
                confirmButtonText: 'Yes, submit now!',
                width: '800px'
            }

            return this
        },
        validationMessage(msg) {
            return Swal.showValidationMessage(msg)
        }
    }

    const Toast = {
        options: {
            toast: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        },
        fire: async function () {
            await Swal.fire(this.options)
        },
        Success(msg) {
            this.options = {
                ...this.options,
                icon: "success",
                title: "Success!",
                text: msg
            }

            return this.fire()
        },
        Error(msg) {
            this.options = {
                ...this.options,
                icon: "error",
                title: "Error",
                text: msg
            }

            return this.fire()
        }
    }

    return {
        Toast,
        Modal,
    }
}
